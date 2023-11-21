import { LuShoppingCart } from "react-icons/lu";

const SingleApple = ({ SinglePhone }) => {
    const { title, image, color, storage, price } = SinglePhone;
    return (
        <div className="max-w-[1240px] mx-auto mt-10 px-2 mb-10">
            <div className="bg-white rounded-md shadow-md">
                <img className=" block mx-auto p-3 h-[200px]" src={image} alt="" />
                <div className="p-2 text-sm">
                    <h1 className="my-3 font-bold">Model: {title}</h1>
                    <p>Color: {color}</p>
                    <p>Storage: {storage}</p>
                    <p>Price: {price}</p>
                </div>
                <div className="cursor-pointer mt-3 hover:bg-[#c0e7f8] bg-[#008ECC] hover:text-[#008ECC] text-white hover:bg-transparent rounded-b-md duration-300 p-2">
                    <button className="block w-full mx-auto">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleApple;