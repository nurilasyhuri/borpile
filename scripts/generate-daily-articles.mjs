import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const artikelDir = path.join(projectRoot, 'src', 'content', 'artikel');

function getIndonesianDate(date = new Date()) {
  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
  const wibDate = new Date(utc + (3600000 * 7));
  const day = wibDate.getDate();
  const month = months[wibDate.getMonth()];
  const year = wibDate.getFullYear();
  return `${day} ${month} ${year}`;
}

const NATIONWIDE_TABLE = `## Tabel Jangkauan Operasional & Mobilisasi Rig Se-Indonesia

Borpile Nusantara mengoperasikan armada bore pile mini crane, hydraulic dry rig, dan jacking pile ke seluruh koridor Indonesia:

| Wilayah / Koridor | Cakupan Kawasan Proyek | Kesiapan Armada di Lapangan | Moda Mobilisasi Alat | Estimasi Lead Time | Status Layanan |
|---|---|---|---|---|:---:|
| **Koridor Jawa** | Surabaya, Jabodetabek, Bandung, Semarang, Malang Raya | Mini Crane, Hydraulic Rig, Strauss Pile Set | Truk Engkel & Fuso Dedicated | 1 – 2 Hari Kerja | Siap Survei & Eksekusi |
| **Koridor Sumatera** | Medan, Pekanbaru, Palembang, Lampung | Unit Mini Crane & Rig Kelly Bar | Ekspedisi Truk Lintas Sumatera | 3 – 5 Hari Kerja | Siap Survei & Eksekusi |
| **Koridor Kalimantan** | Balikpapan, Samarinda, Banjarmasin | Armada Rig Compact Akses Gang | Kargo Peti Kemas Laut Surabaya | 5 – 8 Hari Kerja | Siap Survei & Eksekusi |
| **Koridor Sulawesi** | Makassar, Manado, Kendari, Palu | Unit Mini Crane Sasis Roda Cepat | Kapal Kontainer Cepat Pelni | 6 – 9 Hari Kerja | Siap Survei & Eksekusi |
| **Koridor Bali & Nusra** | Denpasar, Badung, Gianyar, Mataram Lombok | Unit Ramah Wisata Rendah Polusi | Truk Penyeberangan Ferry | 2 – 4 Hari Kerja | Siap Survei & Eksekusi |
| **Koridor Maluku & Papua** | Jayapura, Timika, Sorong, Ambon | Modul Bor Kompak Bongkar Pasang | Jalur Logistik Kapal Tol Laut | 8 – 14 Hari Kerja | Siap Survei & Eksekusi |`;

function renderArticle(art, publishDate) {
  const tableHeaderStr = `| ${art.tableHeaders.join(' | ')} |\n| ${art.tableHeaders.map(() => '---').join(' | ')} |`;
  const tableRowsStr = art.tableRows.map(row => `| ${row.join(' | ')} |`).join('\n');
  const mandorNotesStr = art.mandorNotes.map((note, idx) => `> ${idx + 1}. ${note}`).join('\n>\n');
  const stepsStr = art.steps.map((st, idx) => `${idx + 1}. **${st.title}:** ${st.desc}`).join('\n');
  const faqsMarkdown = art.faqs.map(f => `### ${f.q}\n${f.a}`).join('\n\n');
  const schemaFaqs = art.faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.a.replace(/\n/g, ' ').replace(/"/g, '\\"')
    }
  }));

  return `---
title: '${art.title.replace(/'/g, "''")}'
seoTitle: '${art.seoTitle.replace(/'/g, "''")}'
description: '${art.description.replace(/'/g, "''")}'
publishDate: '${publishDate}'
author: 'Tim Teknik Borpile Nusantara'
category: '${art.category}'
tags: [${art.tags.map(t => `'${t}'`).join(', ')}]
heroImage: '${art.heroImage}'
featured: false
---

# ${art.title}

${art.intro}

---

## 1. ${art.section1Title}

${art.section1Content}

---

> ### Catatan Mandor & Poin Kritis Lapangan
${mandorNotesStr}

---

## 2. ${art.tableTitle}

${tableHeaderStr}
${tableRowsStr}

---

## 3. ${art.section3Title}

${stepsStr}

---

${NATIONWIDE_TABLE}

---

## Tanya Jawab Teknis (FAQ)

${faqsMarkdown}

---

## Solusi Rekayasa Pondasi Dalam Bersama Borpile Nusantara

${art.ctaText || 'Konsultasikan desain struktur pondasi dan kebutuhan tiang bor pile proyek Anda langsung bersama tim geoteknik ahli Borpile Nusantara:'}

- **Hitung Perkiraan Biaya & Titik Tiang**: [Kalkulator Simulasi Pondasi](/kalkulator/)
- **Lihat Spesifikasi Alat**: [Armada Bore Pile & Mini Crane Mandiri](/layanan/)
- **Konsultasi WhatsApp**: [Hubungi Tim Estimator Ahli (0851-8300-5070)](https://wa.me/6285183005070?text=${encodeURIComponent(`Halo Borpile Nusantara, saya ingin konsultasi kebutuhan bor pile untuk ${art.title}`)}

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": ${JSON.stringify(schemaFaqs, null, 2)}
}
\`\`\`
`;
}

