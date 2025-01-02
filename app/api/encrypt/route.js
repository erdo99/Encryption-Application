import { NextResponse } from "next/server";
import { encryptMessage, decryptMessage, generateRandomKey } from "@/lib/crypto.js";

export async function POST(request) {
  const { type, message, key, method } = await request.json();

  if (!message) {
    return NextResponse.json({ error: "Mesaj gerekli!" }, { status: 400 });
  }

  if (!method) {
    return NextResponse.json({ error: "Şifreleme yöntemi gerekli!" }, { status: 400 });
  }

  if (type === "encrypt") {
    let randomKey = key || (method === "RSA" ? null : generateRandomKey());
    let encrypted;

    if (method === "RSA") {
      if (!key) {
        return NextResponse.json({ error: "RSA şifreleme için bir public key gerekli!" }, { status: 400 });
      }
      encrypted = encryptMessage(message, key, "RSA");
    } else {
      switch (method) {
        case "AES":
          encrypted = encryptMessage(message, randomKey, "AES");
          break;
        case "MD5":
          encrypted = encryptMessage(message, randomKey, "MD5");
          break;
        case "SHA256":
          encrypted = encryptMessage(message, randomKey, "SHA256");
          break;
        default:
          return NextResponse.json({ error: "Geçersiz şifreleme yöntemi!" }, { status: 400 });
      }
    }

    return NextResponse.json({ encryptedMessage: encrypted, key: randomKey });
  }

  if (type === "decrypt") {
    if (!key) {
      return NextResponse.json({ error: "Anahtar gerekli!" }, { status: 400 });
    }

    let decrypted;

    if (method === "RSA") {
      decrypted = decryptMessage(message, key, "RSA");
    } else if (method === "AES") {
      decrypted = decryptMessage(message, key, "AES");
    } else {
      return NextResponse.json({ error: "Geçersiz şifre çözme yöntemi!" }, { status: 400 });
    }

    if (!decrypted) {
      return NextResponse.json({ error: "Geçersiz anahtar veya şifreleme yöntemi!" }, { status: 400 });
    }

    return NextResponse.json({ decryptedMessage: decrypted });
  }

  return NextResponse.json({ error: "Geçersiz işlem türü!" }, { status: 400 });
}
