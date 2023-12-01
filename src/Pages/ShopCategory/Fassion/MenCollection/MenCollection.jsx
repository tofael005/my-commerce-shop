import { useEffect, useState } from "react";
import SingleMens from "./SingleMens";


const MenCollection = () => {
    const [mens, setMens] = useState([])

        useEffect(() =>{
            fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setMens(data))
        }, [])

    return (
        <div className="max-w-[1240px] mx-auto mt-10 mb-10 px-2">
            <div>
                {
                    mens.map((singleMens, i) => <SingleMens key={i} singleMens={singleMens}/>)
                }
            </div>
        </div>
    );
};

export default MenCollection;