// 28 Future Automated Topics (Ready for daily 7-article batches)
const TOPIC_DATABASE = [
  // --- BATCH 2 (Tomorrow Morning) ---
  {
    slug: 'jasa-bor-pile-bandung-cimahi',
    title: 'Jasa Bor Pile Bandung & Cimahi: Solusi Pengeboran Lahan Miring Berkontur & Batuan Keras',
    seoTitle: 'Jasa Bor Pile Bandung Cimahi - Spesialis Lahan Miring & Batuan',
    description: 'Layanan jasa bor pile Bandung, Cimahi, dan Bandung Barat. Ahli pengeboran tanah vulkanik berbatu, villa berkontur terjal, dan gedung bertingkat.',
    category: 'Layanan Daerah',
    tags: ['jasa bor pile bandung', 'bor pile cimahi', 'pondasi lahan miring', 'bore pile villa bandung', 'mini crane bandung'],
    heroImage: '/images/machine-rig.webp',
    intro: 'Wilayah Bandung Raya dan Cimahi didominasi formasi vulkanik tanah berlereng terjal dan batuan andesit keras. Menanam pondasi tiang bor di lereng Dago, Lembang, hingga Cimahi menuntut presisi vertikal dan mata bor khusus pemecah batuan.',
    section1Title: 'Karakteristik Batuan Vulkanik & Kemiringan Lereng Bandung',
    section1Content: 'Pengeboran di Bandung menghadapi lapisan breksi vulkanik dengan bongkahan batu boulder keras. Menggunakan tiang pancang pukul berisiko meretakkan lereng. Unit Mini Crane Torsi Tinggi dengan mata bor roller cone karbida mampu melumatkan batuan andesit secara stabil tanpa getaran merusak.',
    mandorNotes: [
      '**Pengecekan Vertikalitas di Lereng Terjal:** Pasang perancah kerja kokoh dan periksa kelurusan stang bor setiap 3 meter dengan theodolite.',
      '**Manajemen Air Sirkulasi Tebing:** Arahkan air sirkulasi wash boring ke bak penampung tertutup agar tidak memicu erosi lereng tanah asli.'
    ],
    tableTitle: 'Tabel Rekomendasi Kedalaman dan Diameter Tiang Bor Bandung',
    tableHeaders: ['Kawasan Proyek', 'Karakteristik Batuan', 'Diameter Tiang', 'Kedalaman Rata-Rata', 'Rekomendasi Mesin'],
    tableRows: [
      ['Dago Pakar & Lembang', 'Batuan andesit & breksi', 'Ø 40 – 60 cm', '10 – 16 meter', 'Mini Crane Torsi Tinggi + Roller Bit'],
      ['Pusat Kota Bandung', 'Lempung tufaan aluvial', 'Ø 30 – 50 cm', '12 – 22 meter', 'Mini Crane Wash Boring'],
      ['Cimahi & Padalarang', 'Batuan kapur & tanah liat', 'Ø 40 – 60 cm', '12 – 18 meter', 'Mini Hydraulic Rig'],
      ['Gedebage & Buahbatu', 'Endapan danau purba lunak', 'Ø 40 – 60 cm', '16 – 26 meter', 'Mini Crane Heavy Duty']
    ],
    section3Title: 'SOP Pelaksanaan Kerja di Lahan Berkontur',
    steps: [
      { title: 'Persiapan Landasan Kerja', desc: 'Pembuatan platform datar sementara untuk stabilitas mesin.' },
      { title: 'Pengeboran Penetrasi Batuan', desc: 'Pengeboran bertahap dengan roller cone bit bertekanan hidrolis.' },
      { title: 'Pembersihan Dasar Tiang', desc: 'Flushing air hingga serpihan batuan terangkat bersih.' },
      { title: 'Pengecoran Pipa Tremi', desc: 'Pengecoran kontinyu beton mutu K-350 anti segregasi.' }
    ],
    faqs: [
      { q: 'Apakah mesin bor pile mampu menembus batuan keras di Lembang Bandung?', a: 'Mampu, armada kami dilengkapi mata bor roller cone karbida baja widia yang didesain menggerus batuan andesit vulkanik keras.' },
      { q: 'Berapa hari mobilisasi armada ke wilayah Bandung?', a: 'Mobilisasi armada mini crane dan tenaga ahli ke Bandung memakan waktu 1-2 hari kerja.' }
    ]
  },
  {
    slug: 'jasa-bor-pile-cikarang-karawang',
    title: 'Jasa Bor Pile Cikarang & Karawang: Pondasi Beban Berat Kawasan Industri Pabrik & Gudang',
    seoTitle: 'Jasa Bor Pile Cikarang Karawang - Pondasi Pabrik Industri',
    description: 'Layanan jasa bor pile Cikarang, Karawang, GIIC, KIIC, Suryacipta, Jababeka. Pondasi tiang bor kapasitas tonase tinggi untuk mesin industri dan gudang logistik.',
    category: 'Layanan Daerah',
    tags: ['jasa bor pile cikarang', 'bor pile karawang', 'pondasi pabrik industri', 'tiang bor gudang', 'hydraulic rig cikarang'],
    heroImage: '/images/machine-rig.webp',
    intro: 'Kawasan industri Cikarang dan Karawang menampung fasilitas manufaktur, gudang logistik high-bay, dan pusat data dengan beban lantai mencapai 8-10 ton/m2. Pondasi bore pile kapasitas beban tinggi menjadi tulang punggung keselamatan struktur pabrik.',
    section1Title: 'Kebutuhan Kapasitas Aksial & Kepatuhan Standar K3 Kawasan',
    section1Content: 'Tiang bor berdiameter Ø 50 cm hingga Ø 100 cm ditanam sedalam 18 hingga 30 meter untuk menyalurkan beban dinamis mesin industri ke lapisan batupasir padat (N-SPT > 50). Seluruh personel mematuhi kepatuhan CSMS, JSA, dan SIO alat berat.',
    mandorNotes: [
      '**Pemisahan Pondasi Mesin Bergetar:** Tiang pondasi untuk mesin kompresor atau stamping press harus dipisahkan dari tiang kolom utama gedung.',
      '**Pengecekan Mutu Slump Beton Industri:** Gunakan beton ready mix fc 30 MPa (K-350) slump 18 cm dengan pengujian silinder pada setiap mixer.'
    ],
    tableTitle: 'Spesifikasi Tiang Bor Fasilitas Industri Cikarang Karawang',
    tableHeaders: ['Fasilitas Industri', 'Diameter Tiang', 'Kedalaman Rencana', 'Kapasitas Aksial Izin', 'Pilihan Rig'],
    tableRows: [
      ['Gudang Logistik High-Bay', 'Ø 50 – 60 cm', '16 – 24 meter', '80 – 150 Ton', 'Hydraulic Rotary Rig'],
      ['Pondasi Mesin Stamping Heavy', 'Ø 60 – 80 cm', '18 – 26 meter', '140 – 260 Ton', 'Hydraulic Rig Torsi Tinggi'],
      ['Gedung Kantor Pabrik 4 Lantai', 'Ø 60 – 80 cm', '20 – 30 meter', '160 – 280 Ton', 'Hydraulic Rotary Rig'],
      ['Pondasi Tangki Silo Kimia', 'Ø 50 – 60 cm', '18 – 25 meter', '90 – 160 Ton', 'Mini Crane Heavy']
    ],
    section3Title: 'Tahapan Kerja Standar Industri',
    steps: [
      { title: 'Izin Kerja & Safety Induction', desc: 'Pemeriksaan kelengkapan APD dan izin gerbang kawasan.' },
      { title: 'Penentuan Koordinat Total Station', desc: 'Pemetaan titik tiang akurat dengan toleransi <2 cm.' },
      { title: 'Pengeboran Presisi Kelly Bar', desc: 'Pengeboran teleskopik cepat 4-8 titik per hari.' },
      { title: 'Uji PIT & PDA Integritas', desc: 'Pengujian integritas 100% tiang sesuai standar ASTM.' }
    ],
    faqs: [
      { q: 'Apakah Borpile Nusantara memiliki kelengkapan CSMS kawasan industri?', a: 'Ya, tim kami berpengalaman di GIIC, KIIC, Suryacipta, MM2100 dengan kepatuhan dokumen HSE lengkap.' },
      { q: 'Berapa kapasitas produksi tiang per hari di kawasan industri?', a: 'Dengan unit Hydraulic Rig, kami mampu mengebor 4 sampai 8 titik tiang bor pile per hari.' }
    ]
  },
  {
    slug: 'jasa-bor-pile-malang-batu',
    title: 'Jasa Bor Pile Malang Raya & Kota Batu: Solusi Pondasi Tanah Pasir Vulkanik & Akses Gang Sempit',
    seoTitle: 'Jasa Bor Pile Malang Batu - Spesialis Mini Crane Gang Sempit',
    description: 'Layanan jasa bor pile Malang, Kepanjen, dan Kota Batu. Solusi pondasi rumah bertingkat, hotel resort lereng, dan ruko di gang sempit perkotaan.',
    category: 'Layanan Daerah',
    tags: ['jasa bor pile malang', 'bor pile batu', 'mini crane malang', 'bore pile ruko malang', 'pondasi lereng batu'],
    heroImage: '/images/machine-minicrane.webp',
    intro: 'Malang Raya dan Kota Batu memiliki formasi tanah pasir vulkanik Gunung Semeru-Arjuno yang gembur di permukaan namun stabil di kedalaman. Pembangunan villa resort berkontur dan hunian padat menuntut alat mini crane lincah tanpa getaran.',
    section1Title: 'Karakteristik Pasir Vulkanik & Solusi Dinding Casing',
    section1Content: 'Pasir vulkanik lepas mudah gugur jika terkena sirkulasi air biasa. Kami menggunakan temporary casing baja di bagian atas serta aditif bentonite slurry untuk mengunci stabilitas dinding lubang bor hingga beton cor mengalir padat.',
    mandorNotes: [
      '**Antisipasi Caving Pasir Lepas:** Pasang casing baja 3-4 meter di bibir lubang sebelum mesin mini crane memulai wash boring.',
      '**Akses Jalan Lingkungan Malang:** Unit mini crane sasis roda kami dapat masuk gang selebar 2,5 meter tanpa membongkar pagar tetangga.'
    ],
    tableTitle: 'Tabel Rekomendasi Tiang Bor Pile Malang & Kota Batu',
    tableHeaders: ['Kawasan Proyek', 'Karakteristik Lahan', 'Diameter Tiang', 'Kedalaman Efektif', 'Jenis Bangunan'],
    tableRows: [
      ['Kota Malang (Pusat / Soekarno Hatta)', 'Pemukiman padat, gang sempit', 'Ø 30 – 40 cm', '10 – 16 meter', 'Ruko, kafe bertingkat, rumah tinggal'],
      ['Kota Batu (Bumiaji & Oro-Oro Ombo)', 'Lereng miring, tanah pasir tuff', 'Ø 40 – 60 cm', '12 – 18 meter', 'Villa resort, hotel wisata lereng'],
      ['Kepanjen & Malang Selatan', 'Lempung kapur perbukitan', 'Ø 30 – 50 cm', '12 – 20 meter', 'Gedung kantor, fasilitas publik'],
      ['Singosari & Lawang', 'Kawasan pergudangan industri', 'Ø 40 – 60 cm', '14 – 22 meter', 'Gudang distribusi dan pabrik']
    ],
    section3Title: 'Tahapan Pengeboran di Wilayah Malang',
    steps: [
      { title: 'Survei Akses Jalan Gang', desc: 'Pengukuran radius belok truk armada menuju tapak.' },
      { title: 'Instalasi Casing Pengaman', desc: 'Pemasangan pipa pelindung pasir vulkanik lepas.' },
      { title: 'Pengeboran Sirkulasi Air Terkendali', desc: 'Pengeboran hingga menembus lapisan tanah cadas.' },
      { title: 'Pengecoran Pipa Tremi Cepat', desc: 'Pengecoran beton ready mix tanpa jeda waktu.' }
    ],
    faqs: [
      { q: 'Apakah mesin bor pile bisa masuk ke perumahan gang sempit di Malang?', a: 'Bisa, armada mini crane kami dirancang kompak untuk manuver jalan lingkungan selebar 2,5 meter.' },
      { q: 'Apakah tanah pasir di Batu aman dibor dengan wash boring?', a: 'Sangat aman bila diproteksi temporary casing baja dan lumpur polimer stabilizer.' }
    ]
  },
  {
    slug: 'perhitungan-kebutuhan-besi-tulangan-spiral-bore-pile',
    title: 'Perhitungan Kebutuhan Besi Tulangan Spiral Tiang Bor Pile Sesuai SNI 2847:2019',
    seoTitle: 'Perhitungan Besi Tulangan Spiral Bore Pile SNI 2847:2019',
    description: 'Panduan teknis menghitung jumlah tulangan utama, rasio tulangan spiral, panjang penyaluran sambungan lewatan, dan selimut beton tiang bor pile.',
    category: 'Geoteknik & Desain',
    tags: ['besi tulangan bore pile', 'begel spiral', 'sni 2847:2019', 'selimut beton', 'pembesian pondasi'],
    heroImage: '/images/engineer-team.webp',
    intro: 'Fabrikasi keranjang tulangan (*rebar cage*) tiang bor pile menentukan kapasitas menahan momen lentur gempa dan gaya lateral tanah. Kesalahan menghitung panjang lewatan (*lap splice*) atau spasi begel spiral berisiko menggagalkan integritas struktural.',
    section1Title: 'Rasio Tulangan Minimum & Rumus Sengkang Spiral SNI',
    section1Content: 'SNI 2847:2019 mensyaratkan rasio tulangan longitudinal minimum 0.5% - 1.0% dari luas penampang bruto beton ($A_g$). Tulangan geser sengkang spiral memiliki rumus rasio volume $\\rho_s = 0.45 (\\frac{A_g}{A_{ch}} - 1) \\frac{f\'_c}{f_{yt}}$, menjamin kekangan inti beton saat menerima beban gempa.',
    mandorNotes: [
      '**Wajib Pasang Tahu Beton / Spacer Minimal 75 mm:** Karena dicor langsung ke dalam tanah basah, tebal selimut beton (*concrete cover*) tiang bor wajib minimal 7.5 cm.',
      '**Pengelasan Titik Kritis Keranjang Besi:** Las titik (*tack weld*) tulangan utama dengan begel spiral setiap 3 lingkaran agar keranjang tidak melengkung saat diangkat katrol.'
    ],
    tableTitle: 'Tabel Konfigurasi Pembesian Standar Tiang Bor Pile',
    tableHeaders: ['Diameter Tiang', 'Tulangan Utama Minimum', 'Begel Spiral Sengkang', 'Panjang Lewatan (Lap Splice)', 'Tebal Selimut Beton'],
    tableRows: [
      ['Ø 30 cm', '6 D13 Ulir SNI', 'Spiral Ø 8 mm pitch 15 cm', 'Minimal 60 cm (45d)', '75 mm'],
      ['Ø 40 cm', '6 D16 Ulir SNI', 'Spiral Ø 10 mm pitch 15 cm', 'Minimal 75 cm (45d)', '75 mm'],
      ['Ø 50 cm', '8 D16 / D19 Ulir SNI', 'Spiral Ø 10 mm pitch 10–15 cm', 'Minimal 90 cm (45d)', '75 mm'],
      ['Ø 60 cm', '10 D19 / D22 Ulir SNI', 'Spiral Ø 12 mm pitch 10–12 cm', 'Minimal 100 cm (45d)', '75 mm'],
      ['Ø 80 cm', '14 D22 / D25 Ulir SNI', 'Spiral Ø 13 mm pitch 10 cm', 'Minimal 120 cm (45d)', '75 mm']
    ],
    section3Title: 'SOP Fabrikasi & Penurunan Keranjang Besi',
    steps: [
      { title: 'Pemotongan & Pembengkokan Besi', desc: 'Pemotongan presisi bar bender sesuai schedule gambar kerja.' },
      { title: 'Pemasangan Ring Pengaku (Stiffener)', desc: 'Pemasangan cincin besi D16 setiap 2 meter di dalam silinder.' },
      { title: 'Pengikatan Beton Tahu Spacer', desc: 'Pemasangan silinder beton di sekeliling keranjang setiap jarak 2 meter.' },
      { title: 'Penurunan Vertikal Bertahap', desc: 'Penurunan perlahan ke dalam lubang bor menggunakan tali winch katrol.' }
    ],
    faqs: [
      { q: 'Berapa tebal selimut beton minimum untuk tiang bore pile?', a: 'Sesuai SNI 2847:2019, selimut beton tiang bor pile yang dicor langsung di tanah adalah 75 mm (7.5 cm).' },
      { q: 'Apakah boleh menggunakan besi polos untuk tulangan utama bore pile?', a: 'Tidak disarankan. Tulangan longitudinal wajib menggunakan besi ulir (deformed bar) minimal BJTS 420B untuk cengkeraman optimal.' }
    ]
  },
  {
    slug: 'jasa-bor-pile-solo-jogja',
    title: 'Jasa Bor Pile Solo & Jogja: Pengeboran Presisi Bebas Getaran untuk Kawasan Heritage & Pemukiman',
    seoTitle: 'Jasa Bor Pile Solo Jogja - Bebas Getaran Cagar Budaya',
    description: 'Layanan jasa bor pile Solo, Surakarta, Sukoharjo, Jogja, Sleman, Bantul. Pengeboran tanah ramah lingkungan bebas getaran di kawasan cagar budaya dan residensial.',
    category: 'Layanan Daerah',
    tags: ['jasa bor pile solo', 'bor pile jogja', 'bore pile sleman', 'mini crane solo', 'pondasi bebas getaran heritage'],
    heroImage: '/images/machine-minihydraulic.webp',
    intro: 'Wilayah Solo Raya dan Yogyakarta sarat dengan bangunan bersejarah, situs cagar budaya kraton, serta kawasan residensial padat. Menggunakan alat pancang getar konvensional sangat dilarang demi menjaga keutuhan bangunan bersejarah di sekitarnya.',
    section1Title: 'Solusi Pondasi Zero-Vibration di Tanah Endapan Merapi',
    section1Content: 'Karakteristik tanah di Jogja dan Sleman dipengaruhi endapan pasir lanauan fluviovulkanik Gunung Merapi, sedangkan Solo dipengaruhi dataran aluvial Bengawan Solo. Pengeboran Mini Crane Wash Boring dan Mini Hydraulic Rig kami beroperasi dengan desibel rendah (<65 dB) dan getaran <1.5 mm/s.',
    mandorNotes: [
      '**Pengeboran Dekat Bangunan Tua Heritage:** Wajib pasang sensor getaran (*vibration monitor*) untuk memastikan getaran tidak melampaui 2 mm/s.',
      '**Waspadai Pasir Lepas di Sleman & Kaliurang:** Gunakan casing pemandu 4 meter di awal lubang agar endapan pasir Merapi tidak tergerus air bilas.'
    ],
    tableTitle: 'Tabel Rekomendasi Pondasi Solo & Yogyakarta',
    tableHeaders: ['Kota / Wilayah', 'Zona Geoteknik', 'Diameter Tiang', 'Kedalaman Efektif', 'Peruntukan Bangunan'],
    tableRows: [
      ['Yogyakarta Kota & Malioboro', 'Heritage padat, pasir lanau', 'Ø 30 – 50 cm', '10 – 16 meter', 'Hotel butik, resto, gedung komersial'],
      ['Sleman & Depok Jogja', 'Pasir abu vulkanik Merapi', 'Ø 40 – 60 cm', '12 – 18 meter', 'Apartemen, kampus, ruko modern'],
      ['Kota Solo (Surakarta)', 'Aluvial Bengawan Solo lunak', 'Ø 30 – 50 cm', '14 – 22 meter', 'Rumah tinggal, ruko, klinik kesehatan'],
      ['Sukoharjo & Karanganyar', 'Lempung cadas berkontur', 'Ø 40 – 60 cm', '12 – 20 meter', 'Pabrik tekstil, gudang logistik']
    ],
    section3Title: 'SOP Pengeboran Ramah Lingkungan Solo-Jogja',
    steps: [
      { title: 'Koordinasi Warga & Pengurus Heritage', desc: 'Sosialisasi metode kerja tanpa getaran kepada lingkungan.' },
      { title: 'Pemasangan Peredam Kebisingan', desc: 'Isolasi knalpot mesin diesel dengan muffler peredam suara.' },
      { title: 'Pengeboran Presisi Minim Lumpur', desc: 'Sirkulasi lumpur di bak tertutup tanpa ceceran ke jalan.' },
      { title: 'Pengecoran Bersih & Sterilisasi Area', desc: 'Pengecoran pipa tremi dan pembersihan total tapak proyek.' }
    ],
    faqs: [
      { q: 'Apakah aman mengebor pondasi tepat di sebelah bangunan kuno Jogja?', a: 'Sangat aman, rotary cutting action mesin mini crane tidak menimbulkan getaran kejut sehingga dinding kuno tidak berisiko retak.' },
      { q: 'Berapa estimasi waktu pengerjaan 15 titik bor pile di Solo?', a: 'Dapat diselesaikan dalam waktu 3 sampai 4 hari kerja menggunakan 1 set unit mini crane.' }
    ]
  },
  {
    slug: 'penyebab-beton-tiang-bor-keropos-honeycombing',
    title: 'Penyebab Beton Tiang Bor Keropos (Honeycombing) dan Cara Menghindari Cacat Cor Pipa Tremi',
    seoTitle: 'Penyebab Tiang Bor Keropos & Solusi Pipa Tremi - Panduan Mutu',
    description: 'Pelajari penyebab tiang bor pile keropos berongga (honeycombing), segregasi agregat, dan leher tiang patah (necking). Panduan pencegahan berstandar SNI.',
    category: 'Standar Mutu',
    tags: ['tiang bor keropos', 'honeycombing beton', 'pipa tremi', 'segregasi beton', 'cacat tiang bor'],
    heroImage: '/images/machine-tremie.webp',
    intro: 'Cacat struktural pada tiang bore pile seperti rongga keropos (*honeycombing*), inklusi lumpur (*mud inclusion*), dan segregasi beton merupakan bahaya laten yang tersembunyi di bawah tanah. Jika tidak dicegah, daya dukung aksial tiang dapat merosot hingga lebih dari 60%.',
    section1Title: 'Mekanisme Terjadinya Segregasi & Cacat Cor Pipa Tremi',
    section1Content: 'Penyebab utama tiang bor keropos adalah nilai slump beton yang terlalu kental (<14 cm), ujung pipa tremi terangkat keluar dari adukan beton basah saat pengecoran, atau spasi tulangan besi spiral yang terlalu rapat sehingga kerikil beton tersangkut menjadi sarang lebah.',
    mandorNotes: [
      '**Patenkan Aturan Ujung Tremi Terbenam Minimal 2 Meter:** Jangan pernah membiarkan ujung bawah pipa tremi terangkat di atas permukaan adukan beton segar selama pengecoran berlangsung.',
      '**Uji Slump Wajib 18 ± 2 cm:** Slump yang terlalu encer (>22 cm) menyebabkan bleeding, sementara slump kental (<16 cm) akan menyumbat corong tremi.'
    ],
    tableTitle: 'Tabel Jenis Kerusakan Tiang Bor & Metode Pencegahannya',
    tableHeaders: ['Jenis Cacat', 'Penyebab Utama di Lapangan', 'Dampak Struktural', 'Metode Pencegahan Standar SNI'],
    tableRows: [
      ['Honeycombing (Keropos)', 'Spasi besi terlalu rapat, slump rendah', 'Kekuatan tekan beton turun drastis', 'Gunakan slump 18±2 cm, spasi begel min 10 cm'],
      ['Mud Inclusion (Lumpur Masuk)', 'Tremi terangkat keluar beton basah', 'Tiang terputus terisi kantong lumpur', 'Benamkan pipa tremi minimal 2–3 meter'],
      ['Necking (Penyempitan Tiang)', 'Dinding lubang longsor saat casing dicabut', 'Luas penampang efektif berkurang', 'Jaga tinggi kolom beton dalam casing >1.5 m'],
      ['Cold Joint (Sambungan Dingin)', 'Keterlambatan truk mixer ready mix >3 jam', 'Bidang lemah geser horizontal', 'Gunakan retarder beton setting 4–5 jam']
    ],
    section3Title: 'SOP Pengecoran Tremi Anti Keropos',
    steps: [
      { title: 'Uji Slump & Visual Beton di Lapangan', desc: 'Memastikan slump 18 cm dan adukan homogen sebelum cor.' },
      { title: 'Pemasangan Bola Sterofoam Pemandu', desc: 'Memasukkan bola gabus di mulut tremi sebagai pemisah awal lumpur dan beton.' },
      { title: 'Penuangan Beton Kontinyu', desc: 'Pengisian beton tanpa jeda hingga dasar lubang terdesak naik.' },
      { title: 'Pengangkatan Tremi Bertahap Terukur', desc: 'Pemotongan pipa tremi per ruas dengan mengukur kedalaman sisa.' }
    ],
    faqs: [
      { q: 'Bagaimana cara mendeteksi tiang bor pile yang keropos di dalam tanah?', a: 'Menggunakan pengujian gelombang suara Pile Integrity Test (PIT) ASTM D5882 yang membaca pantulan gelombang anomali penampang.' },
      { q: 'Apakah boleh menggunakan vibrator mesin pada pengecoran bore pile?', a: 'Dilarang keras. Vibrator akan mencampur beton dengan air lumpur sekitarnya. Aliran gravitasi tremi slump 18 cm sudah memadat sendiri.' }
    ]
  },
  {
    slug: 'jasa-bor-pile-bali-denpasar-badung',
    title: 'Jasa Bor Pile Bali (Denpasar, Badung, Gianyar): Pondasi Ramah Lingkungan untuk Villa & Resort Tebing',
    seoTitle: 'Jasa Bor Pile Bali Denpasar Badung - Pondasi Villa Resort Tebing',
    description: 'Layanan jasa bor pile di Bali: Denpasar, Canggu, Seminyak, Uluwatu, Nusa Dua, Ubud. Ahli pengeboran tebing kapur dan pondasi ramah lingkungan pariwisata.',
    category: 'Layanan Daerah',
    tags: ['jasa bor pile bali', 'bor pile denpasar', 'bor pile badung', 'bore pile villa uluwatu', 'pondasi tebing bali'],
    heroImage: '/images/machine-minihydraulic.webp',
    intro: 'Pariwisata Bali menuntut pembangunan villa mewah di tebing kapur Uluwatu, hotel resort di tepi jurang Ubud, dan hunian eksklusif di Canggu-Seminyak. Konstruksi pondasi di Pulau Dewata wajib memenuhi regulasi keheningan lingkungan, pelestarian tebing kapur, dan estetika alam.',
    section1Title: 'Pengeboran Batuan Kapur Tebing & Regulasi Ramah Wisata',
    section1Content: 'Kawasan Bali Selatan didominasi formasi batugamping terumbu karang keras (*limestone karst*), sedangkan kawasan Ubud didominasi lereng lembah sungai vulkanik. Kami mengerahkan unit Mini Hydraulic Rig dan Mini Crane rendah kebisingan untuk menembus batuan kapur tanpa mengganggu kenyamanan wisatawan.',
    mandorNotes: [
      '**Waspadai Rongga Gua Karst Bawah Tanah (Sinkhole):** Di kawasan Bukit Jimbaran dan Uluwatu, periksa adanya rongga karst agar adukan beton cor tidak hilang tersedot ke dalam gua bawah tanah.',
      '**Pencegahan Polusi Lingkungan Wisata:** Gunakan mesin berstandar emisi bersih dan pasang peredam suara di sekitar area villa yang beroperasi.'
    ],
    tableTitle: 'Tabel Rekomendasi Pondasi Proyek Wisata Bali',
    tableHeaders: ['Kawasan Proyek', 'Kondisi Formasi Tanah', 'Diameter Tiang', 'Kedalaman Rencana', 'Peruntukan Bangunan'],
    tableRows: [
      ['Uluwatu, Pecatu, Ungasan', 'Batugamping karst tebing keras', 'Ø 40 – 60 cm', '10 – 16 meter', 'Luxury cliff villa, beach club tebing'],
      ['Canggu, Seminyak, Kerobokan', 'Endapan pasir pantai & aluvial', 'Ø 30 – 50 cm', '12 – 18 meter', 'Villa boutique, kafe resto, hotel resort'],
      ['Ubud & Gianyar', 'Lereng lembah tufaan sungai', 'Ø 40 – 60 cm', '12 – 20 meter', 'Resort retreat tebing, jembatan gantung'],
      ['Denpasar Kota & Sanur', 'Aluvial pesisir tanah lunak', 'Ø 30 – 50 cm', '14 – 22 meter', 'Ruko, rumah sakit, gedung komersial']
    ],
    section3Title: 'SOP Pelaksanaan Ramah Lingkungan di Bali',
    steps: [
      { title: 'Perizinan Adat & Lingkungan Banjar', desc: 'Koordinasi santun dengan pengurus desa adat dan banjar setempat.' },
      { title: 'Pengeboran Torsi Karbida Limestone', desc: 'Penetrasi batuan kapur terumbu tanpa getaran palu pukul.' },
      { title: 'Pengamanan Lumpur Limbah', desc: 'Lumpur disedot tertutup ke dalam tangki vacuum untuk dibuang ke TPA resmi.' },
      { title: 'Pengecoran Beton Ready Mix Khusus', desc: 'Pengecoran pipa tremi dengan beton tahan klorida garam laut.' }
    ],
    faqs: [
      { q: 'Apakah pengeboran tiang bor menimbulkan suara bising di area villa Bali?', a: 'Tidak, kami menggunakan mesin mini hydraulic modern dengan peredam knalpot ganda yang beroperasi sangat tenang.' },
      { q: 'Bagaimana jika saat mengebor tebing kapur ditemukan rongga gua bawah tanah?', a: 'Kami memasang temporary casing baja yang menutup celah rongga tersebut sebelum pengecoran pipa tremi dilakukan.' }
    ]
  }
];

