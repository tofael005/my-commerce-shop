import Image from "../../assets/Phone Brand/14-pro-max.webp"

const Viewproduct = () => {
    return (
        <div className="max-w-[1240px] mx-auto mt-10 px-2">
            <h1>Visi product details</h1>
            <div className="flex flex-col md:flex-row gap-4">
                <img className="w-[600px]" src={Image} alt="" />
                <div>
                    <h1>Iphone 14 Pro Max</h1>
                </div>
            </div>
        </div>
    );
};

export default Viewproduct;