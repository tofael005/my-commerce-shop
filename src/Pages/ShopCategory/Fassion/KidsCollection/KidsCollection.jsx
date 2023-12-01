import { useEffect, useState } from "react";
import SingleKids from "./SingleKids";


const KidsCollection = () => {
    const [kids, setKids] = useState([])

    useEffect(() =>{
        fetch("/kids.json")
        .then(res => res.json())
        .then(data => setKids(data))
    },[])
    return (
        <div className="max-w-[1240px] mx-auto mt-10 mb-10 px-2">
            <div className="grid md:grid-cols-5 gap-4">
                {
                    kids.map((singleKid, index) => <SingleKids key={index} singleKid={singleKid}/>)
                }
            </div>
        </div>
    );
};

export default KidsCollection;