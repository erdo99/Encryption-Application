import CryptoJS from "crypto-js";

/**
 * Şifreleme fonksiyonu.
 * @param {string} message - Şifrelenecek mesaj.
 * @param {string} key - Anahtar.
 * @param {string} method - Şifreleme yöntemi ("AES", "MD5", "SHA256").
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
    default:
      throw new Error("Geçersiz şifreleme yöntemi!");
  }
};

/**
 * Şifre çözme fonksiyonu.
 * @param {string} encryptedMessage - Çözülecek şifrelenmiş mesaj.
 * @param {string} key - Anahtar.
 * @param {string} method - Şifre çözme yöntemi ("AES" destekleniyor).
 * @returns {string} - Çözülmüş mesaj.
 */
export const decryptMessage = (encryptedMessage, key, method = "AES") => {
  if (method === "AES") {
    const bytes = CryptoJS.AES.decrypt(encryptedMessage, key);
    return bytes.toString(CryptoJS.enc.Utf8);
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
