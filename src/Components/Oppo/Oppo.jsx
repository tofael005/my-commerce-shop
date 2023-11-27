import { Link } from "react-router-dom";


const Oppo = () => {
    return (
        <div>
            


            <div className="h-[100vh] mt-10">
                <p className="text-5xl text-center font-bold mb-3">Comming SOON</p>
                <h1 className="text-center font-semibold">All OPPO Products</h1>
            </div>









            {/* BRAND BTN  */}
            <div className="grid md:grid-cols-9 gap-3 items-center my-9">
                <Link to="/samsung"><input className="border p-3 cursor-pointer rounded-md hover:text-white duration-300 hover:bg-[#008ECC]" type="button" value="Samsung" /></Link>
                <Link to="/sony"><input className="border p-3 cursor-pointer rounded-md hover:text-white duration-300 hover:bg-[#008ECC]" type="button" value="Sony" /></Link>
                <Link to="/blackberry"><input className="border p-3 cursor-pointer rounded-md hover:text-white duration-300 hover:bg-[#008ECC]" type="button" value="BlackBerry" /></Link>
                <Link to="/vivo"><input className="border p-3 cursor-pointer rounded-md hover:text-white duration-300 hover:bg-[#008ECC]" type="button" value="VIVO" /></Link>
                <Link to="/apple"><input className="border p-3 cursor-pointer rounded-md hover:text-white duration-300 hover:bg-[#008ECC]" type="button" value="Apple" /></Link>
                <Link to="/motorola"><input className="border p-3 cursor-pointer rounded-md hover:text-white duration-300 hover:bg-[#008ECC]" type="button" value="Motorola" /></Link>
                <Link to="/realme"><input className="border p-3 cursor-pointer rounded-md hover:text-white duration-300 hover:bg-[#008ECC]" type="button" value="Realme" /></Link>
                <Link to="/mi"><input className="border p-3 cursor-pointer rounded-md hover:text-white duration-300 hover:bg-[#008ECC]" type="button" value="Xiaomi" /></Link>
                <Link to="/walton"><input className="border p-3 cursor-pointer rounded-md hover:text-white duration-300 hover:bg-[#008ECC]" type="button" value="Walton" /></Link>
            </div>
        </div>
    );
};

export default Oppo;