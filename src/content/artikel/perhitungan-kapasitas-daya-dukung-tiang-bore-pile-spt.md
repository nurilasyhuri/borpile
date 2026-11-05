---
title: 'Perhitungan Kapasitas Daya Dukung Tiang Bore Pile Berdasarkan Data N-SPT & Sondir Tanah'
seoTitle: 'Perhitungan Daya Dukung Tiang Bore Pile Data N-SPT Sondir'
description: 'Panduan teknis menghitung kapasitas daya dukung aksial tiang bore pile rumus Meyerhof, tahanan ujung, friksi selimut, dan faktor keamanan SNI 8460:2017.'
publishDate: '4 November 2026'
author: 'Tim Teknik Pondasi Mandiri'
category: 'Geoteknik & Desain'
tags: ['daya dukung bore pile', 'n-spt tanah', 'rumus meyerhof', 'rekayasa geoteknik', 'pondasi dalam']
heroImage: '/images/machine-pda.webp'
featured: true
---

# Perhitungan Kapasitas Daya Dukung Tiang Bore Pile Berdasarkan Data N-SPT & Sondir Tanah

Salah satu kesalahan paling fatal dalam perencanaan konstruksi pondasi dalam adalah **menentukan kedalaman tiang bor hanya berdasarkan asumsi visual kedalaman tanah tetangga tanpa mengacu pada data penyelidikan tanah (*soil investigation*) yang valid**. Di lapangan, kondisi stratigrafi tanah sangat bervariasi; lapisan tanah keras (*bearing stratum*) bisa bergelombang tajam bahkan dalam satu tapak proyek berjarak 15 meter.

Menancapkan tiang bor yang berhenti pada lapisan lempung lunak (*soft clay*) atau lanau berpasir lepas akan memicu **penurunan diferensial (*differential settlement*)**, keretakan struktur kolom utama, hingga kegagalan struktural bangunan bertingkat. Oleh karena itu, perhitungan kapasitas daya dukung izin tiang tunggal (*allowable axial capacity*) wajib diturunkan secara presisi dari uji penetrasi standar (**Standard Penetration Test / N-SPT**) dan uji sondir konus (**Cone Penetration Test / CPT**) sesuai standar **SNI 8460:2017**.

---

## 1. Formula Daya Dukung Aksial Tiang Bor (Metode Meyerhof & Reese-O'Neill)

Kapasitas daya dukung ultimit ($Q_{ult}$) tiang bor merupakan penjumlahan dari dua komponen utama: tahanan ujung ultimit ($Q_p$) dan tahanan gesek selimut ultimit ($Q_s$):

```
Q_ult = Q_p + Q_s = (q_p × A_p) + Σ (f_s × A_s)
```

Untuk memperoleh daya dukung izin yang aman bagi struktur bangunan ($Q_{all}$), kapasitas ultimit dibagi dengan faktor keamanan (*Safety Factor / SF*):

```
Q_all = Q_ult / SF
```

- **$Q_p$ (Tahanan Ujung / End-Bearing)**: Tahanan tanah di bawah dasar tiang. Berdasarkan Meyerhof (1976), untuk tanah pasir padat hingga cadas, $q_p = 40 \times N \times (L / D) \le 400 \times N$ ($kN/m^2$), di mana $N$ adalah nilai rata-rata N-SPT pada zona $8D$ di atas dan $3.5D$ di bawah dasar tiang.
- **$Q_s$ (Tahanan Friksi Selimut / Skin Friction)**: Gesekan antara dinding tiang beton dengan lapisan tanah di sepanjang kedalaman tiang. Untuk tanah pasir $f_s \approx 2 \times N$ ($kN/m^2$), sedangkan untuk tanah lempung menggunakan metode $\alpha$ ($f_s = \alpha \times c_u$).
- **$A_p$**: Luas penampang dasar tiang bor ($m^2$).
- **$A_s$**: Luas selimut tiang pada setiap lapisan tanah ($\pi \times D \times \Delta L$).
- **$SF$ (Safety Factor)**: Sesuai SNI 8460:2017, faktor keamanan minimal adalah **$SF = 2.5$** bila didukung pengujian pembebanan statis/dinamis (PDA Test), atau **$SF = 3.0$** jika hanya mengandalkan perhitungan empiris data bor log.

