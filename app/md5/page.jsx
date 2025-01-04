// pages/md5.js
import Layout from '../components/layout/Layout';

export default function Md5Page() {
  return (
    <Layout>
      <header style={{
        textAlign: 'center',
        padding: '2rem 0',
        backgroundColor: '#1a1a2e',
        color: '#e0e0e0',
        borderBottom: '4px solid #0f3460',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#e94560' }}>MD5 - Message Digest Algorithm 5</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          MD5, veri özetlerini oluşturmak için tasarlanmış, ancak günümüzde güvenlik açıkları nedeniyle tavsiye edilmeyen bir hash algoritmasıdır.
        </p>
      </header>

      <main style={{ padding: '2rem', backgroundColor: '#f0f0f0' }}>
        <Section
          title="MD5 Nedir?"
          content={[
            "MD5 (Message Digest Algorithm 5), 1991 yılında Ron Rivest tarafından geliştirilmiş bir hash fonksiyonudur. Sabit uzunlukta, 128-bit hash değerleri üretmek için tasarlanmıştır ve bir zamanlar yaygın olarak kullanılmıştır.",
            "Algoritma, performansı ve basitliği nedeniyle birçok uygulamada tercih edilmiştir, ancak modern güvenlik standartlarını karşılayamaması nedeniyle artık önerilmemektedir."
          ]}
        />

        <Section
          title="MD5'in Çalışma Prensibi"
          content={[
            "MD5, girdiyi belirli bir boyutta veri bloklarına ayırır ve her blok üzerinde matematiksel işlemler gerçekleştirir. Temel adımları şunlardır:",
            <ol key="steps" style={{ marginLeft: '1.5rem', color: '#0f3460' }}>
              <li>Veri Ön İşleme: Veri bloklara ayrılır ve doldurma (padding) uygulanır.</li>
              <li>Başlangıç Değerleri: Sabit başlangıç değerleri (IV) ile işlem başlar.</li>
              <li>Sıkıştırma Fonksiyonu: Her veri bloğu, karmaşık matematiksel işlemlerden geçirilir.</li>
              <li>Sonuç Üretimi: Tüm bloklar işlendiğinde, 128-bit uzunluğunda bir hash değeri oluşturulur.</li>
            </ol>
          ]}
        />

        <Section
          title="Kullanım Alanları"
          content={[
            "MD5, geçmişte birçok alanda yaygın olarak kullanılmıştır:",
            <ul key="usage" style={{ marginLeft: '1.5rem', color: '#e94560' }}>
              <li><strong>Dosya Bütünlüğü:</strong> İndirilen dosyaların doğruluğunu kontrol etmek için kullanılmıştır.</li>
              <li><strong>Şifre Saklama:</strong> Kullanıcı şifrelerinin hashlenmesi için bir zamanlar tercih edilmiştir.</li>
              <li><strong>Dijital İmzalar:</strong> İmzalanan verilerin özetlerini oluşturmak için kullanılmıştır.</li>
            </ul>,
            "Ancak, güvenlik açıkları nedeniyle bu alanlarda artık daha modern algoritmalar tercih edilmektedir."
          ]}
        />

        <Section
          title="MD5'in Güvenlik Açıkları"
          content={[
            "MD5, günümüzde güvenli kabul edilmemektedir. Temel güvenlik açıkları şunlardır:",
            <ul key="vulnerabilities" style={{ marginLeft: '1.5rem', color: '#0f3460' }}>
              <li><strong>Çatışma Saldırıları:</strong> İki farklı girişin aynı hash değerini üretmesi kolaylaşmıştır.</li>
              <li><strong>Hızlı Hesaplama:</strong> MD5'in hızlı çalışması, brute-force saldırılarını kolaylaştırır.</li>
              <li><strong>Zayıf Çarpışma Direnci:</strong> Özel olarak hazırlanmış girişlerle aynı hash değerini üretmek mümkündür.</li>
            </ul>,
            "Bu açıklar, MD5'in özellikle güvenli şifreleme ve kimlik doğrulama gibi uygulamalarda kullanılmasını tehlikeli hale getirir."
          ]}
        />

        <Section
          title="Günümüzde Kullanımı"
          content={[
            "MD5, güvenlik gereksinimi olmayan bazı durumlarda hâlâ kullanılabilir, ancak modern uygulamalarda SHA-2 veya SHA-3 gibi daha güvenli algoritmalar önerilmektedir.",
            "Örneğin, MD5 hâlâ dosya bütünlüğü kontrolü için kullanılabilir, ancak çatışma saldırıları riskine karşı dikkatli olunmalıdır."
          ]}
        />

        <Section
          title="Sınırlamalar"
          content={[
            "MD5, modern güvenlik gereksinimlerini karşılamamaktadır ve kriptografik güvenlik gerektiren uygulamalarda kullanılmamalıdır. Daha güvenli alternatiflere geçiş yapmak önemlidir."
          ]}
        />
      </main>
    </Layout>
  );
}

function Section({ title, content }) {
  return (
    <section style={{
      marginBottom: '2rem',
      backgroundColor: '#ffffff',
      padding: '1.5rem',
      borderRadius: '8px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{ color: '#e94560' }}>{title}</h2>
      {content.map((text, index) => <p key={index} style={{ lineHeight: '1.6' }}>{text}</p>)}
    </section>
  );
}
