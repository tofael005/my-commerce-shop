import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleBlack from "./SingleBlack";


const BlackBerry = () => {
    const [blackberrys, setBlackberrys] = useState([])

    useEffect(() =>{
        fetch("/blackberry.json")
        .then(res => res.json())
        .then(data => setBlackberrys(data))
    }, [])
    return (
        <div className="max-w-[1240px] mx-auto mt-10">
            <div className="grid md:grid-cols-5">
                {
                    blackberrys.map((SingleBerry, index) => <SingleBlack key={index} SingleBerry={SingleBerry} />)
                }
            </div>


            {/* BRAND BTN  */}
            <div className="grid grid-cols-3 md:grid-cols-9 gap-3 ml-5 items-center my-9">
                <Link to="/samsung"><input className="border p-3 cursor-pointer rounded-md hover:text-white duration-300 hover:bg-[#008ECC]" type="button" value="Samsung" /></Link>
                <Link to="/sony"><input className="border p-3 cursor-pointer rounded-md hover:text-white duration-300 hover:bg-[#008ECC]" type="button" value="Sony" /></Link>
                <Link to="/apple"><input className="border p-3 cursor-pointer rounded-md hover:text-white duration-300 hover:bg-[#008ECC]" type="button" value="Apple" /></Link>
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

export default BlackBerry;