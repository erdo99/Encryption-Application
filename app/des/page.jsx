export default function DesPage() {
    return (
      <div>
        <header
          style={{
            textAlign: 'center',
            padding: '2rem 0',
            background: 'linear-gradient(to right, #4facfe, #00f2fe)',
            color: '#fff',
            borderRadius: '10px',
            margin: '1rem',
          }}
        >
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>DES - Data Encryption Standard</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            DES, simetrik şifreleme algoritmalarından biridir ve 56 bit anahtar uzunluğu ile güvenlik sağlar.
          </p>
        </header>
  
        <main style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <section
            style={{
              background: '#fff',
              border: '1px solid #ddd',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              padding: '1.5rem',
            }}
          >
            <h2 style={{ marginBottom: '1rem', color: '#333' }}>DES Hakkında</h2>
            <p style={{ fontSize: '1rem', color: '#555' }}>
              Data Encryption Standard (DES), 1970'lerde IBM tarafından geliştirilen ve 1977'de Amerika Birleşik Devletleri hükümeti tarafından standart olarak kabul edilen simetrik şifreleme algoritmasıdır. DES, 56 bit anahtar kullanarak veriyi şifreler.
            </p>
          </section>
  
          <section
            style={{
              background: '#fff',
              border: '1px solid #ddd',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              padding: '1.5rem',
            }}
          >
            <h3 style={{ marginBottom: '1rem', color: '#333' }}>Özellikler</h3>
            <ul style={{ paddingLeft: '1.5rem', listStyle: 'disc', color: '#555' }}>
              <li style={{ marginBottom: '0.5rem' }}>Anahtar Uzunluğu: 56 bit</li>
              <li style={{ marginBottom: '0.5rem' }}>Şifreleme Yöntemi: Simetrik</li>
              <li>Güvenlik Seviyesi: Düşük (modern saldırılara karşı zayıf)</li>
            </ul>
          </section>
        </main>
      </div>
    );
  }
  