import { Link } from "react-router-dom";
import logo1 from "../../../assets/Phone Brand/apple.png"
import logo2 from "../../../assets/Phone Brand/blackberry.png"
import logo3 from "../../../assets/Phone Brand/motorola.png"
import logo4 from "../../../assets/Phone Brand/opp.png"
import logo5 from "../../../assets/Phone Brand/realme.jpeg"
import logo6 from "../../../assets/Phone Brand/Samsung.png"
import logo7 from "../../../assets/Phone Brand/sony.png"
import logo8 from "../../../assets/Phone Brand/Xiaomi.png"
import logo9 from "../../../assets/Phone Brand/walton.png"
import logo10 from "../../../assets/Phone Brand/Vivo.png"

const AllPhone = () => {
    return (
        <div className="max-w-[1240px] mx-auto mt-16 px-2">
            <div className="grid md:grid-cols-5 gap-4">
                <Link to="/apple">
                    <div className="border py-7 rounded-md bg-slate-100 hover:scale-90 duration-300 scale-100">
                        <img className="w-[100px] h-[100px] block mx-auto" src={logo1} alt="" />
                        <h1 className="text-center mt-3 uppercase font-bold">Apple</h1>
                    </div>
                </Link>
                <Link to="/blackberry">
                    <div className="border py-7 rounded-md bg-slate-100 hover:scale-90 duration-300 scale-100">
                        <img className="w-[100px] h-[100px] block mx-auto" src={logo2} alt="" />
                        <h1 className="text-center mt-3 uppercase font-bold">Blackberry</h1>
                    </div>
                </Link>
                <Link to="/motorola">
                    <div className="border py-7 rounded-md bg-slate-100 hover:scale-90 duration-300 scale-100">
                        <img className="w-[100px] h-[100px] block mx-auto" src={logo3} alt="" />
                        <h1 className="text-center mt-3 uppercase font-bold">Motorola</h1>
                    </div>
                </Link>
                <Link to="/oppo">
                    <div className="border py-7 rounded-md bg-slate-100 hover:scale-90 duration-300 scale-100">
                        <img className="w-[100px] h-[100px] block mx-auto" src={logo4} alt="" />
                        <h1 className="text-center mt-3 uppercase font-bold">OPPO</h1>
                    </div>
                </Link>
                <Link to="/realme">
                    <div className="border py-7 rounded-md bg-slate-100 hover:scale-90 duration-300 scale-100">
                        <img className="w-[100px] h-[100px] block mx-auto" src={logo5} alt="" />
                        <h1 className="text-center mt-3 uppercase font-bold">REALME</h1>
                    </div>
                </Link>
                <Link to="/samsung">
                    <div className="border py-7 rounded-md bg-slate-100 hover:scale-90 duration-300 scale-100">
                        <img className="w-[100px] h-[100px] block mx-auto" src={logo6} alt="" />
                        <h1 className="text-center mt-3 uppercase font-bold">Samsung</h1>
                    </div>
                </Link>
                <Link to="/sony">
                    <div className="border py-7 rounded-md bg-slate-100 hover:scale-90 duration-300 scale-100">
                        <img className="w-[100px] h-[100px] block mx-auto" src={logo7} alt="" />
                        <h1 className="text-center mt-3 uppercase font-bold">Sony</h1>
                    </div>
                </Link>
                <Link to="/mi">
                    <div className="border py-7 rounded-md bg-slate-100 hover:scale-90 duration-300 scale-100">
                        <img className="w-[100px] h-[100px] block mx-auto" src={logo8} alt="" />
                        <h1 className="text-center mt-3 uppercase font-bold">Xiaomi</h1>
                    </div>
                </Link>
                <Link to="/walton">
                    <div className="border py-7 rounded-md bg-slate-100 hover:scale-90 duration-300 scale-100">
                        <img className="w-[100px] h-[100px] block mx-auto" src={logo9} alt="" />
                        <h1 className="text-center mt-3 uppercase font-bold">Walton</h1>
                    </div>
                </Link>
                <Link to="/vivo">
                    <div className="border py-7 rounded-md bg-slate-100 hover:scale-90 duration-300 scale-100">
                        <img className="w-[100px] h-[100px] block mx-auto" src={logo10} alt="" />
                        <h1 className="text-center mt-3 uppercase font-bold">Vivo</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default AllPhone;