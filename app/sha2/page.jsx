// pages/sha-2.js
import Layout from '../components/layout/Layout';

export default function Sha2Page() {
  return (
    <Layout>
      <header style={{ textAlign: 'center', padding: '2rem 0' }}>
        <h1>SHA-2 - Secure Hash Algorithm 2</h1>
        <p>SHA-2, güvenliği artırılmış bir hash fonksiyonu ailesidir ve genellikle veri bütünlüğü sağlamak ve verilerin yetkisiz değiştirilmediğini doğrulamak için kullanılır.</p>
      </header>

      <section>
        <h2>SHA-2 Nedir?</h2>
        <p>
          SHA-2 (Secure Hash Algorithm 2), ABD Ulusal Güvenlik Ajansı (NSA) tarafından 2001 yılında tasarlanmış bir grup kriptografik hash fonksiyonudur. Bu algoritmalar, sabit uzunlukta bir hash değeri (özet) üretmek için giriş olarak verilen herhangi bir boyuttaki veriyi alır.
        </p>
        <p>
          SHA-2, önceki sürüm olan SHA-1'in güvenlik açıklarını gidermek için geliştirilmiştir ve günümüzde kriptografik uygulamalarda standart olarak kabul edilmektedir.
        </p>
      </section>

      <section>
        <h3>SHA-2 Ailesi</h3>
        <p>SHA-2 ailesi, farklı hash uzunlukları sunan çeşitli algoritmalar içerir:</p>
        <ul>
          <li>SHA-224</li>
          <li>SHA-256</li>
          <li>SHA-384</li>
          <li>SHA-512</li>
          <li>SHA-512/224</li>
          <li>SHA-512/256</li>
        </ul>
        <p>
          En yaygın kullanılanları SHA-256 ve SHA-512'dir. Bu algoritmalar, hem hız hem de güvenlik açısından farklı senaryolara uygun çözümler sunar.
        </p>
      </section>

      <section>
        <h3>SHA-2'nin Çalışma Prensibi</h3>
        <p>
          SHA-2, bir dizi matematiksel işlem ve bit manipülasyonu kullanarak veri üzerinde sıkıştırma fonksiyonları uygular. Bu süreç şunları içerir:
        </p>
        <ol>
          <li>Veri Ön İşleme: Giriş verisinin uzunluğu sabit bloklara ayrılır ve doldurma (padding) uygulanır.</li>
          <li>Başlangıç Değerleri: Algoritma, sabit başlangıç değerleriyle (initialization vector) başlar.</li>
          <li>Çevrimler: Her bir veri bloğu üzerinde çoklu çevrimler boyunca matematiksel işlemler gerçekleştirilir.</li>
          <li>Hash Değeri Üretimi: Sonunda, giriş verisine karşılık gelen sabit uzunlukta hash değeri üretilir.</li>
        </ol>
      </section>

      <section>
        <h3>Kullanım Alanları</h3>
        <p>SHA-2 algoritması, birçok güvenlik ve kriptografi uygulamasında kullanılır:</p>
        <ul>
          <li><strong>Dijital İmzalar:</strong> İmzalanan verinin bütünlüğünü sağlamak için kullanılır.</li>
          <li><strong>Sertifika Doğrulama:</strong> SSL/TLS sertifikalarının doğruluğunu kontrol etmek için kullanılır.</li>
          <li><strong>Şifreleme:</strong> Parolaların hashlenmesi ve saklanmasında önemli bir rol oynar.</li>
          <li><strong>Blockchain:</strong> Bloklar arasındaki bağlantıyı ve veri bütünlüğünü sağlamak için kullanılır.</li>
        </ul>
      </section>

      <section>
        <h3>SHA-2'nin Avantajları</h3>
        <ul>
          <li>Yüksek güvenlik: Çatışma (collision) riskini minimize eder.</li>
          <li>Performans: Modern donanımlarda optimize edilebilir.</li>
          <li>Esneklik: Farklı hash uzunlukları sunar, böylece farklı uygulamalara uygun hale gelir.</li>
        </ul>
      </section>

      <section>
        <h3>Sınırlamalar</h3>
        <p>
          Her ne kadar SHA-2 günümüzde güvenli kabul edilse de, kuantum hesaplama teknolojisinin gelişmesiyle gelecekte zayıflık gösterebilir. Bu nedenle, kuantum güvenli algoritmaların araştırılması devam etmektedir.
        </p>
      </section>
    </Layout>
  );
}
