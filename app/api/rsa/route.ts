import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import NodeRSA from 'node-rsa';

let privateKey: string | undefined = process.env.PRIVATE_KEY;
let publicKey: string | undefined = process.env.PUBLIC_KEY;

if (!privateKey || !publicKey) {
  console.error('PRIVATE_KEY and PUBLIC_KEY must be set in environment variables.');
}

const privateKeyRSA = privateKey ? new NodeRSA(privateKey, 'pkcs1-private-pem') : null;
const publicKeyRSA = publicKey ? new NodeRSA(publicKey, 'pkcs1-public-pem') : null;

export async function POST(request: NextRequest) {
  try {
    if (!privateKeyRSA || !publicKeyRSA) {
      return NextResponse.json({ error: 'Keys are not initialized.' }, { status: 500 });
    }

    const body = await request.json();
    const { action, text } = body;

    if (!text || !action) {
      return NextResponse.json({ error: 'Missing text or action parameter' }, { status: 400 });
    }

    if (action === 'encrypt') {
      const encrypted = publicKeyRSA.encrypt(text, 'base64');
      return NextResponse.json({ result: encrypted });
    } 

    if (action === 'decrypt') {
      const decrypted = privateKeyRSA.decrypt(text, 'utf8');
      return NextResponse.json({ result: decrypted });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('Error processing the request:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}