import { useEffect, useState } from "react";
import SingleApple from "./SingleApple";


const Apple = () => {
    const [apples, setApples] = useState([])

        useEffect(() =>{
            fetch("/iphone.json")
            .then(res => res.json())
            .then(data => setApples(data))
        }, [])

    return (
        <div className="max-w-[1240px] mx-auto px-2 mt-10">
            <div className="grid md:grid-cols-5 gap-5 items-center">
                {
                    apples.map((SinglePhone, index) => <SingleApple key={index} SinglePhone={SinglePhone} />)
                }
            </div>
        </div>
    );
};

export default Apple;