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
- **Konsultasi WhatsApp**: [Hubungi Tim Estimator Ahli (0851-8300-5070)](https://wa.me/6285183005070?text=${encodeURIComponent(`Halo Borpile Nusantara, saya ingin konsultasi kebutuhan bor pile untuk ${art.title}`)})

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": ${JSON.stringify(schemaFaqs, null, 2)}
}
\`\`\`
`;
}

// 30 Core Indonesian Strategic Cities & Hubs
const INDONESIA_CITIES = [
  { name: 'Sidoarjo', slug: 'sidoarjo', province: 'Jawa Timur', soil: 'aluvial lempung lunak pesisir delta Brantas', depth: '16 – 24 meter' },
  { name: 'Gresik', slug: 'gresik', province: 'Jawa Timur', soil: 'lempung aluvial pantai dan kawasan industri kapur', depth: '14 – 22 meter' },
  { name: 'Pasuruan', slug: 'pasuruan', province: 'Jawa Timur', soil: 'endapan pasir vulkanik Bromo dan aluvial pantai', depth: '12 – 18 meter' },
  { name: 'Kediri', slug: 'kediri', province: 'Jawa Timur', soil: 'pasir lanauan vulkanik Gunung Kelud', depth: '10 – 16 meter' },
  { name: 'Jember', slug: 'jember', province: 'Jawa Timur', soil: 'tanah lempung berpasir dan endapan vulkanik Raung', depth: '12 – 18 meter' },
  { name: 'Madiun', slug: 'madiun', province: 'Jawa Timur', soil: 'lempung hitam persawahan dan tanah aluvial', depth: '12 – 20 meter' },
  { name: 'Banyuwangi', slug: 'banyuwangi', province: 'Jawa Timur', soil: 'pasir pantai dan batuan cadas vulkanik Ijen', depth: '10 – 16 meter' },
  { name: 'Tangerang Selatan', slug: 'tangerang-selatan', province: 'Banten', soil: 'tanah lempung lanau padat cluster perumahan modern', depth: '12 – 18 meter' },
  { name: 'Bekasi', slug: 'bekasi', province: 'Jawa Barat', soil: 'lempung hitam ekspansif dataran rendah', depth: '16 – 26 meter' },
  { name: 'Depok', slug: 'depok', province: 'Jawa Barat', soil: 'tanah merah latosol liat berkontur perbukitan', depth: '10 – 16 meter' },
  { name: 'Bogor', slug: 'bogor', province: 'Jawa Barat', soil: 'tanah vulkanik merah Salak-Gede berkontur miring', depth: '12 – 18 meter' },
  { name: 'Cirebon', slug: 'cirebon', province: 'Jawa Barat', soil: 'aluvial pantai pesisir Pantura Jawa Barat', depth: '14 – 22 meter' },
  { name: 'Tegal', slug: 'tegal', province: 'Jawa Tengah', soil: 'aluvial pantai utara dan lempung persawahan', depth: '14 – 20 meter' },
  { name: 'Pekalongan', slug: 'pekalongan', province: 'Jawa Tengah', soil: 'tanah aluvial pesisir rawan rob dan penurunan tanah', depth: '16 – 24 meter' },
  { name: 'Kudus', slug: 'kudus', province: 'Jawa Tengah', soil: 'lempung hitam muria dan kawasan industri padat', depth: '12 – 18 meter' },
  { name: 'Purwokerto', slug: 'purwokerto', province: 'Jawa Tengah', soil: 'endapan vulkanik lereng Gunung Slamet', depth: '10 – 16 meter' },
  { name: 'Magelang', slug: 'magelang', province: 'Jawa Tengah', soil: 'pasir abu vulkanik Merapi-Merbabu', depth: '10 – 15 meter' },
  { name: 'Batam', slug: 'batam', province: 'Kepulauan Riau', soil: 'tanah bukit bauksit berbatu dan reklamasi pantai', depth: '12 – 20 meter' },
  { name: 'Medan', slug: 'medan', province: 'Sumatera Utara', soil: 'aluvial rawa perkotaan dan lempung lanauan Deli', depth: '16 – 26 meter' },
  { name: 'Palembang', slug: 'palembang', province: 'Sumatera Selatan', soil: 'tanah rawa pasang surut sungai Musi', depth: '18 – 28 meter' },
  { name: 'Pekanbaru', slug: 'pekanbaru', province: 'Riau', soil: 'tanah gambut dangkal dan pasir lanau Siak', depth: '14 – 22 meter' },
  { name: 'Lampung', slug: 'lampung', province: 'Lampung', soil: 'tanah liat merah berpasir perbukitan dan pesisir teluk', depth: '12 – 18 meter' },
  { name: 'Balikpapan', slug: 'balikpapan', province: 'Kalimantan Timur', soil: 'perbukitan lempung rapuh dan endapan teluk', depth: '14 – 22 meter' },
  { name: 'Samarinda', slug: 'samarinda', province: 'Kalimantan Timur', soil: 'endapan rawa aluvial Sungai Mahakam yang tebal', depth: '18 – 30 meter' },
  { name: 'Banjarmasin', slug: 'banjarmasin', province: 'Kalimantan Selatan', soil: 'lempung rawa gambut sangat lunak kota seribu sungai', depth: '22 – 34 meter' },
  { name: 'Pontianak', slug: 'pontianak', province: 'Kalimantan Barat', soil: 'tanah gambut tebal dan aluvial Sungai Kapuas', depth: '20 – 32 meter' },
  { name: 'Makassar', slug: 'makassar', province: 'Sulawesi Selatan', soil: 'aluvial pesisir pantai dan batuan karst terumbu', depth: '14 – 22 meter' },
  { name: 'Manado', slug: 'manado', province: 'Sulawesi Utara', soil: 'batuan vulkanik lereng perbukitan dan pesisir', depth: '10 – 16 meter' },
  { name: 'Mataram', slug: 'mataram', province: 'NTB', soil: 'pasir lanauan aluvial dataran Lombok', depth: '10 – 16 meter' },
  { name: 'Denpasar', slug: 'denpasar', province: 'Bali', soil: 'aluvial pantai berpasir dan batugamping karst', depth: '12 – 18 meter' }
];

