import { FaArrowUp } from "react-icons/fa6";
import Logo from '../assets/Logo3.png';

const Footer = () => {
    return (
        <footer className="w-full bg-gradient-to-b from-sky-800 to-blue-950 mx-auto py-8 px-8 h-[360px] relative">
            {/* BUTTON */}
            <div className="absolute -top-10 right-6">
                <div className="bg-[#A99784] shadow-xl p-2 py-4 rounded-[20px]">
                    <FaArrowUp className="w-10 h-10 text-white" />
                </div>
            </div>
            {/* MAIN */}
            <div className="space-y-6">
                <div>
                    <h1 className="text-[20px] font-light text-white">Plan It Good,</h1>
                    <h1 className="text-[20px] font-light text-white">Experience It Better.</h1>
                </div>
                <div>
                    <hr />
                </div>
                <div className="flex gap-2">
                    <div className="p-1 border rounded-[10px]">
                        <a href="https://www.instagram.com/noorharamainservices">
                            <h1 className="px-2 text-white text-[12px]">Instagram</h1>
                        </a>
                    </div>
                    <div className="p-1 border rounded-[10px]">
                        <a href="">
                            <h1 className="px-6 text-white text-[12px]">Mail</h1>
                        </a>
                    </div>
                    <div className="p-1 border rounded-[10px]">
                        <a href="https:/wa.me/6282221115772">
                            <h1 className="px-2 text-white text-[12px]">Whatsapp</h1>
                        </a>
                    </div>
                </div>
            </div>

            {/* LOGO */}
            <div className="absolute bottom-10 left-8">
                <img className="w-12 h-12" src={Logo} alt="" />
            </div>

            {/* COPYRIGHT */}
            <div className="absolute bottom-10 right-6">
                <h1 className="text-white text-[7px]">Copyright@Noor Haramain Services</h1>
            </div>

        </footer>
    );
};

export default Footer;
