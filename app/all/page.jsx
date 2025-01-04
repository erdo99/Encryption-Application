import Layout from '../components/layout/Layout';
import Divider from '../components/ui/Divider';
import CardsContainer from '../components/ui/CardsContainer';
import Link from 'next/link';

export const metadata = {
  title: 'Encryptia',
};

export default function Page() {
  return (
    <Layout>
      <header style={{ textAlign: 'center', padding: '2rem 0' }}>
        <h1>Şifreleme</h1>
        <p>Şifreleme Algoritmaları Kitapçığı</p>
      </header>

      {/* Symmetric Encryption Cards */}
      <CardsContainer>
        <Link href="/des">
          <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', textAlign: 'center', cursor: 'pointer' }}>
            <h3>DES</h3>
            <p>Data Encryption System</p>
            <p>Key Bits: 56 bits</p>
            <p>Security Level: Low</p>
          </div>
        </Link>

        <Link href="/rsa">
          <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', textAlign: 'center', cursor: 'pointer' }}>
          <h3>RSA</h3>
          <p>Rivest-Shamir-Adleman</p>
          <p>Key Length: 512-4096 bits</p>
          <p>Security Level: High</p>
          </div>
        </Link>

        <Link href="/aes-128">
          <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', textAlign: 'center', cursor: 'pointer' }}>
            <h3>AES-128</h3>
            <p>Advanced Encryption Standard</p>
            <p>Key Bits: 128 bits</p>
            <p>Security Level: High</p>
          </div>
        </Link>
      </CardsContainer>

      <Divider />

      {/* Hash Function Cards */}
      <CardsContainer>
        <Link href="/md5">
          <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', textAlign: 'center', cursor: 'pointer' }}>
            <h3>MD5</h3>
            <p>Message-Digest Algorithm</p>
            <p>Security Level: Medium</p>
            <p>Block Size: 128 bit</p>
          </div>
        </Link>

        <Link href="/sha1">
          <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', textAlign: 'center', cursor: 'pointer' }}>
            <h3>SHA-1</h3>
            <p>Secure Hash Algorithm</p>
            <p>Security Level: Low</p>
            <p>Block Size: 160 bit</p>
          </div>
        </Link>

        <Link href="/sha2">
          <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', textAlign: 'center', cursor: 'pointer' }}>
            <h3>SHA-2</h3>
            <p>Secure Hash Algorithm</p>
            <p>Security Level: High</p>
            <p>Block Size: 256 bit</p>
          </div>
        </Link>
      </CardsContainer>
    </Layout>
  );
}
