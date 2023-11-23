import { key } from "localforage";
import { useEffect, useState } from "react";
import SingleGirls from "./SingleGirls";


const GirlsCollection = () => {
    const [girls, setGirls] = useState([])

    useEffect(() =>{
        fetch("/girls.json")
        .then(res => res.json())
        .then(data => setGirls(data))
    })
    return (
        <div className="max-w-[1240px] mx-auto mt-10 mb-10 px-2">
            
            <div className="grid md:grid-cols-5 gap-4">
                {
                    girls.map((singleGirl, index) => <SingleGirls key={index} singleGirl={singleGirl} />)
                }
            </div>
        </div>
    );
};

export default GirlsCollection;