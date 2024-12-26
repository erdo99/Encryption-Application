"use client";
import React, { useState, useEffect, useRef } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [encryptedMessage, setEncryptedMessage] = useState("");
  const [decryptedMessage, setDecryptedMessage] = useState("");
  const [key, setKey] = useState("");
  const [encryptionMethod, setEncryptionMethod] = useState("AES");
  const canvasRef = useRef(null);

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
      setEncryptedMessage(data.encryptedMessage);
      setKey(data.key);
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

  // Matrix animasyonu
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0";
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        const x = i * fontSize;
        ctx.fillText(text, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    };

    const interval = setInterval(draw, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 overflow-hidden">
      {/* Matrix animasyonu */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />

      {/* Konuşma kutusu */}
      <div className="relative z-10 w-full max-w-md bg-white p-6 rounded shadow">
        <h1 className="text-black text-2xl font-bold mb-4">Şifreleme ve Şifre Çözme Uygulaması</h1>

        <label className="block mb-2">Şifreleme Yöntemi:</label>
        <select
          className="w-full p-2 border rounded mb-4"
          value={encryptionMethod}
          onChange={(e) => setEncryptionMethod(e.target.value)}
        >
          <option value="AES">AES</option>
          <option value="MD5">MD5</option>
          <option value="SHA256">SHA256</option>
          <option value="RSA">RSA</option>

        </select>

        <label className="block mb-2">Mesaj:</label>
        <textarea
          className="w-full p-2 border rounded mb-4"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

          <button
            className="w-full bg-blue-500 text-white p-2 rounded mb-4 hover:bg-blue-700 transition-colors"
            onClick={handleEncrypt}
          >
            Şifrele
          </button>

          <button
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-700 transition-colors"
            onClick={handleDecrypt}
          >
            Şifreyi Çöz
          </button> 

        {encryptedMessage && (
          <div className="mt-6 bg-yellow-100 p-4 rounded shadow">
            <h2 className="font-bold">Şifrelenmiş Mesaj:</h2>
            <p className="break-words">{encryptedMessage}</p>
            <h2 className="font-bold mt-4">Anahtar:</h2>
            <p>{key}</p>
          </div>
        )}

        {decryptedMessage && (
          <div className="mt-6 bg-green-100 p-4 rounded shadow">
            <h2 className="font-bold">Çözülmüş Mesaj:</h2>
            <p>{decryptedMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}
