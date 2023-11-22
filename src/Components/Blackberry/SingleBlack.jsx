
const SingleBlack = ({ SingleBerry }) => {
    const { title, image, storage, color, price } = SingleBerry;
    return (
        <div className="max-w-[1240px] mx-auto px-2 mt-10 mb-14">
            <div className="bg-white rounded-md shadow-lg">
                <img className="block mx-auto p-28 md:p-12" src={image} alt="" />
                <div className="px-4 my-2">
                    <h1 className="font-bold my-3">{title}</h1>
                    <p>Color: {color}</p>
                    <p>Storage: {storage}</p>
                    <p className="font-bold">Price: BDT {price}</p>
                </div>
                <div className="cursor-pointer mt-3 hover:bg-[#c0e7f8] bg-[#008ECC] hover:text-[#008ECC] text-white hover:bg-transparent rounded-b-md duration-300 p-3">
                    <button className="block w-full mx-auto">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleBlack;