import Img1 from "../../assets/Jangan.png";

function Warning() {
  return (
    <>
      <div className="flex flex-col items-center text-center p-5  space-y-4 ">
        <img
          src={Img1}
          alt="Warning haji sembarangan"
          className="h-32 w-auto"
        />
        <div className="bg-gradient-to-r from-blue-800 to-sky-950 bg-clip-text text-transparent text-center">
          <h1 className="text-4xl font-[680]">Jangan Daftar Haji</h1>
          <h1 className="text-4xl font-[680]">Sembarangan!</h1>
        </div>
        <p className="text-xs font-medium text-[#004273] leading-tight">
          Haji itu mahal dan hanya diwajibkan bagi yang mampu.
          <br />
          Jangan tergiur Haji dengan biaya murah namun tidak jelas alurnya.
        </p>
      </div>
    </>
  );
}

export default Warning;
