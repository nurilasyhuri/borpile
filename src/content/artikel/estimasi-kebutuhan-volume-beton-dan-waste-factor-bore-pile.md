---
title: 'Estimasi Kebutuhan Volume Beton Ready Mix & Overbreak Factor Tiang Bor Pile'
seoTitle: 'Perhitungan Volume Beton & Overbreak Factor Bore Pile'
description: 'Panduan teknis menghitung volume beton ready mix tiang bore pile, rumus overbreak factor tanah lunak, slump pipa tremi, dan elevasi over-pour cut-off level.'
publishDate: '4 November 2026'
author: 'Tim Teknik Borpile Nusantara'
category: 'Metode Kerja & K3'
tags: ['volume beton bore pile', 'overbreak factor', 'pipa tremi', 'ready mix', 'slump beton']
heroImage: '/images/machine-tremie.webp'
featured: true
---

# Estimasi Kebutuhan Volume Beton Ready Mix & Overbreak Factor Tiang Bor Pile

Salah satu masalah paling umum yang dihadapi estimator proyek dan pelaksana lapangan saat pengecoran tiang bor pile adalah **terjadinya kekurangan volume beton ready mix di tengah proses pengecoran (*short pouring*)**, atau sebaliknya **pembengkakan biaya akibat pemborosan beton (*waste*) yang tidak terprediksi**.

Banyak kontraktor pemula hanya menghitung kubikasi beton berdasarkan rumus volume silinder geometris murni:

$$\text{Volume Silinder} = \frac{\pi}{4} \times D^2 \times L$$

Kenyataannya di lapangan, volume riil beton ready mix yang masuk ke dalam lubang bor hampir selalu **15% hingga 30% lebih besar** daripada volume teoritis. Fenomena pembesaran rongga ini dikenal dalam rekayasa geoteknik sebagai **Overbreak Factor (Faktor Pembesaran Lubang)**. Mengabaikan faktor ini akan menyebabkan proses pengecoran terhenti sebelum mencapai elevasi rencana, memicu cacat sambungan dingin (*cold joint*) yang sangat membahayakan integritas tiang pondasi.

---

## 1. Rumus Estimasi Volume Cor Riil & Faktor Overbreak

Untuk menghitung kebutuhan volume beton tiang bor secara akurat yang siap dipesan ke batching plant:

```
V_riil = V_teoritis × (1 + k_overbreak)
```

Di mana:

```
V_teoritis = (π / 4) × D² × (L_tiang + L_overpour)
```

- **$D$**: Diameter nominal matabor ($m$).
- **$L_{tiang}$**: Kedalaman efektif tiang dari dasar lubang ke rencana cut-off level ($m$).
- **$L_{overpour}$**: Kelebihan tinggi pengecoran di atas cut-off level (disyaratkan **0.50 – 1.00 meter**) untuk menampung lapisan pasta semen kotor tercampur lumpur (*laitance*) yang nantinya akan dibobok (*chipping*).
- **$k_{overbreak}$**: Koefisien pembesaran lubang akibat erosi gesekan matabor dan tekanan hidrostatik beton cair pada dinding tanah:
  - Tanah Lempung Keras / Padas (*Stiff Clay*): $k_{overbreak} = 10\% – 15\%$
  - Tanah Pasir / Lanau Sedang (*Medium Sand*): $k_{overbreak} = 15\% – 25\%$
  - Tanah Pasir Berkerikil / Rawa Berair (*Loose Saturated Soil*): $k_{overbreak} = 25\% – 35\%$

---

> ### Catatan Mandor & Poin Kritis Lapangan
> 1. **Wajib Menjaga Elevasi Over-Pour (Kelebihan Cor) Minimal 75 cm**: Saat beton segar dituangkan melalui pipa tremi dari dasar lubang, beton akan mendesak sisa lumpur sirkulasi naik ke permukaan. Lapisan beton paling atas setinggi 50–75 cm pasti terkontaminasi oleh lumpur cair dan partikel tanah, menciptakan beton rapuh berpori (*laitance*). Jangan pernah menghentikan cor tepat di elevasi kepala tiang (*Cut-Off Level / COL*). Selalu cor hingga meluap bersih di atas COL, lalu bobok lapisan kotor tersebut saat pile cap akan dipasang.
> 2. **Slump Beton Wajib 18 ± 2 cm dengan Retarder 3–4 Jam**: Pengecoran bore pile menggunakan pipa tremi mengandalkan gaya gravitasi aliran beton mandiri (*self-compacting* tanpa vibrator eksternal). Menggunakan beton ber-slump rendah (<14 cm) akan menyebabkan adukan macet di corong tremi. Pastikan mix design menggunakan *superplasticizer* dan zat penghambat setting (*retarder*) dengan *workability* minimal 3–4 jam agar beton tidak keburu setting saat menunggu antrean truk mixer di jalan.

---

## 2. Tabel Kubikasi Beton per Meter & Rekomendasi Pemesanan per Titik Tiang

Berikut acuan kubikasi beton per meter kedalaman dan simulasi kebutuhan riil per tiang bor (asumsi kedalaman rata-rata 18 meter, over-pour 0.8 meter, $k_{overbreak} = 20\%$):

