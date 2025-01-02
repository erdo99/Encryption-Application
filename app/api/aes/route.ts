import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import CryptoJS from 'crypto-js'

const SECRET_KEY = process.env.SECRET_KEY || 'default-secret-key'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, text } = body

    if (action === 'encrypt') {
      const encrypted = CryptoJS.AES.encrypt(text, SECRET_KEY).toString()
      return NextResponse.json({ result: encrypted })
    } 
    
    else if (action === 'decrypt') {
      const decrypted = CryptoJS.AES.decrypt(text, SECRET_KEY).toString(CryptoJS.enc.Utf8)
      return NextResponse.json({ result: decrypted })
    } 
    
    else {
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
    }
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}