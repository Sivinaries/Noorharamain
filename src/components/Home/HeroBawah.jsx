import Img1 from "../../assets/Tent.png";

function HeroBawah() {
  return (
    <div className="relative w-full md:max-w-sm mx-auto bg-[#E5E5E5FF] h-[240px] overflow-hidden">
      <div className="relative container mx-auto px-6 h-full flex items-center z-20">
        <div>
          <h1 className="text-[40px] font-bold text-[#00487AFF] leading-[1.1] max-w-md">
            Mau Haji, <br />
            Tanpa Antri, <br />
            Gratis?
          </h1>
          <p className="text-[#000000FF] mt-2 text-[5px] font-semibold">
            *Terms & Conditions Applied
          </p>
        </div>
      </div>
      <img
        src={Img1}
        alt="Tenda Haji"
        className="absolute bottom-0 right-0 w-auto z-10"
      />
    </div>
  );
}

export default HeroBawah;
