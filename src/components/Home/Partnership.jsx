
const advantagesData = [
  {
    title: "Fee Marketing",
    description:
      "Mitra berhak memperoleh fee marketing dengan nilai mencapai puluhan hingga ratusan juta rupiah berdasarkan pencapaian jamaah.",
  },
  {
    title: "Fasilitas Haji Gratis",
    description:
      "Agen yang berhasil merekrut minimal 30 jamaah berhak mendapatkan fasilitas Haji gratis, atau dapat memilih untuk menerima kompensasi dalam bentuk uang tunai.",
  },
  {
    title: "Komisi Tambahan untuk Mitra Berbasis Tim",
    description:
      "Mitra yang membentuk dan mengelola tim akan mendapatkan komisi tambahan sesuai dengan jumlah jamaah yang berhasil direkrut oleh anggota timnya.",
  },
];

const timelineData = [
  {
    title: "Hubungkan",
    description:
      "Bapak/Ibu merekomendasikan brand Noor Haramain kepada masyarakat / calon jamaah dan menghubungkan calon jamaah tersebut kepada tim Noor Haramain.",
    bgColor: "bg-[#E5E5E5FF]",
    textColor: "text-black",
  },
  {
    title: "Pendaftaran & Keberangkatan",
    description:
      "Jamaah terhubung, melakukan pendaftaran dan menyepakati keberangkatan melalui layanan kami.",
    bgColor: "bg-[#E5E5E5FF]",
    textColor: "text-black",
  },
  {
    title: "Pendaftaran & Keberangkatan",
    description:
      "Bapak/Ibu berhak menerima Fee Marketing sebesar Rp.10.000.000,- yang dapat diterima setelah seluruh komponen pembiayaan selesai dibayarkan atau selambat-lambatnya 7 (tujuh) hari setelah ketibaan seluruh jamaah di Tanah Air dan seluruh program dinyatakan selesai.",
    bgColor: "bg-gradient-to-r from-[#00487a] to-[#022335]",
    textColor: "text-white/90 font-light",
  },
];

function Partnership() {
  return (
    <div className="relative w-full md:max-w-sm mx-auto bg-gray-50 font-sans py-2">
      <div className="bg-white px-4 py-6 flex gap-4">
        <button className="flex-1 py-1 bg-gradient-to-r from-[#D2C5B7FF] to-[#A79582FF] text-white text-sm font-semibold rounded-full">
          Gabung Sekarang
        </button>
        <button className="flex-1 py-1 bg-[#E5E5E5FF] text-sm rounded-full">
          Pelajari Selengkapnya
        </button>
      </div>

      <div className="px-4 text-center">
        <p className="max-w-sm mx-auto leading-tight font-medium text-[13px]">
          Noor Haramain membuka kesempatan kemitraan tanpa persyaratan khusus
          bagi individu atau kelompok yang berminat untuk berkontribusi dalam
          upaya mensyiarkan rukun Islam yang ke-5.
        </p>
      </div>

      <div className="px-4 py-3 bg-white">
        <h2 className="text-[13px] font-normal text-center">
          Adapun <strong>keuntungan</strong> yang ditawarkan meliputi:
        </h2>
        <div className="mt-4 flex flex-col items-center gap-4">
          {advantagesData.map((advantage, index) => (
            <div
              key={index}

              className={`
              rounded-full px-3 py-2 w-full text-center
              ${
                index === 1
                  ? "bg-gradient-to-r from-[#00487a] to-[#022335]"
                  : "bg-[#E5E5E5FF]"
              }
            `}
            >
              <h3 className="font-semibold text-[10px]">
                {index === 1 ? (
                  <>
                    <span className="text-white">Fasilitas</span>{" "}
                    <span className="text-[#D8CABCFF]">Haji Gratis</span>
                  </>
                ) : (
                  advantage.title
                )}
              </h3>
              <p
                className={`text-[10px] mt-1 ${
                  index === 1 ? "text-white/90 font-light" : "text-black"
                }`}
              >
                {index === 0 ? (
                  <>
                    Mitra berhak memperoleh fee marketing dengan nilai mencapai{" "}
                    <strong>puluhan hingga ratusan</strong> juta rupiah berdasarkan pencapaian jamaah.
                  </>
                ) : index === 1 ? (
                  <>
                    Agen yang berhasil merekrut{" "}
                    <strong className="font-medium">minimal 15-20</strong>{" "}
                    jamaah berhak mendapatkan fasilitas{" "}
                    <strong className="font-medium">Haji gratis</strong>, atau
                    dapat memilih untuk menerima kompensasi dalam bentuk{" "}
                    <strong className="font-medium">uang tunai</strong>.
                  </>
                ) : (
                  advantage.description
                )}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* --- Timeline --- */}
      <div className="py-3 px-4">
        <h2 className="text-[13px] font-normal text-center">
          Bagaimana <strong>Alurnya?</strong>
        </h2>
        <div className="mt-4 flex flex-col items-center gap-4">
          {timelineData.map((step, index) => (
            <div
              key={index}
              className={`rounded-full px-3 py-2 w-full text-center ${step.bgColor}`}
            >
              <h3 className={`font-semibold text-[10px] ${step.textColor}`}>
                {step.title}
              </h3>
              <p className={`text-[8px] ${step.textColor} mt-1`}>
                {index === 2 ? (
                  <>
                    Bapak/Ibu berhak menerima{" "}
                    <strong className="font-medium">
                      Fee Marketing sebesar Rp.10.000.000,-
                    </strong>{" "}
                    yang dapat diterima setelah seluruh komponen pembiayaan selesai dibayarkan atau selambat-lambatnya 7 (tujuh) hari
                    setelah ketibaan seluruh jamaah di Tanah Air dan seluruh program dinyatakan selesai.
                  </>
                ) : (
                  step.description
                )}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* --- Closing --- */}
      <div className="py-3 px-4 text-center bg-white">
        <p className="max-w-sm mx-auto leading-tight text-[11px] font-medium">
          Kesempatan ini terbuka luas bagi siapa saja yang berminat untuk
          bergabung dan membantu melayani calon tamu-tamu Allah untuk dapat
          menyempurnakan rukun Islam yang ke-5.
        </p>
        <h2 className="text-lg font-medium text-black mt-10">
          Saatnya Bergabung Program Kemitraan Bersama{" "}
          <span className="text-[#00659EFF] font-bold">Noor Haromain</span>
        </h2>
        <div className="mt-5">
          <button className="py-1 px-6 bg-gradient-to-r from-[#D2C5B7FF] to-[#A79582FF] text-white text-sm font-semibold rounded-full">
            Gabung Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}

export default Partnership;