---

> ### Catatan Mandor & Poin Kritis Lapangan
> 1. **Endapan Lumpur di Dasar Lubang Merusak 70% Daya Dukung Ujung**: Setelah proses pengeboran mencapai kedalaman tanah keras (N-SPT > 40), sisa serpihan tanah (*cuttings*) dan endapan lumpur sering mengendap di dasar lubang setebal 20–50 cm. Jika dasar lubang tidak dibersihkan dengan *cleaning bucket* datar atau sirkulasi air bersih sebelum pengecoran, beton tiang akan bertumpu di atas lumpur lembek. Hal ini menyebabkan kapasitas tahanan ujung ($Q_p$) drop drastis dan tiang akan amblas saat menerima beban kolom.
> 2. **Koreksi Muka Air Tanah (Water Table) Terhadap Nilai N-SPT**: Untuk lapisan pasir halus di bawah muka air tanah dengan nilai $N > 15$, terapkan koreksi Terzaghi-Peck ($N' = 15 + 0.5 \times (N - 15)$) untuk memperhitungkan tekanan air pori berlebih (*pore water pressure*) agar tidak terjadi over-estimasi daya dukung.

---

## 2. Tabel Estimasi Daya Dukung Aksial Izin Tiang Bor Pile Tunggal

Berikut tabel acuan praktis kapasitas beban izin tiang bor ($Q_{all}$) berdasarkan variasi diameter pada lapisan tanah keras kompak (N-SPT $\ge 40$, $SF = 2.5$):

| Diameter Tiang Bor ($D$) | Luas Penampang ($A_p$) | Estimasi Kedalaman Tanah Keras | Kapasitas Aksial Izin ($Q_{all}$) | Rekomendasi Armada Pengeboran |
|---|---|---|---|---|
| **Ø 30 cm** | 0.071 m² | 12 – 18 meter | **25 – 40 Ton** | Wash Boring Mini Crane |
| **Ø 40 cm** | 0.126 m² | 14 – 22 meter | **45 – 70 Ton** | Wash Boring / Mini Hydraulic |
| **Ø 50 cm** | 0.196 m² | 16 – 26 meter | **80 – 120 Ton** | Mini Hydraulic / Rotary Rig |
| **Ø 60 cm** | 0.283 m² | 18 – 30 meter | **130 – 190 Ton** | Hydraulic Rotary Rig Kelly Bar |
| **Ø 80 cm** | 0.503 m² | 20 – 36 meter | **240 – 350 Ton** | Hydraulic Rotary Rig Heavy Duty |
| **Ø 100 cm** | 0.785 m² | 24 – 42 meter | **400 – 600 Ton** | Hydraulic Rotary Rig Heavy Duty |

---

## Tabel Jangkauan Operasional & Mobilisasi Rig Se-Indonesia

Pondasi Mandiri melayani rekayasa pondasi dalam, evaluasi data sondir/SPT, penyediaan armada rotary drilling rig, mini crane, dan jacking pile ke seluruh penjuru Nusantara:

| Wilayah / Koridor | Kawasan & Karakteristik Geologi Lahan | Armada & Alat Berat Staging | Moda Mobilisasi Logistik | Estimasi Lead Time | Status Layanan |
|---|---|---|---|---|:---:|
| **Koridor Jawa** | Jabodetabek, Surabaya, Semarang, Bandung, Malang (aluvium, lempung, vulkanik) | Rotary Rig, Mini Crane, Mini Hydraulic, Tangki Vacuum | Truk Tronton & Lowbed Dedicated | 1 – 3 Hari Kerja | Siap Survei & Eksekusi |
| **Koridor Sumatera** | Medan, Pekanbaru, Palembang, Lampung (gambut atas, lempung lunak, pasir kuarsa) | Rotary Rig Heavy Duty, Mini Crane, HSPD Jacking Pile | Truk Fuso Lintas Sumatera & Kapal Ro-Ro | 3 – 6 Hari Kerja | Siap Survei & Eksekusi |
| **Koridor Kalimantan** | Balikpapan, Banjarmasin, Pontianak, Samarinda (rawa pasang surut, lanau lempungan) | Rotary Rig Continuous Flight, Truk Pompa Lumpur | Ekspedisi Peti Kemas Laut Tanjung Perak | 5 – 9 Hari Kerja | Siap Survei & Eksekusi |
| **Koridor Sulawesi** | Makassar, Kendari, Morowali, Palu (tanah keras batuan kapur & aluvial pantai) | Rotary Rig Torsi Tinggi, Mini Crane Cadas | Kapal Kargo Kontainer Tanjung Mas/Perak | 6 – 10 Hari Kerja | Siap Survei & Eksekusi |
| **Koridor Bali & Nusra** | Denpasar, Mataram, Lombok, Labuan Bajo (tanah vulkanik berbatu & pasir pantai) | Mini Crane Akses Wisata, Rig Teleskopik | Truk Ekspedisi Darat & Ferry Penyeberangan | 3 – 5 Hari Kerja | Siap Survei & Eksekusi |
| **Koridor Maluku & Papua** | Ambon, Sorong, Timika, Jayapura (lapangan mineral cadas & tanah lunak pesisir) | Rig Kompak Modular, Crane Crawler | Jalur Kapal Tol Laut Logistik Kargo | 9 – 15 Hari Kerja | Siap Survei & Eksekusi |

---

## Tanya Jawab Teknis (FAQ)

### Mengapa daya dukung tiang bor pile berbeda dengan tiang pancang pada diameter yang sama?
Tiang pancang adalah sistem *displacement pile* yang memadatkan tanah ke samping saat dipancang sehingga friksi selimut meningkat tajam. Sementara bore pile adalah sistem *non-displacement pile* di mana tanah digali keluar dan dinding lubang mengalami relaksasi tegangan geser sesaat sebelum dicor beton. Namun, bore pile unggul karena diameternya bisa dibuat jauh lebih besar (hingga Ø120 cm), mampu menembus lapisan lensa cadas yang memantulkan tiang pancang, dan 100% bebas getaran terhadap gedung tetangga.

### Berapa kedalaman penetrasi minimal tiang bor ke dalam lapisan tanah keras (*socketing*)?
Untuk mengoptimalkan tahanan ujung ($Q_p$), dasar tiang bor pile disyaratkan masuk ke dalam lapisan tanah keras (N-SPT > 50 atau batuan dasar) sedalam minimal **1.5 hingga 3 kali diameter tiang ($1.5D – 3D$)**. Istilah teknis ini disebut *rock socketing*, memastikan beban disalurkan sempurna tanpa slip deformasi.

---

## Solusi Rekayasa Pondasi Dalam Bersama Pondasi Mandiri

Pastikan struktur bangunan Anda berdiri kokoh di atas perhitungan geoteknik yang presisi dan armada alat berat milik sendiri:

- **Simulasi Biaya & Titik Tiang**: [Kalkulator Pondasi Bor Pile](/kalkulator/)
- **Layanan Pengeboran Lengkap**: [Lihat Spesifikasi Armada Rig & Mini Crane](/layanan/)
- **Konsultasi WhatsApp**: [Hubungi Tim Geoteknik Estimator (0851-8300-5070)](https://wa.me/6285183005070?text=Halo%20Pondasi%20Mandiri,%20saya%20ingin%20konsultasi%20evaluasi%20data%20tanah%20sondir%20dan%20kebutuhan%20bor%20pile)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Mengapa daya dukung bore pile berbeda dengan tiang pancang pada diameter yang sama?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bore pile adalah sistem non-displacement di mana tanah dikeluarkan, sedangkan tiang pancang memadatkan tanah ke samping. Namun bore pile mampu dibuat berdiameter hingga 120 cm menembus cadas keras tanpa getaran."
      }
    },
    {
      "@type": "Question",
      "name": "Berapa kedalaman minimal penetrasi tiang bor ke lapisan tanah keras (socketing)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Disyaratkan masuk minimal 1.5 hingga 3 kali diameter tiang (1.5D - 3D) ke dalam formasi tanah keras N-SPT > 50 untuk transfer beban aksial maksimal."
      }
    }
  ]
}
```