| Diameter Tiang ($D$) | Volume Teoritis per Meter | Volume Riil per Meter (+20%) | Kebutuhan Beton Tiang 18m (+Over-pour 0.8m) | Kapasitas Muat Truk Mixer Standar | Estimasi Ritase Truk per Titik |
|---|---|---|---|---|:---:|
| **Ø 30 cm** | 0.071 m³/m | **0.085 m³/m** | **1.60 m³** | Truk Standar 7 m³ | 1 truk untuk 4 titik tiang |
| **Ø 40 cm** | 0.126 m³/m | **0.151 m³/m** | **2.84 m³** | Truk Standar 7 m³ | 1 truk untuk 2.4 titik tiang |
| **Ø 50 cm** | 0.196 m³/m | **0.235 m³/m** | **4.42 m³** | Truk Standar 7 m³ | 1 truk untuk 1.5 titik tiang |
| **Ø 60 cm** | 0.283 m³/m | **0.340 m³/m** | **6.39 m³** | Truk Standar 7 m³ | 1 truk per 1 titik tiang |
| **Ø 80 cm** | 0.503 m³/m | **0.604 m³/m** | **11.35 m³** | Truk Standar 7 m³ | 2 truk per 1 titik tiang |
| **Ø 100 cm** | 0.785 m³/m | **0.942 m³/m** | **17.71 m³** | Truk Standar 7 m³ | 2.5–3 truk per 1 titik tiang |

---

## Tabel Jangkauan Operasional & Mobilisasi Rig Se-Indonesia

Borpile Nusantara didukung jaringan batching plant mitra terpercaya dan armada staging tiang bor pile mandiri di seluruh wilayah operasional Indonesia:

| Wilayah / Koridor | Kawasan Industri & Proyek Komersial | Kondisi Ketersediaan Ready Mix | Armada Alat Berat Pengecoran | Estimasi Lead Time | Status Layanan |
|---|---|---|---|---|:---:|
| **Koridor Jawa** | Jakarta, Surabaya, Bandung, Semarang, Malang | Batching plant melimpah, armada mixer 24 jam | Rotary Rig, Mini Crane, Pipa Tremi Ø8 & Ø10 inch | 1 – 3 Hari Kerja | Siap Survei & Pengecoran |
| **Koridor Sumatera** | Medan, Palembang, Lampung, Riau, Batam | Batching plant zona kota, mobile plant luar kota | Rig Kelly Bar, Tangki Suplai Air, Crane Service | 3 – 6 Hari Kerja | Siap Survei & Pengecoran |
| **Koridor Kalimantan** | IKN, Balikpapan, Samarinda, Banjarmasin | Akses transit mixer sungai & jalan hauling | Rig Track Rawa, Pompa Lumpur Tekan | 5 – 9 Hari Kerja | Siap Survei & Pengecoran |
| **Koridor Sulawesi** | Makassar, Morowali, Kendari, Manado | Kawasan smelter industri & pelabuhan peti kemas | Rig Torsi Tinggi, Silo Semen On-Site | 6 – 10 Hari Kerja | Siap Survei & Pengecoran |
| **Koridor Bali & Nusra** | Denpasar, Badung, Lombok, Labuan Bajo | Batching plant lokal & transit mixer kompak | Mini Hydraulic Rig Compact, Tremi Crane | 3 – 5 Hari Kerja | Siap Survei & Pengecoran |
| **Koridor Maluku & Papua** | Timika, Sorong, Jayapura, Ambon | Suplai site-mix terkontrol atau dry batching | Rig Modular Kontainer, Genset Heavy Duty | 9 – 15 Hari Kerja | Siap Survei & Pengecoran |

---

## Tanya Jawab Teknis (FAQ)

### Apa yang harus dilakukan jika beton macet di dalam pipa tremi saat pengecoran?
Jika beton macet (*choking*), gerakkan pipa tremi naik-turun setinggi 10–20 cm secara perlahan tanpa mengangkat ujung bawah tremi keluar dari permukaan beton cair (kedalaman benam tremi minimal 2 meter). Jika aliran tetap macet, segera cabut pipa tremi, kuras beton yang mengeras, pasang kembali tremi dengan penutup plastik penahan air di ujung bawah (*valve plate*), dan lanjutkan pengecoran dengan beton segar.

### Mengapa pengecoran tiang bor pile bawah air tidak boleh menggunakan vibrator?
Getaran vibrator mekanik akan mengaduk beton segar dengan cairan lumpur bentonite di sekitarnya, merusak rasio air-semen (FAS), dan menyebabkan segregasi agregat kasar. Aliran beton tremi dirancang mengalir mandiri dari dasar ke atas mendorong lumpur keluar tanpa bantuan vibrasi.

---

## Solusi Rekayasa Pondasi Dalam Bersama Borpile Nusantara

Hindari risiko beton keropos dan pembengkakan anggaran volume dengan supervisi tim estimator dan armada mandiri Borpile Nusantara:

- **Hitung Kebutuhan Proyek**: [Kalkulator Simulasi Tiang & Beton](/kalkulator/)
- **Peralatan Pengecoran**: [Lihat Spesifikasi Pipa Tremi & Armada](/layanan/)
- **Konsultasi WhatsApp**: [Hubungi Tim Estimator Lapangan (0851-8300-5070)](https://wa.me/6285183005070?text=Halo%20Borpile%20Nusantara,%20saya%20ingin%20konsultasi%20estimasi%20volume%20beton%20dan%20harga%20bor%20pile)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Apa yang harus dilakukan jika beton macet di dalam pipa tremi saat pengecoran?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pipa tremi digerakkan naik turun 10-20 cm tanpa melepas ujung bawah dari beton (kedalaman benam min 2m). Bila tetap macet, tremi dibersihkan dan dipasang kembali dengan penutup plate."
      }
    },
    {
      "@type": "Question",
      "name": "Mengapa pengecoran tiang bor pile bawah air tidak boleh menggunakan vibrator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Getaran vibrator akan mencampur beton dengan lumpur di sekitarnya dan memicu segregasi. Beton tremi slump 18±2 cm mengalir mandiri dari bawah ke atas."
      }
    }
  ]
}
```
