import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const artikelDir = path.join(projectRoot, 'src', 'content', 'artikel');

const TOPIC_POOL = [
  {
    slug: 'perhitungan-kapasitas-daya-dukung-tiang-bore-pile-spt',
    title: 'Perhitungan Kapasitas Daya Dukung Tiang Bore Pile Berdasarkan Data N-SPT & Sondir Tanah',
    description: 'Panduan teknis menghitung kapasitas daya dukung aksial tiang bore pile rumus Meyerhof, tahanan ujung, friksi selimut, dan faktor keamanan SNI 8460:2017.',
    category: 'Geoteknik & Desain',
    tags: ['daya dukung bore pile', 'n-spt tanah', 'rumus meyerhof', 'rekayasa geoteknik', 'pondasi dalam'],
    heroImage: '/images/machine-pda.webp',
  },
  {
    slug: 'estimasi-kebutuhan-volume-beton-dan-waste-factor-bore-pile',
    title: 'Estimasi Kebutuhan Volume Beton Ready Mix & Overbreak Factor Tiang Bor Pile',
    description: 'Panduan teknis menghitung volume beton ready mix tiang bore pile, rumus overbreak factor tanah lunak, slump pipa tremi, dan elevasi over-pour cut-off level.',
    category: 'Metode Kerja & K3',
    tags: ['volume beton bore pile', 'overbreak factor', 'pipa tremi', 'ready mix', 'slump beton'],
    heroImage: '/images/machine-tremie.webp',
  },
  {
    slug: 'metode-bore-pile-hydraulic-rotary-rig-gedung-bertingkat',
    title: 'Metode Kerja Bore Pile Hydraulic Rotary Rig untuk Konstruksi Gedung & Jembatan',
    description: 'Spesifikasi dan metode pengeboran tiang bor hydraulic rotary rig torsi tinggi, sistem kelly bar teleskopik, stabilitas casing, dan kapasitas diameter hingga 150 cm.',
    category: 'Inovasi Alat & Rig',
    tags: ['rotary drilling rig', 'hydraulic rig', 'bore pile gedung', 'kelly bar', 'pondasi jembatan'],
    heroImage: '/images/machine-rig.webp',
  },
  {
    slug: 'sop-pengujian-integritas-tiang-pit-dan-pda-test-pondasi',
    title: 'SOP Pengujian Integritas Tiang Pile Integrity Test (PIT) & PDA Test Pondasi Bor Pile',
    description: 'Standar operasional pengujian tiang bor pile: metode Pile Integrity Test (PIT) ASTM D5882, uji beban dinamis PDA ASTM D4945, dan analisis CAPWAP integritas beton.',
    category: 'Geoteknik & K3',
    tags: ['pit test', 'pda test', 'integritas tiang', 'uji beban pondasi', 'astm d5882'],
    heroImage: '/images/machine-pda.webp',
  },
  {
    slug: 'stabilisasi-dinding-lubang-bor-pile-bentonite-dan-polimer',
    title: 'Stabilisasi Dinding Lubang Bor Pile: Penggunaan Cairan Bentonite vs Polimer Sintetis',
    description: 'Panduan teknis stabilisasi dinding lubang tiang bor pile: perbandingan slurry bentonite vs polimer sintetis, uji corong Marsh, sand content, dan izin disposal.',
    category: 'Inovasi Alat & Kimia',
    tags: ['bentonite slurry', 'polimer sintetis', 'stabilisasi lubang bor', 'sedot lumpur', 'viskositas marsh'],
    heroImage: '/images/machine-vacuum.webp',
  },
  {
    slug: 'perbedaan-bor-pile-dan-strauss-pile',
    title: 'Perbedaan Bor Pile dan Strauss Pile: Mana Pilihan Tepat untuk Proyek Konstruksi?',
    description: 'Ketahui perbandingan teknis bor pile mesin mini crane vs strauss pile manual. Analisis kapasitas beban tonase, kedalaman tanah keras, dan akses gang.',
    category: 'Metode Pondasi',
    tags: ['bor pile', 'strauss pile', 'pondasi dalam', 'mini crane', 'perbedaan pondasi'],
    heroImage: '/images/machine-strauss.webp',
  },
  {
    slug: 'metode-wash-boring-mini-crane-akses-sempit',
    title: 'Metode Wash Boring Mini Crane: Solusi Pondasi Bor Pile di Akses Jalan Sempit',
    description: 'Pelajari metode bore pile wash boring menggunakan mini crane untuk proyek ruko, hunian bertingkat, dan gudang di jalan sempit selebar 3 meter.',
    category: 'Metode Kerja',
    tags: ['wash boring', 'mini crane', 'jalan sempit', 'bore pile malang', 'akses sempit'],
    heroImage: '/images/machine-minicrane.webp',
  },
  {
    slug: 'bore-pile-mini-hydraulic-dry-system-bebas-lumpur',
    title: 'Bore Pile Mini Hydraulic Dry System: Solusi Pengeboran Bersih Tanpa Lumpur',
    description: 'Keunggulan metode bore pile mini hydraulic sistem kering. Pengeboran bersih tanpa ceceran lumpur untuk area basement, gudang, dan ruko aktif.',
    category: 'Inovasi Alat',
    tags: ['bore pile dry system', 'mini hydraulic', 'metode kering', 'pengeboran bersih'],
    heroImage: '/images/machine-minihydraulic.webp',
  },
  {
    slug: 'mengenal-silent-jacking-pile-hspd-bebas-getaran',
    title: 'Mengenal Silent Jacking Pile (HSPD): Pondasi Tiang Pancang Tekan Tanpa Getaran',
    description: 'Solusi pancang tiang tanpa getaran dan suara bising dengan Hydraulic Static Pile Driver (HSPD). Aman berdampingan dengan bangunan tetangga.',
    category: 'Teknologi Pancang',
    tags: ['silent jacking pile', 'hspd pancang', 'pancang tekan', 'bebas getaran'],
    heroImage: '/images/machine-hspd.webp',
  },
  {
    slug: 'sop-pengelolaan-dan-sedot-lumpur-bore-pile',
    title: 'SOP Pengelolaan dan Pembuangan Limbah Lumpur Pengeboran Bore Pile Berizin',
    description: 'Standar penanganan limbah lumpur pengeboran tiang bor dengan armada truk tangki vacuum mandiri. Mencegah pencemaran lingkungan proyek.',
    category: 'Lingkungan & K3',
    tags: ['sedot lumpur', 'truk tangki vacuum', 'limbah bore pile', 'k3 konstruksi'],
    heroImage: '/images/machine-vacuum.webp',
  },
  {
    slug: 'standar-pengecoran-pipa-tremi-bore-pile',
    title: 'Standar Pengecoran Beton Bore Pile dengan Pipa Tremi Kedap Air Anti Keropos',
    description: 'Prosedur penting pengecoran pondasi tiang bor menggunakan pipa tremi untuk mencegah segregasi beton, kontaminasi lumpur, dan tiang keropos.',
    category: 'Standar Mutu',
    tags: ['pipa tremi', 'pengecoran bore pile', 'slump beton', 'mutu pondasi'],
    heroImage: '/images/machine-tremie.webp',
  },
  {
    slug: 'pentingnya-uji-sondir-tanah-sebelum-bor-pile',
    title: 'Pentingnya Uji Sondir Tanah (CPT) Sebelum Pelaksanaan Pekerjaan Bore Pile',
    description: 'Mengapa uji sondir dan boring geoteknik wajib dilakukan sebelum pekerjaan bore pile dimulai. Menghindari salah estimasi kedalaman tanah keras.',
    category: 'Geoteknik',
    tags: ['uji sondir', 'sondir tanah', 'penyelidikan tanah', 'geoteknik'],
    heroImage: '/images/machine-pda.webp',
  }
];

function main() {
  const args = process.argv.slice(2);
  let count = 1;
  const countIdx = args.indexOf('--count');
  if (countIdx !== -1 && args[countIdx + 1]) {
    count = parseInt(args[countIdx + 1], 10);
  }

  const existingFiles = fs.readdirSync(artikelDir);
  const existingSlugs = new Set(existingFiles.map((file) => file.replace(/\.md$/, '')));

  const availableTopics = TOPIC_POOL.filter((t) => !existingSlugs.has(t.slug));

  if (availableTopics.length === 0) {
    console.log('Semua topik dalam pool sudah dipublikasikan. Tidak ada artikel baru yang perlu dibuat.');
    return;
  }

  const topicsToPublish = availableTopics.slice(0, count);
  console.log(`Mempersiapkan publikasi ${topicsToPublish.length} artikel baru...`);

  for (const topic of topicsToPublish) {
    const filePath = path.join(artikelDir, `${topic.slug}.md`);
    if (fs.existsSync(filePath)) {
      console.log(`Lewati, file sudah ada: ${topic.slug}.md`);
      continue;
    }
    console.log(`[Baru] Menambahkan artikel: ${topic.title}`);
  }
}

main();