// 4 High-Value Application Intent Pillars
const APPLICATION_TYPES = [
  {
    slug: 'ruko-dan-gedung-komersial',
    title: 'Ruko & Gedung Komersial',
    shortTitle: 'Ruko & Gedung Komersial',
    target: 'ruko 3–5 lantai dan pusat bisnis komersial',
    category: 'Aplikasi Bangunan',
    tag: 'bore pile ruko',
    heroImage: '/images/machine-minicrane.webp',
    desc: 'Konstruksi ruko deret dan gedung komersial di kawasan pusat perniagaan menuntut pondasi kaku berkapasitas 40-90 ton per kolom tanpa risiko getaran ke dinding tetangga.'
  },
  {
    slug: 'rumah-tinggal-bebas-retak',
    title: 'Rumah Tinggal 2–3 Lantai',
    shortTitle: 'Rumah Bebas Retak Tembok',
    target: 'rumah tinggal bertingkat bebas risiko dinding retak',
    category: 'Aplikasi Bangunan',
    tag: 'bore pile rumah',
    heroImage: '/images/machine-strauss.webp',
    desc: 'Pondasi tiang bor pile mini crane diameter 30-40 cm mengunci struktur rumah tinggal bertingkat langsung pada lapisan tanah keras, mencegah penurunan tanah diferensial.'
  },
  {
    slug: 'gudang-distribusi-dan-pabrik',
    title: 'Gudang Distribusi & Pabrik',
    shortTitle: 'Gudang & Pabrik Beban Berat',
    target: 'fasilitas pergudangan logistik dan pabrik industri',
    category: 'Aplikasi Bangunan',
    tag: 'bore pile gudang',
    heroImage: '/images/machine-rig.webp',
    desc: 'Menahan beban dinamis forklift, mesin berat, dan racking storage berkapasitas tinggi dengan tiang bor berdiameter 50-80 cm hingga kedalaman tanah keras sejati.'
  },
  {
    slug: 'jembatan-dan-dinding-penahan-tebing',
    title: 'Jembatan & Penahan Tebing',
    shortTitle: 'Retaining Wall & Jembatan',
    target: 'abutment jembatan dan retaining wall pengaman lereng',
    category: 'Metode Pondasi',
    tag: 'retaining wall bor pile',
    heroImage: '/images/machine-piling.webp',
    desc: 'Rekayasa deretan tiang bor pile berikatan capping beam masif untuk mengamankan lereng tebing rawan longsor serta menopang struktur jembatan bentang sedang.'
  }
];

