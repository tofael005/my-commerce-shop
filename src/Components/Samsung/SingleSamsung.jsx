import { Link } from "react-router-dom";


const SingleSamsung = ({ SinglePhone }) => {
    const { title, image, color, storage, price } = SinglePhone;
    return (
        <div className="max-w-[1240px] mx-auto px-2 mt-10 mb-14">
            <div className=" bg-white shadow-lg rounded-md">
                <img className="block mx-auto p-9" src={image} alt="" />
                <div className="px-4 my-2">
                    <h1 className="font-bold my-3">{title}</h1>
                    <p>Color: {color}</p>
                    <p>Storage: {storage}</p>
                    <p className="font-bold">Price: BDT {price}/-</p>
                </div>

                <Link to="/viewproducts">
                    <div className="cursor-pointer mt-3 hover:bg-[#c0e7f8] bg-[#008ECC] hover:text-[#008ECC] text-white hover:bg-transparent rounded-b-md duration-300 p-3">
                        <button className="block w-full mx-auto">Buy Now</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default SingleSamsung;