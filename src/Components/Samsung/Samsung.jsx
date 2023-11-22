
import { useEffect, useState } from "react";
import SingleSamsung from "./SingleSamsung";
import { Link } from "react-router-dom";


const Samsung = () => {
    const [samsungs, setSamsungs] = useState([])

    useEffect(() =>{
        fetch("/samsung.json")
        .then(res => res.json())
        .then(data => setSamsungs(data))
    },[])
    return (
        <div className="mt-10 max-w-[1240px] mx-auto">
           <div className="grid md:grid-cols-5 items-center">
            {
                samsungs.map((SinglePhone, index) => <SingleSamsung key={index} SinglePhone={SinglePhone}/>)
            }
           </div>



            {/* BRAND BTN  */}
           <div className="grid md:grid-cols-9 gap-3 items-center my-9">
                <Link to="/apple"><input className="border p-3 cursor-pointer rounded-md hover:text-white duration-300 hover:bg-[#008ECC]" type="button" value="Apple" /></Link>
                <Link to="/sony"><input className="border p-3 cursor-pointer rounded-md hover:text-white duration-300 hover:bg-[#008ECC]" type="button" value="Sony" /></Link>
                <Link to="/blackberry"><input className="border p-3 cursor-pointer rounded-md hover:text-white duration-300 hover:bg-[#008ECC]" type="button" value="BlackBerry" /></Link>
                <Link to="/vivo"><input className="border p-3 cursor-pointer rounded-md hover:text-white duration-300 hover:bg-[#008ECC]" type="button" value="VIVO" /></Link>
                <Link to="/oppo"><input className="border p-3 cursor-pointer rounded-md hover:text-white duration-300 hover:bg-[#008ECC]" type="button" value="OPPO" /></Link>
                <Link to="/motorola"><input className="border p-3 cursor-pointer rounded-md hover:text-white duration-300 hover:bg-[#008ECC]" type="button" value="Motorola" /></Link>
                <Link to="/realme"><input className="border p-3 cursor-pointer rounded-md hover:text-white duration-300 hover:bg-[#008ECC]" type="button" value="Realme" /></Link>
                <Link to="/mi"><input className="border p-3 cursor-pointer rounded-md hover:text-white duration-300 hover:bg-[#008ECC]" type="button" value="Xiaomi" /></Link>
                <Link to="/walton"><input className="border p-3 cursor-pointer rounded-md hover:text-white duration-300 hover:bg-[#008ECC]" type="button" value="Walton" /></Link>
            </div>
        </div>
    );
};

export default Samsung;