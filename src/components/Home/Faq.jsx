import { useState } from "react";

const faqData = [
  {
    question: "Apa itu Haji Dakhili?",
    answer:
      "Haji Dakhili merupakan program haji khusus untuk para pemegang Iqamah atau Residence Permit di Arab Saudi. Prosesnya langsung diatur oleh Kementerian Haji Saudi dan dapat diakses melalui Aplikasi Nusuk. Dengan kuota tersendiri, tentunya lebih cepat dan tanpa masa tunggu panjang seperti di Indonesia.",
  },
  {
    question: "Apa orang Indonesia bisa ikut Haji Dakhili?",
    answer:
      "Bisa, dengan syarat memiliki iqamah (Resident Permit di Arab Saudi). Terdapat perusahaan / syarikah Arab Saudi yang bisa menjadi sponsor untuk jamaah dari luar negeri agar bisa mendapatkan iqamah dan kemudian mendaftar Haji Dakhili secara resmi.",
  },
  {
    question: "Apakah legal dan sah?",
    answer:
      "Sah secara syariat, karena pendaftaran dilakukan secara resmi melalui Kementerian Haji Arab Saudi. Dari sisi hukum Indonesia, program ini tidak dikelola oleh Kemenag RI, tapi tetap legal selama jamaah menggunakan dokumen resmi dari pemerintah Arab Saudi.",
  },
  {
    question: "Apa syarat ikut Haji Dakhili?",
    answer:
      "Utamanya harus ada Iqamah Aktif. Usia minimal 18 tahun, dan maksimal 59 tahun. Proses pengurusan dokumen dan iqamah akan dibantu oleh pihak sponsor atau perusahaan resmi Arab Saudi.",
  },
  {
    question: "Apakah fasilitasnya bagus?",
    answer:
      "Program Haji Dakhili yang ditawarkan oleh Noor Haramain seluruhnya menggunakan fasilitas terbaik seperti hotel bintang 5 di Makkah / Madinah makan 3x sehari, dan tenda VIP di Mina & Arafah.",
  },
  {
    question: "Apakah ada jaminan keberangkatan?",
    answer:
      "Ya, karena kuota Haji Dakhili langsung dari sistem resmi Saudi. Jika dokumen gagal diproses, dana akan kami kembalikan sesuai ketentuan tanpa adanya potongan.",
  },
  {
    question:
      "Apa bisa tetap daftar Haji Reguler/ Haji Plus di Indonesia sembari tetap ikut Haji Dakhili?",
    answer:
      "Bisa. Pendaftaran Haji Reguler / Plus tetap berjalan, Haji Dakhili memberi kesempatan untuk berangkat lebih cepat. Jadi, seluruh jamaah bisa mendapatkan keduanya.",
  },
  {
    question: "Visanya menggunakan apa ya?",
    answer:
      "Untuk Haji Dakhili, jamaah tidak menggunakan visa haji dari Indonesia, melainkan pendaftaran resmi melalui Kementerian Haji Arab Saudi yang terhubung dengan Iqamah (Resident Permit). Jadi statusnya resmi, sah, dan izin hajinya (Tasreh) langsung dikeluarkan dan diakui oleh pemerintah Arab Saudi.",
  },
  {
    question:
      "Apabila WNI yang tidak bekerja di Arab Saudi mengikuti Haji Dakhili, apakah itu artinya kami memanipulasi data?",
    answer:
      "Tentu tidak, kami tidak memanipulasi data. Haji Dakhili adalah program resmi dari Kementerian Haji Arab Saudi yang memang diperuntukkan bagi pemegang Iqomah atau Resident Permit. Jamaah dari Indonesia dapat mengikuti program ini karena difasilitasi oleh sponsor resmi di Arab Saudi untuk mendapatkan iqamah (Resident Permit/ Izin Tinggal). Jadi seluruh proses pendaftaran berjalan sesuai aturan resmi pemerintah Arab Saudi, dan bebas dari manipulasi data.",
  },
  {
    question: "Apakah berangkatnya menggunakan Visa Amil?",
    answer:
      "Betul, visa amil pada dasarnya adalah izin tinggal (iqamah) untuk mereka yang bekerja di Arab Saudi. Namun dalam konteks Haji Dakhili, bagi jamaah yang tidak bekerja di Arab Saudi pun tetap dapat mengikuti program ini selama difasilitasi oleh sponsor resmi dari perusahaan / syarikah Arab Saudi untuk mendapatkan iqamah agar bisa terdaftar pada program haji melalui sistem Kementerian Haji Arab Saudi. Jadi statusnya tetap resmi, bukan manipulasi, dan prosesnya diakui secara langsung oleh pemerintah Arab Saudi.",
  },
  {
    question:
      "Kalau Iqamah telah berhasil didapat, apakah otomatis dapat langsung berhaji?",
    answer:
      "Tidak, Iqamah saja tidak cukup. Supaya dapat mengakses program Haji Arab Saudi, setiap jamaah tetap harus memiliki Tasreh Haji (surat izin resmi berhaji) yang didapat dari Kementerian Haji Arab Saudi.",
  },
  {
    question: "Bagaimana cara mendapatkan Tasreh Haji?",
    answer:
      "Jamaah akan didaftarkan oleh syarikah melalui sistem resmi (Absher/ Nusuk) menggunakan iqamah aktif, barulah kemudian Kementerian Haji Arab Saudi dapat menerbitkan Tasreh Haji.",
  },
];

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);

const ArrowDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-2 w-2 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative md:max-w-sm mx-auto w-full">
      {/* --- Header --- */}
      <div className="bg-gradient-to-r from-[#676058] to-[#b9b1a8] px-6 pt-6 pb-10">
        <div className="container mx-auto flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-medium text-white leading-[1]">
              Frequently Asked
              <br />
              Questions.
            </h1>
            <p className="text-white/80 mt-2 text-[12px] leading-tight">
              Menjawab beberapa pertanyaan
              <br />
              yang kerap muncul.
            </p>
          </div>
          <div className="bg-white/30 rounded-full p-2 mt-6">
            <PlusIcon />
          </div>
        </div>
      </div>

      {/* --- FAQ List --- */}
      <div className=" -mt-11 rounded-t-2xl relative z-0 px-5 py-16">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-[#e5e5e5] rounded-lg transition-all duration-300"
            >
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex justify-between items-center px-3 py-2 text-left"
              >
                <span className="font-semibold text-[16px] text-black pr-3">
                  {faq.question}
                </span>
                <div
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "-rotate-180" : ""
                  }`}
                >
                  <div className="bg-[#003150] rounded-full p-1">
                    <ArrowDownIcon />
                  </div>
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="px-3 py-2 pt-0 text-black/90 text-[12px]">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
