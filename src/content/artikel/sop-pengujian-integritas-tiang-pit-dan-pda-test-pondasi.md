---
title: 'SOP Pengujian Integritas Tiang Pile Integrity Test (PIT) & PDA Test Pondasi Bor Pile'
seoTitle: 'SOP Uji Integritas Tiang PIT & PDA Test Pondasi Bor Pile'
description: 'Standar operasional pengujian tiang bor pile: metode Pile Integrity Test (PIT) ASTM D5882, uji beban dinamis PDA ASTM D4945, dan analisis CAPWAP integritas beton.'
publishDate: '4 November 2026'
author: 'Tim Teknik Borpile Nusantara'
category: 'Geoteknik & K3'
tags: ['pit test', 'pda test', 'integritas tiang', 'uji beban pondasi', 'astm d5882']
heroImage: '/images/machine-pda.webp'
featured: true
---

# SOP Pengujian Integritas Tiang Pile Integrity Test (PIT) & PDA Test Pondasi Bor Pile

Karena tiang bor pile dicor di dalam tanah (*underground cast-in-situ*), kualitas fisik tiang tidak dapat diinspeksi secara kasat mata setelah selesai dikerjakan. Cacat pengecoran seperti **penyempitan penampang (*necking*)**, rongga udara atau kantong lumpur terjepit (*honeycombing / soil intrusion*), patahan tiang akibat gaya geser tanah, hingga keropos beton adalah ancaman tersembunyi yang berisiko meruntuhkan struktur bangunan jika tidak terdeteksi sejak awal.

Untuk menjamin bahwa setiap titik tiang bor yang tertanam telah memenuhi standar kekuatan struktural dan kontinuitas beton monolitik, konsultan pengawas dan perencana geoteknik mewajibkan serangkaian uji non-destruktif berstandar internasional: **Pile Integrity Test (PIT / Low Strain Test ASTM D5882)** dan **Pile Driving Analyzer (PDA / High Strain Dynamic Load Test ASTM D4945)** sesuai arahan **SNI 8460:2017**.

---

## 1. Prinsip Fisika Perambatan Gelombang (Wave Equation Theory)

Pengujian PIT memanfaatkan perambatan gelombang tegangan satu dimensi (*one-dimensional stress wave*) di dalam media beton elastis padat:

```
Kecepatan Gelombang (c) = √(Modulus Elastisitas E / Massa Jenis Beton ρ)   [m/s]
Impedansi Mekanik Tiang (Z) = (E × A) / c   [kN·s/m]
```