function main() {
  const args = process.argv.slice(2);
  let count = 7;
  const countIdx = args.indexOf('--count');
  if (countIdx !== -1 && args[countIdx + 1]) {
    count = parseInt(args[countIdx + 1], 10);
  }

  const existingFiles = fs.readdirSync(artikelDir);
  const existingSlugs = new Set(existingFiles.map((file) => file.replace(/\.md$/, '')));

  const availableTopics = TOPIC_DATABASE.filter((art) => !existingSlugs.has(art.slug));

  if (availableTopics.length === 0) {
    console.log('Semua topik dalam database generator saat ini sudah dipublikasikan.');
    return;
  }

  const topicsToPublish = availableTopics.slice(0, count);
  const todayStr = getIndonesianDate();
  console.log(`[Publisher] Menyiapkan publikasi ${topicsToPublish.length} artikel SEO baru (Tanggal Publikasi: ${todayStr})...`);

  let createdCount = 0;
  for (const art of topicsToPublish) {
    const filePath = path.join(artikelDir, `${art.slug}.md`);
    if (fs.existsSync(filePath)) {
      console.log(`[Lewati] File sudah ada: ${art.slug}.md`);
      continue;
    }
    const content = renderArticle(art, todayStr);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`[Baru] Sukses membuat: ${art.slug}.md -> "${art.title}"`);
    createdCount++;
  }

  console.log(`[Selesai] Total ${createdCount} artikel SEO baru berhasil diunggah.`);
}

main();
