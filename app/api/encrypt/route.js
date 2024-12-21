import { NextResponse } from "next/server";
import { encryptMessage, decryptMessage, generateRandomKey } from "@/lib/crypto";

export async function POST(request) {
  const { type, message, key } = await request.json();

  if (!message) {
    return NextResponse.json({ error: "Mesaj gerekli!" }, { status: 400 });
  }

  if (type === "encrypt") {
    const randomKey = key || generateRandomKey();
    const encrypted = encryptMessage(message, randomKey);
    return NextResponse.json({ encryptedMessage: encrypted, key: randomKey });
  }

  if (type === "decrypt") {
    if (!key) {
      return NextResponse.json({ error: "Anahtar gerekli!" }, { status: 400 });
    }

    const decrypted = decryptMessage(message, key);
    if (!decrypted) {
      return NextResponse.json({ error: "Geçersiz anahtar!" }, { status: 400 });
    }

    return NextResponse.json({ decryptedMessage: decrypted });
  }

  return NextResponse.json({ error: "Geçersiz işlem türü!" }, { status: 400 });
}
