// pages/sha-1.js
import Layout from '../components/layout/Layout';

export default function Sha1Page() {
  return (
    <Layout>
      <header style={{ textAlign: 'center', padding: '2rem 0' }}>
        <h1>SHA-1 - Secure Hash Algorithm 1</h1>
        <p>SHA-1, güvenli bir hash algoritması olarak tasarlanmış, ancak günümüzde bazı güvenlik açıkları nedeniyle kullanım dışı kalmaya başlayan bir hash fonksiyonudur.</p>
      </header>

      <section>
        <h2>SHA-1 Nedir?</h2>
        <p>
          SHA-1 (Secure Hash Algorithm 1), ABD Ulusal Güvenlik Ajansı (NSA) tarafından 1993 yılında tasarlanmış ve 1995 yılında yayınlanmıştır. Algoritma, sabit uzunlukta bir hash değeri (özet) üretmek için giriş olarak verilen veriyi işler ve 160-bit uzunluğunda bir hash değeri üretir.
        </p>
        <p>
          SHA-1, bir süre boyunca güvenli kabul edilmiş olsa da, 2005'te keşfedilen güvenlik açıkları nedeniyle birçok uygulamada yerini SHA-2 ve SHA-3'e bırakmıştır.
        </p>
      </section>

      <section>
        <h3>SHA-1'in Çalışma Prensibi</h3>
        <p>
          SHA-1, bir dizi matematiksel işlem ve bit manipülasyonu kullanarak veri üzerinde sıkıştırma fonksiyonları uygular. Bu süreç şunları içerir:
        </p>
        <ol>
          <li>Veri Ön İşleme: Giriş verisi, belirli bir boyutta bloklara ayrılır ve doldurma (padding) uygulanır.</li>
          <li>Başlangıç Değerleri: Algoritma, sabit başlangıç değerleri (initialization vector) ile başlar.</li>
          <li>Çevrimler: Her bir veri bloğu üzerinde 80 tur boyunca matematiksel işlemler gerçekleştirilir.</li>
          <li>Hash Değeri Üretimi: Sonunda, giriş verisine karşılık gelen 160-bit uzunluğunda hash değeri üretilir.</li>
        </ol>
      </section>

      <section>
        <h3>Kullanım Alanları</h3>
        <p>SHA-1 algoritması, özellikle geçmişte birçok uygulamada kullanılmıştır:</p>
        <ul>
          <li><strong>Dijital İmzalar:</strong> İmzalanan verinin bütünlüğünü sağlamak için kullanılmıştır.</li>
          <li><strong>Sertifika Doğrulama:</strong> SSL/TLS sertifikalarında bir dönem standart olarak yer almıştır.</li>
          <li><strong>Dosya Doğrulama:</strong> İndirilen dosyaların bütünlüğünü doğrulamak için kullanılmıştır.</li>
        </ul>
        <p>
          Ancak günümüzde bu kullanım alanları, SHA-1'in güvenlik açıkları nedeniyle daha modern algoritmalarla değiştirilmiştir.
        </p>
      </section>

      <section>
        <h3>SHA-1'in Güvenlik Açıkları</h3>
        <p>
          SHA-1, 2005 yılında güvenlik uzmanları tarafından çatışma (collision) saldırılarına açık olduğu tespit edildiğinde güvensiz kabul edilmeye başlanmıştır. 2017 yılında Google, SHA-1'in pratik bir çatışma saldırısına maruz kalabileceğini kanıtlamıştır.
        </p>
        <ul>
          <li>Çatışma Saldırısı: İki farklı girişin aynı hash değerini üretmesi.</li>
          <li>Çarpışma Maliyetleri: Modern donanımlar kullanılarak pratik olarak gerçekleştirilebilir hale gelmiştir.</li>
        </ul>
      </section>

      <section>
        <h3>Günümüzde Kullanımı</h3>
        <p>
          SHA-1'in kullanımı günümüzde büyük ölçüde bırakılmıştır ve birçok standart artık SHA-2 veya SHA-3'ü önermektedir. Modern uygulamalarda SHA-1 kullanımı genellikle güvenlik risklerine yol açar.
        </p>
        <p>
          Örneğin, SSL/TLS sertifikalarında SHA-1 desteği 2017'de büyük tarayıcılar tarafından kaldırılmıştır. Bunun yerine SHA-2 veya daha güvenli algoritmalar tercih edilmektedir.
        </p>
      </section>

      <section>
        <h3>Sınırlamalar</h3>
        <p>
          SHA-1'in temel sınırlamaları, modern güvenlik standartlarına uyum sağlayamamasıdır. Güçlü bir kriptografik çözüm için SHA-2 veya SHA-3 gibi algoritmalar tercih edilmelidir.
        </p>
      </section>
    </Layout>
  );
}
