import { NextResponse } from "next/server";
import { encryptMessage, decryptMessage, generateRandomKey } from "@/lib/crypto";

export async function POST(request) {
  const { type, message, key, method } = await request.json();

  if (!message) {
    return NextResponse.json({ error: "Mesaj gerekli!" }, { status: 400 });
  }

  if (!method) {
    return NextResponse.json({ error: "Şifreleme yöntemi gerekli!" }, { status: 400 });
  }

  if (type === "encrypt") {
    const randomKey = key || generateRandomKey();
    let encrypted;

    switch (method) {
      case "AES":
        encrypted = encryptMessage(message, randomKey, "AES"); // AES şifreleme
        break;
      case "MD5":
        encrypted = encryptMessage(message, randomKey, "MD5"); // MD5 şifreleme
        break;
      case "SHA256":
        encrypted = encryptMessage(message, randomKey, "SHA256"); // SHA256 şifreleme
        break;
      default:
        return NextResponse.json({ error: "Geçersiz şifreleme yöntemi!" }, { status: 400 });
    }

    return NextResponse.json({ encryptedMessage: encrypted, key: randomKey });
  }

  if (type === "decrypt") {
    if (!key) {
      return NextResponse.json({ error: "Anahtar gerekli!" }, { status: 400 });
    }

    let decrypted;

    switch (method) {
      case "AES":
        decrypted = decryptMessage(message, key, "AES"); // AES çözme
        break;
      case "MD5":
        decrypted = decryptMessage(message, key, "MD5"); // MD5 çözme
        break;
      case "SHA256":
        decrypted = decryptMessage(message, key, "SHA256"); // SHA256 çözme
        break;
      default:
        return NextResponse.json({ error: "Geçersiz şifre çözme yöntemi!" }, { status: 400 });
    }

    if (!decrypted) {
      return NextResponse.json({ error: "Geçersiz anahtar veya şifreleme yöntemi!" }, { status: 400 });
    }

    return NextResponse.json({ decryptedMessage: decrypted });
  }

  return NextResponse.json({ error: "Geçersiz işlem türü!" }, { status: 400 });
}
