import { useEffect, useState } from "react";
import SingleApple from "./SingleApple";
import { Link } from "react-router-dom";


const Apple = () => {
    const [apples, setApples] = useState([])

    useEffect(() => {
        fetch("/iphone.json")
            .then(res => res.json())
            .then(data => setApples(data))
    }, [])

    return (
        <div className="max-w-[1240px] mx-auto mt-10 ">
            <div className="grid md:grid-cols-5 items-center">
                {
                    apples.map((SinglePhone, index) => <SingleApple key={index} SinglePhone={SinglePhone} />)
                }
            </div>




            {/* BRAND BTN  */}
            <div className="grid md:grid-cols-9 grid-cols-3 ml-4 gap-3 items-center my-9">
                <Link to="/samsung"><input className="border p-3 cursor-pointer rounded-md hover:text-white duration-300 hover:bg-[#008ECC]" type="button" value="Samsung" /></Link>
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

export default Apple;