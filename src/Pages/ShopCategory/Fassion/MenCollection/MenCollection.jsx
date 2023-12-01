import { useEffect, useState } from "react";


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
                    m
                }
            </div>
        </div>
    );
};

export default MenCollection;