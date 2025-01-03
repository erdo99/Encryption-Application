'use client';

import { useState } from 'react';
import { JSEncrypt } from 'jsencrypt';

export default function RSAEncryptionPage() {
  const [inputText, setInputText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const [error, setError] = useState('');
  const [slideValue, setSlideValue] = useState(50);

  const [keyPair, setKeyPair] = useState({
    publicKey: '',
    privateKey: '',
  });

  const generateKeys = () => {
    const jsEncrypt = new JSEncrypt({ default_key_size: '1024' });
    const publicKey = jsEncrypt.getPublicKey();
    const privateKey = jsEncrypt.getPrivateKey();
    setKeyPair({ publicKey, privateKey });
    setError('');
  };

  const handleEncrypt = () => {
    try {
      if (!keyPair.publicKey) {
        setError('Public key is not generated.');
        return;
      }
      const jsEncrypt = new JSEncrypt();
      jsEncrypt.setPublicKey(keyPair.publicKey);
      const encrypted = jsEncrypt.encrypt(inputText);
      if (!encrypted) {
        setError('Encryption failed.');
      } else {
        setEncryptedText(encrypted);
        setError('');
      }
    } catch (err) {
      setError('Encryption failed.');
    }
  };

  const handleDecrypt = () => {
    try {
      if (!keyPair.privateKey) {
        setError('Private key is not generated.');
        return;
      }
      const jsEncrypt = new JSEncrypt();
      jsEncrypt.setPrivateKey(keyPair.privateKey);
      const decrypted = jsEncrypt.decrypt(encryptedText);
      if (!decrypted) {
        setError('Decryption failed.');
      } else {
        setDecryptedText(decrypted);
        setError('');
      }
    } catch (err) {
      setError('Decryption failed.');
    }
  };

  return (
    <div
      style={{
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        margin: 'auto',
      }}
    >
      <h1 style={{ textAlign: 'center', color: '#333' }}>RSA Encryption Tool</h1>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ fontWeight: 'bold', color: '#555' }}>
          Slider Value: {slideValue}
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={slideValue}
          onChange={(e) => setSlideValue(Number(e.target.value))}
          style={{
            width: '100%',
            marginTop: '10px',
          }}
        />
      </div>

      <button
        onClick={generateKeys}
        style={{
          padding: '10px 20px',
          marginBottom: '20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          width: '100%',
        }}
      >
        Generate Key Pair
      </button>

      {keyPair.publicKey && (
        <div>
          <h3 style={{ color: '#333' }}>Public Key</h3>
          <textarea
            readOnly
            value={keyPair.publicKey}
            rows={4}
            style={{
              width: '100%',
              marginBottom: '10px',
              borderRadius: '4px',
              padding: '10px',
              border: '1px solid #ccc',
              fontFamily: 'monospace',
            }}
          />
        </div>
      )}
      {keyPair.privateKey && (
        <div>
          <h3 style={{ color: '#333' }}>Private Key</h3>
          <textarea
            readOnly
            value={keyPair.privateKey}
            rows={4}
            style={{
              width: '100%',
              marginBottom: '10px',
              borderRadius: '4px',
              padding: '10px',
              border: '1px solid #ccc',
              fontFamily: 'monospace',
            }}
          />
        </div>
      )}

      <textarea
        placeholder="Enter your message here"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        rows={4}
        style={{
          width: '100%',
          marginBottom: '10px',
          borderRadius: '4px',
          padding: '10px',
          border: '1px solid #ccc',
          fontFamily: 'monospace',
        }}
      />
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={handleEncrypt}
          style={{
            flex: 1,
            padding: '10px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Encrypt
        </button>
        <button
          onClick={handleDecrypt}
          style={{
            flex: 1,
            padding: '10px',
            backgroundColor: '#FF5722',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Decrypt
        </button>
      </div>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      {encryptedText && (
        <div>
          <h3 style={{ color: '#333', marginTop: '20px' }}>Encrypted Message</h3>
          <textarea
            readOnly
            value={encryptedText}
            rows={4}
            style={{
              width: '100%',
              marginBottom: '10px',
              borderRadius: '4px',
              padding: '10px',
              border: '1px solid #ccc',
              fontFamily: 'monospace',
            }}
          />
        </div>
      )}
      {decryptedText && (
        <div>
          <h3 style={{ color: '#333', marginTop: '20px' }}>Decrypted Message</h3>
          <textarea
            readOnly
            value={decryptedText}
            rows={4}
            style={{
              width: '100%',
              borderRadius: '4px',
              padding: '10px',
              border: '1px solid #ccc',
              fontFamily: 'monospace',
            }}
          />
        </div>
      )}
    </div>
  );
}