function generateProceduralArticle(city, app) {
  const slug = `jasa-bor-pile-${city.slug}-${app.slug}`;
  const title = `Jasa Bor Pile ${city.name}: Pondasi ${app.title} Bebas Amblas & Presisi`;
  const seoTitle = `Jasa Bor Pile ${city.name} - Spesialis ${app.shortTitle}`;
  const description = `Layanan jasa bor pile profesional di ${city.name}, ${city.province}. Spesialis ${app.target} dengan armada mini crane dan hydraulic rig mandiri.`;

  return {
    slug,
    title,
    seoTitle,
    description,
    category: app.category,
    tags: [
      `jasa bor pile ${city.name.toLowerCase()}`,
      `bor pile ${city.name.toLowerCase()}`,
      app.tag,
      `mini crane ${city.name.toLowerCase()}`,
      'kontraktor pondasi dalam'
    ],
    heroImage: app.heroImage,
    intro: `Pembangunan ${app.target} di wilayah **${city.name}, ${city.province}** menghadapi karakteristik geoteknik berupa ${city.soil}. Penggunaan pondasi dangkal konvensional berisiko memicu penurunan tanah diferensial (*differential settlement*) yang merusak bangunan. **Borpile Nusantara** menyediakan layanan pengeboran tiang bor pile berstandar SNI untuk menjamin kekokohan struktur jangka panjang.`,
    section1Title: `Karakteristik Tanah & Kebutuhan Pondasi di ${city.name}`,
    section1Content: `Kondisi lapisan geologis di kawasan ${city.name} menuntut tiang pondasi tertanam hingga kedalaman efektif **${city.depth}** untuk mencapai lapisan tanah keras dengan nilai N-SPT > 40. ${app.desc} Sistem putar mesin mini crane dan hydraulic rotary rig kami bekerja mengikis tanah tanpa getaran pukul (*zero-vibration*), sangat aman untuk lokasi padat di ${city.name}.`,
    mandorNotes: [
      `**Evaluasi Data Sondir di ${city.name}:** Sebelum menentukan panjang tiang bor, lakukan uji sondir (CPT) atau bor mesin geoteknik untuk memastikan elevasi tanah keras setempat tidak meleset dari desain gambar kerja.`,
      `**Manajemen Lumpur Sirkulasi di Wilayah ${city.name}:** Gunakan bak penampung sirkulasi tertutup dan siapkan pompa sedot agar air bilas wash boring tidak meluap ke fasilitas publik atau pemukiman tetangga.`
    ],
    tableTitle: `Tabel Rekomendasi Tiang Bor Pile di Wilayah ${city.name}`,
    tableHeaders: ['Zona Kawasan Proyek', 'Peruntukan Bangunan', 'Pilihan Diameter', 'Kedalaman Rencana', 'Rekomendasi Armada'],
    tableRows: [
      [`Pusat Kota & Kawasan Padat ${city.name}`, app.title, 'Ø 30 – Ø 40 cm', city.depth, 'Mini Crane Wash Boring'],
      [`Jalur Arteri & Bisnis ${city.name}`, 'Ruko & Gedung Bertingkat', 'Ø 40 – Ø 50 cm', city.depth, 'Mini Crane Heavy Duty'],
      [`Kawasan Industri & Pergudangan ${city.name}`, 'Gudang Logistik & Pabrik', 'Ø 50 – Ø 60 cm', city.depth, 'Hydraulic Rotary Rig'],
      [`Kawasan Berkontur / Perbukitan ${city.name}`, 'Retaining Wall & Lereng', 'Ø 50 – Ø 80 cm', city.depth, 'Rotary Rig / Mini Crane']
    ],
    section3Title: `Tahapan SOP Pelaksanaan Pengeboran di ${city.name}`,
    steps: [
      { title: 'Survei Tapak & Penentuan Titik As', desc: 'Pengukuran batas tanah dan penentuan koordinat titik tiang menggunakan theodolite.' },
      { title: 'Mobilisasi Unit & Setting Bak Sirkulasi', desc: 'Pengiriman armada dari pool dan persiapan kolam sirkulasi air bor.' },
      { title: 'Pengeboran Presisi Penetrasi Tanah Keras', desc: 'Pengeboran vertikal terkontrol hingga mencapai kedalaman desain.' },
      { title: 'Pemasangan Tulangan Besi & Cor Tremi', desc: 'Penurunan keranjang besi ulir dan pengecoran pipa tremi beton ready mix slump 18 cm.' }
    ],
    faqs: [
      { q: `Berapa rata-rata kedalaman tiang bor pile di wilayah ${city.name}?`, a: `Berdasarkan data geoteknik umum, kedalaman tanah keras di ${city.name} berkisar antara ${city.depth}, disesuaikan dengan hasil uji sondir titik proyek.` },
      { q: `Apakah Borpile Nusantara melayani proyek di ${city.name} dan sekitarnya?`, a: `Ya, kami melayani seluruh area ${city.name} dan kabupaten sekitarnya dengan armada siap kirim dan teknisi berpengalaman.` }
    ],
    ctaText: `Konsultasikan rencana pondasi bore pile untuk proyek Anda di ${city.name} bersama tim teknik ahli Borpile Nusantara:`
  };
}

function main() {
  const args = process.argv.slice(2);
  let count = 7;
  const countIdx = args.indexOf('--count');
  if (countIdx !== -1 && args[countIdx + 1]) {
    count = parseInt(args[countIdx + 1], 10);
  }

  const existingFiles = fs.readdirSync(artikelDir);
  const existingSlugs = new Set(existingFiles.map((file) => file.replace(/\.md$/, '')));

  // Build full topic pool (combining procedural matrix)
  const candidateTopics = [];
  for (const city of INDONESIA_CITIES) {
    for (const app of APPLICATION_TYPES) {
      candidateTopics.push(generateProceduralArticle(city, app));
    }
  }

  const availableTopics = candidateTopics.filter((art) => !existingSlugs.has(art.slug));

  if (availableTopics.length === 0) {
    console.log('Semua topik dalam database generator sudah dipublikasikan.');
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
