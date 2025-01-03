'use client';

import { useState } from 'react';

export default function RSAEncryptionPage() {
  const [inputText, setInputText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const [error, setError] = useState('');
  const [slideValue, setSlideValue] = useState(50); // Slide için başlangıç değeri

  const handleEncrypt = async () => {
    try {
      const response = await fetch('/api/rsa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'encrypt', text: inputText }),
      });

      const data = await response.json();
      if (response.ok) {
        setEncryptedText(data.result);
        setError('');
      } else {
        setError(data.error || 'An error occurred.');
      }
    } catch (err) {
      setError('Failed to encrypt the text.');
    }
  };

  const handleDecrypt = async () => {
    try {
      const response = await fetch('/api/rsa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'decrypt', text: encryptedText }),
      });

      const data = await response.json();
      if (response.ok) {
        setDecryptedText(data.result);
        setError('');
      } else {
        setError(data.error || 'An error occurred.');
      }
    } catch (err) {
      setError('Failed to decrypt the text.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>RSA Encryption/Decryption with Slider</h1>
      
      <div>
        <label>Slider Value: {slideValue}</label>
        <input
          type="range"
          min="0"
          max="100"
          value={slideValue}
          onChange={(e) => setSlideValue(Number(e.target.value))}
          style={{ width: '100%', marginBottom: '20px' }}
        />
      </div>

      <textarea
        placeholder="Enter your message here"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        rows={4}
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={handleEncrypt} style={{ padding: '10px' }}>Encrypt</button>
        <button onClick={handleDecrypt} style={{ padding: '10px' }}>Decrypt</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {encryptedText && (
        <div>
          <h3>Encrypted Message</h3>
          <textarea
            readOnly
            value={encryptedText}
            rows={4}
            style={{ width: '100%', marginBottom: '10px' }}
          />
        </div>
      )}
      {decryptedText && (
        <div>
          <h3>Decrypted Message</h3>
          <textarea
            readOnly
            value={decryptedText}
            rows={4}
            style={{ width: '100%' }}
          />
        </div>
      )}
    </div>
  );
}
