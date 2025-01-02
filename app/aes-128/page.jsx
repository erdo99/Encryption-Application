"use client";
import { useState } from 'react';
import Layout from '../components/layout/Layout';

export default function AESPage() {
  const [inputText, setInputText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    'AES (Advanced Encryption Standard) modern şifreleme algoritmaları arasında yer alır.',
    'AES, veri şifreleme ve güvenli veri transferinde yaygın olarak kullanılır.',
    'AES, 128-bit, 192-bit ve 256-bit anahtar uzunluklarını destekler.',
    'Bu algoritma, hızlı ve güvenli olması nedeniyle tercih edilir.',
  ];
  const secretKey = process.env.SECRET_KEY;

  const encrypt = async () => {
    try {
      const response = await fetch('/api/aes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'encrypt',
          text: inputText,
          secretKey: 'process.env.SECRET_KEY', // Secret key burada sabit veya dinamik olabilir.
        }),
      });
  
      const data = await response.json();
      if (response.ok) {
        setEncryptedText(data.result);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error('Error during encryption:', error);
    }
  };

  const decrypt = async () => {
    try {
      const response = await fetch('/api/route', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'decrypt',
          text: encryptedText,
          secretKey: 'your-secret-key', // Aynı secret key kullanılmalı.
        }),
      });
  
      const data = await response.json();
      if (response.ok) {
        setDecryptedText(data.result);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error('Error during decryption:', error);
    }
  };

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <Layout>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1>AES Encryption</h1>
        <p>Advanced Encryption Standard (AES) şifreleme algoritması</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem', padding: '2rem' }}>
        {/* Şifreleme ve Şifre Çözme Bölümleri */}
        <div style={{ flex: 1, textAlign: 'center' }}>
          <h2>Şifreleme</h2>
          <textarea
            rows={5}
            placeholder="Şifrelemek için metin girin"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            style={{ width: '100%', marginBottom: '1rem' }}
          />
          <button onClick={encrypt} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
            Şifrele
          </button>
          {encryptedText && (
            <p style={{ marginTop: '1rem', wordBreak: 'break-word' }}>
              <strong>Şifrelenmiş Metin:</strong> {encryptedText}
            </p>
          )}
        </div>

        <div style={{ flex: 1, textAlign: 'center' }}>
          <h2>Şifre Çözme</h2>
          <button onClick={decrypt} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
            Şifreyi Çöz
          </button>
          {decryptedText && (
            <p style={{ marginTop: '1rem', wordBreak: 'break-word' }}>
              <strong>Şifre Çözülmüş Metin:</strong> {decryptedText}
            </p>
          )}
        </div>

        {/* Slayt Gösterisi */}
        <div style={{ flex: 1, textAlign: 'center' }}>
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
          <button onClick={nextSlide} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
            Sonraki
          </button>
        </div>
      </div>
    </Layout>
  );
}
