// Updated crypto.js
import CryptoJS from "crypto-js";
import crypto from "node:crypto";

/**
 * Şifreleme fonksiyonu.
 * @param {string} message - Şifrelenecek mesaj.
 * @param {string} key - Public veya secret key.
 * @param {string} method - Şifreleme yöntemi ("AES", "MD5", "SHA256", "RSA").
 * @returns {string} - Şifrelenmiş mesaj.
 */
export const encryptMessage = (message, key, method = "AES") => {
  switch (method) {
    case "AES":
      return CryptoJS.AES.encrypt(message, key).toString();
    case "MD5":
      return CryptoJS.MD5(message).toString();
    case "SHA256":
      return CryptoJS.SHA256(message).toString();
    case "RSA": {
      const buffer = Buffer.from(message, "utf8");
      const encrypted = crypto.publicEncrypt(key, buffer);
      return encrypted.toString("base64");
    }
    default:
      throw new Error("Geçersiz şifreleme yöntemi!");
  }
};

/**
 * Şifre çözme fonksiyonu.
 * @param {string} encryptedMessage - Çözülecek şifrelenmiş mesaj.
 * @param {string} key - Private veya secret key.
 * @param {string} method - Şifre çözme yöntemi ("AES", "RSA").
 * @returns {string} - Çözülmüş mesaj.
 */
export const decryptMessage = (encryptedMessage, key, method = "AES") => {
  if (method === "AES") {
    const bytes = CryptoJS.AES.decrypt(encryptedMessage, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  } else if (method === "RSA") {
    const buffer = Buffer.from(encryptedMessage, "base64");
    const decrypted = crypto.privateDecrypt(key, buffer);
    return decrypted.toString("utf8");
  } else {
    throw new Error("Bu yöntem için şifre çözme desteklenmiyor!");
  }
};

/**
 * Rastgele anahtar üretici.
 * @returns {string} - Rastgele üretilmiş anahtar.
 */
export const generateRandomKey = () => {
  return CryptoJS.lib.WordArray.random(16).toString(CryptoJS.enc.Hex);
};
