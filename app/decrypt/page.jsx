"use client";

import { useState } from "react";

export default function Home() {
  const [encryptedText, setEncryptedText] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const handleDecrypt = async () => {
    try {
      const response = await fetch("/api/decrypt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ encryptedText, secretKey }),
      });

      const data = await response.json();

      if (data.decryptedText) {
        setDecryptedText(data.decryptedText);
      } else {
        alert(data.error || "Failed to decrypt");
      }
    } catch (error) {
      alert("An error occurred");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Şifre Çözme</h1>
      <div style={styles.form}>
        <input
          type="text"
          placeholder="Şifreli Metin"
          value={encryptedText}
          onChange={(e) => setEncryptedText(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Anahtar"
          value={secretKey}
          onChange={(e) => setSecretKey(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleDecrypt} style={styles.button}>
          Şifreyi Çöz
        </button>
      </div>
      {decryptedText && (
        <p style={styles.result}>
          <strong>Çözülen Metin:</strong> {decryptedText}
        </p>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f9f9f9",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "200px",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "5px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  result: {
    marginTop: "20px",
    color: "#333",
  },
};
