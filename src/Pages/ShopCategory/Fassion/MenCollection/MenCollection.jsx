import { useState } from "react";


const MenCollection = () => {
    const [mens, setMens] = useState([])


    
    return (
        <div className="max-w-[1240px] mx-auto mt-10 mb-10 px-2">
            <h1 className="text-center text-6xl font-bold mt-10 mb-3">Mens Collection</h1>
            <p className="text-center text-xl">Comming SOON!.</p>
        </div>
    );
};

export default MenCollection;