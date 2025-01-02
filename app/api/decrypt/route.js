import { NextResponse } from "next/server";
import CryptoJS from "crypto-js";

export async function POST(request) {
  const { encryptedText, secretKey } = await request.json();

  if (!encryptedText || !secretKey) {
    return NextResponse.json({ error: "Encrypted text and secret key are required!" }, { status: 400 });
  }

  try {
    const bytes = CryptoJS.AES.decrypt(encryptedText, secretKey);
    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);

    if (!decryptedText) {
      throw new Error("Invalid encrypted text or secret key");
    }

    return NextResponse.json({ decryptedText });
  } catch (error) {
    return NextResponse.json({ error: "Failed to decrypt text" }, { status: 500 });
  }
}
