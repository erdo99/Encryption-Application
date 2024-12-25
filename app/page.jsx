"use client";
import React, { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState(""); // Kullanıcı mesajı
  const [encryptedMessage, setEncryptedMessage] = useState(""); // Şifrelenmiş mesaj
  const [decryptedMessage, setDecryptedMessage] = useState(""); // Çözülmüş mesaj
  const [key, setKey] = useState(""); // Kullanıcıdan gelen veya oluşturulan anahtar
  const [encryptionMethod, setEncryptionMethod] = useState("AES"); // Seçilen şifreleme yöntemi

  // Şifreleme isteği
  const handleEncrypt = async () => {
    if (!message) return alert("Mesaj gerekli!");

    const response = await fetch("/api/encrypt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "encrypt", method: encryptionMethod, message }),
    });

    const data = await response.json();
    if (response.ok) {
      console.log(response.type)
      setEncryptedMessage(data.encryptedMessage);
      setKey(data.key); // Oluşturulan anahtarı sakla
    } else {
      alert(data.error);
    }
  };

  // Şifre Çözme isteği
  const handleDecrypt = async () => {
    if (!encryptedMessage || !key) return alert("Şifrelenmiş mesaj ve anahtar gerekli!");

    const response = await fetch("/api/encrypt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "decrypt", method: encryptionMethod, message: encryptedMessage, key }),
    });
    
    const data = await response.json();
    if (response.ok) {
      
      setDecryptedMessage(data.decryptedMessage);
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-black text-2xl font-bold mb-4">Şifreleme ve Şifre Çözme Uygulaması</h1>

      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <label className="block mb-2">Şifreleme Yöntemi:</label>
        <select
          className="w-full p-2 border rounded mb-4"
          value={encryptionMethod}
          onChange={(e) => setEncryptionMethod(e.target.value)}
        >
          <option value="AES">AES</option>
          <option value="MD5">MD5</option>
          <option value="SHA256">SHA256</option>
        </select>

        <label className="block mb-2">Mesaj:</label>
        <textarea
          className="w-full p-2 border rounded mb-4"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          className="w-full bg-blue-500 text-white p-2 rounded mb-4"
          onClick={handleEncrypt}
        >
          Şifrele
        </button>

        <button
          className="w-full bg-green-500 text-white p-2 rounded"
          onClick={handleDecrypt}
        >
          Şifreyi Çöz
        </button>
      </div>

      {encryptedMessage && (
        <div className="mt-6 w-full max-w-md bg-yellow-100 p-4 rounded shadow">
          <h2 className="font-bold">Şifrelenmiş Mesaj:</h2>
          <p className="break-words">{encryptedMessage}</p>
          <h2 className="font-bold mt-4">Anahtar:</h2>
          <p>{key}</p>
        </div>
      )}

      {decryptedMessage && (
        <div className="mt-6 w-full max-w-md bg-green-100 p-4 rounded shadow">
          <h2 className="font-bold">Çözülmüş Mesaj:</h2>
          <p>{decryptedMessage}</p>
        </div>
      )}
    </div>
  );
}