- Pada tiang beton bermutu tinggi ($f'_c \ge 25\text{ MPa}$), kecepatan rambat gelombang ($c$) berkisar antara **3.600 hingga 4.200 meter per detik**.
- Ketika palu kecil (*handheld hammer*) berbobot 1–2 kg memukul permukaan kepala tiang, gelombang tegangan berjalan merambat ke bawah hingga ke ujung tiang (*pile toe*), lalu terpantul kembali ke sensor akselerometer di permukaan.
- **Deteksi Cacat (Variasi Impedansi $\beta$)**:
  $$\beta = \frac{Z_2}{Z_1} = \frac{A_2 \sqrt{E_2 \rho_2}}{A_1 \sqrt{E_1 \rho_1}}$$
  - Nilai $\beta = 1.0$: Tiang sempurna, penampang seragam.
  - Nilai $\beta = 0.8 – 0.9$: Kerusakan atau penyempitan penampang ringan (*minor defect*).
  - Nilai $\beta < 0.6$: Terjadi patahan, diskontinuitas beton parah, atau kantong lumpur masif (*major defect / broken pile*).

---

> ### Catatan Mandor & Poin Kritis Lapangan
> 1. **Permukaan Kepala Tiang Wajib Digerinda Halus dan Kering**: Kesalahan paling sering yang membuat hasil grafik reflektogram PIT terbaca berisik (*noisy signal*) adalah sensor dipasang di atas beton rapuh atau sisa adukan semen basah. Mandor wajib memastikan kepala tiang telah dibobok (*chipped*) hingga mencapai beton masif padat, lalu digerinda rata tegak lurus sumbu tiang dan dibersihkan dari debu sebelum accelerometer ditempel menggunakan pasta lilin petrokimia (*coupling wax*).
> 2. **Umur Beton Minimal 7–14 Hari Sebelum Pengujian**: Pengujian PIT membutuhkan modulus elastisitas beton yang sudah stabil. Melakukan pengujian pada umur beton di bawah 5 hari akan menghasilkan pembacaan kecepatan gelombang semu yang lambat (<3.000 m/s) dan grafik pantulan yang bias. Untuk PDA test dengan beban tumbuk tinggi (*heavy drop hammer*), umur beton wajib minimal 14 hingga 28 hari agar kepala tiang tidak pecah saat dihantam palu beban dinamis.

---

## 2. Tabel Matriks Komparasi Metode Pengujian Pondasi Tiang Bor

Berikut perbandingan teknis antara berbagai metode pengujian mutu pondasi dalam di Indonesia:

| Parameter Evaluasi | Pile Integrity Test (PIT) | Pile Driving Analyzer (PDA) | Static Axial Loading Test | Cross-Hole Sonic Logging (CSL) |
|---|---|---|---|---|
| **Standar Acuan Uji** | ASTM D5882 (Low Strain) | ASTM D4945 (High Strain) | ASTM D1143 (Static Kentledge) | ASTM D6760 (Ultrasonic Tube) |
| **Tujuan Utama Pengujian** | Kontinuitas & keutuhan beton tiang | Daya dukung aksial & keutuhan tiang | Daya dukung aksial aktual (Benchmark) | Kerapatan beton per kuadran tiang |
| **Energi Benturan Palu** | Palu ringan genggam (1–2 kg) | Drop hammer beban 1–3% tonase tiang | Beban statis blok beton / hidrolik jacking | Tanpa benturan (Transmitter ultrasonik) |
| **Persiapan Khusus di Tiang** | Bobok kepala tiang & gerinda rata | Bantalan plywood kepala tiang & sensor baut | Pembuatan kentledge / balok reaksi baja | Pemasangan pipa akses baja (PVC tube) |
| **Durasi Uji per Titik** | **5 – 10 menit / titik** | **1 – 2 jam / titik** | **24 – 48 jam / titik** | **20 – 40 menit / titik** |
| **Efisiensi Anggaran Biaya** | Sangat ekonomis (Skrining 100% tiang) | Menengah (Sampel 5–10% total tiang) | Tinggi (Sampel 1–2 titik verifikasi) | Menengah (Tiang diameter >Ø80 cm) |

---

## Tabel Jangkauan Operasional & Mobilisasi Rig Se-Indonesia

Borpile Nusantara menyediakan layanan rekayasa pondasi lengkap mulai dari pengeboran, fabrikasi tulangan, hingga pengujian PIT & PDA bersertifikat:

| Wilayah / Koridor | Sentra Industri & Infrastruktur | Kesiapan Peralatan Testing Geoteknik | Moda Mobilisasi & Pengiriman | Estimasi Lead Time | Status Layanan |
|---|---|---|---|---|:---:|
| **Koridor Jawa** | Jakarta, Surabaya, Semarang, Bandung, Malang | Unit PIT Digital, Sensor PDA, Caltrans Accelerometer | Armada Tim QA/QC Geoteknik Darat | 1 – 2 Hari Kerja | Ready On-Site Testing |
| **Koridor Sumatera** | Medan, Pekanbaru, Palembang, Jambi, Bandar Lampung | Alat PIT Lengkap, Drop Hammer Testing Kit | Penerbangan Teknisi QA & Kargo Cepat | 2 – 4 Hari Kerja | Ready On-Site Testing |
| **Koridor Kalimantan** | Balikpapan, Samarinda, Banjarmasin, IKN Nusantara | Testing Kit Siap Pakai di Hub Regional | Kargo Pesawat Udara & Mobilisasi Tim | 3 – 5 Hari Kerja | Ready On-Site Testing |
| **Koridor Sulawesi** | Makassar, Morowali, Kendari, Palu, Bitung | Akses Perangkat PIT Kalibrasi Terkini | Penerbangan Langsung Makassar/Kendari | 3 – 6 Hari Kerja | Ready On-Site Testing |
| **Koridor Bali & Nusra** | Denpasar, Mataram, Sumbawa, Kupang, Labuan Bajo | Peralatan Non-Destruktif Uji Cepat | Jalur Darat & Penerbangan Komersial | 2 – 4 Hari Kerja | Ready On-Site Testing |
| **Koridor Maluku & Papua** | Jayapura, Timika, Sorong, Ambon, Ternate | Unit PIT Kompak Ringan untuk Area Remote | Kargo Udara Prioritas & Tim Khusus | 5 – 8 Hari Kerja | Ready On-Site Testing |

---

## Tanya Jawab Teknis (FAQ)

### Berapa persentase titik tiang bor yang wajib diuji PIT pada suatu proyek gedung?
Sesuai rekomendasi SNI 8460:2017 dan standar asosiasi geoteknik Indonesia (HATTI), pengujian integritas tiang PIT disarankan mencakup **minimal 20% hingga 100% dari total populasi tiang bor**. Mengingat biayanya yang sangat ekonomis dan kecepatannya yang tinggi (dapat menguji 30–50 tiang per hari), kontraktor umumnya menguji 100% tiang guna memastikan tidak ada satupun tiang cacat di bawah tapak gedung.

### Apakah hasil PIT dapat menggantikan PDA Test atau Static Load Test?
Tidak bisa sepenuhnya. PIT adalah uji regangan rendah (*low strain*) yang fokus mendeteksi kontinuitas fisik beton (ada tidaknya leher menyempit atau retak), namun **tidak dapat mengukur kapasitas daya dukung beban aksial izin dalam satuan ton**. Untuk memverifikasi kapasitas daya dukung tanah dan faktor penurunan tiang (*settlement*), pengujian PDA Test atau uji beban statis tetap diwajibkan sebagai verifikasi hukum struktural.

---

## Solusi Rekayasa Pondasi Dalam Bersama Borpile Nusantara

Dapatkan kepastian integritas struktural pondasi proyek Anda dengan peralatan pengeboran presisi dan pengujian geoteknik standar SNI:

- **Konsultasi Estimasi Proyek**: [Kalkulator Simulasi Pondasi Tiang](/kalkulator/)
- **Layanan Pengeboran & Uji**: [Katalog Lengkap Borpile Nusantara](/layanan/)
- **Konsultasi WhatsApp**: [Hubungi Tim Geoteknik & QA/QC (0851-8300-5070)](https://wa.me/6285183005070?text=Halo%20Borpile%20Nusantara,%20saya%20ingin%20konsultasi%20jadwal%20pengeboran%20dan%20uji%20PIT%20tiang%20bor)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Berapa persentase titik tiang bor yang wajib diuji PIT pada proyek gedung?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sesuai SNI 8460:2017 disarankan minimal 20% hingga 100% dari total tiang karena biayanya ekonomis dan kecepatannya tinggi (30-50 tiang per hari)."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah hasil PIT dapat menggantikan PDA Test atau Static Load Test?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tidak. PIT khusus mendeteksi integritas fisik beton (retak/leher menyempit), sedangkan kapasitas daya dukung tonase aktual diukur melalui PDA Test atau Static Load Test."
      }
    }
  ]
}
```
