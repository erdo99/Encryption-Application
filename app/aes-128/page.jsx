"use client";
import { useState } from 'react';

export default function AESPage() {
  const [inputText, setInputText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const [slideIndex, setSlideIndex] = useState(0);
  const [error, setError] = useState('');

  const slides = [
    'AES (Advanced Encryption Standard) modern şifreleme algoritmaları arasında yer alır.',
    'AES, veri şifreleme ve güvenli veri transferinde yaygın olarak kullanılır.',
    'AES, 128-bit, 192-bit ve 256-bit anahtar uzunluklarını destekler.',
    'Bu algoritma, hızlı ve güvenli olması nedeniyle tercih edilir.',
  ];

  const encrypt = async () => {
    try {
      setError('');
      if (!inputText) {
        setError('Lütfen şifrelenecek metin girin');
        return;
      }

      const response = await fetch('/api/aes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'encrypt',
          text: inputText,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setEncryptedText(data.result);
        setDecryptedText(''); // Şifreleme yapıldığında decrypt sonucunu temizle
      } else {
        setError(data.error || 'Şifreleme sırasında bir hata oluştu');
      }
    } catch (error) {
      setError('Şifreleme işlemi başarısız oldu');
      console.error('Error during encryption:', error);
    }
  };

  const decrypt = async () => {
    try {
      setError('');
      if (!encryptedText) {
        setError('Lütfen şifresi çözülecek metin girin');
        return;
      }

      const response = await fetch('/api/aes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'decrypt',
          text: encryptedText,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setDecryptedText(data.result);
      } else {
        setError(data.error || 'Şifre çözme sırasında bir hata oluştu');
      }
    } catch (error) {
      setError('Şifre çözme işlemi başarısız oldu');
      console.error('Error during decryption:', error);
    }
  };

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#f0f0f0', padding: '1rem' }}>
      {/* Şifreleme Bölümü */}
      <div
        style={{
          flex: 1,
          background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          padding: '2rem',
          color: '#fff',
          marginRight: '1rem',
        }}
      >
        <h2>Şifreleme</h2>
        <textarea
          rows={5}
          placeholder="Şifrelemek için metin girin"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          style={{
            width: '100%',
            padding: '0.5rem',
            borderRadius: '8px',
            border: 'none',
            marginBottom: '1rem',
            boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)',
            color: 'black',
          }}
        />
        <button
          onClick={encrypt}
          style={{
            padding: '0.75rem 1.5rem',
            border: 'none',
            borderRadius: '8px',
            background: '#fff',
            color: '#2575fc',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.background = '#e0e0e0')}
          onMouseOut={(e) => (e.target.style.background = '#fff')}
          disabled={!inputText}
        >
          Şifrele
        </button>
        {encryptedText && (
          <p style={{ marginTop: '1rem', wordBreak: 'break-word', color: '#e0e0e0' }}>
            <strong>Şifrelenmiş Metin:</strong> {encryptedText}
          </p>
        )}
      </div>

      {/* Şifre Çözme ve Slayt Gösterisi */}
      <div style={{ flex: 2, padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <h2>Şifre Çözme</h2>
          <button
            onClick={decrypt}
            style={{
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '8px',
              background: '#2575fc',
              color: '#fff',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
            }}
            disabled={!encryptedText}
          >
            Şifreyi Çöz
          </button>
          {decryptedText && (
            <p style={{ marginTop: '1rem', wordBreak: 'break-word' }}>
              <strong>Şifre Çözülmüş Metin:</strong> {decryptedText}
            </p>
          )}
        </div>

        <div>
          <h2>Açıklamalar</h2>
          <div
            style={{
              border: '1px solid #ccc',
              padding: '1rem',
              borderRadius: '8px',
              background: '#f9f9f9',
              height: '150px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem',
            }}
          >
            {slides[slideIndex]}
          </div>
          <button
            onClick={nextSlide}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              background: '#6a11cb',
              color: '#fff',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            Sonraki
          </button>
        </div>
      </div>
    </div>
  );
}
