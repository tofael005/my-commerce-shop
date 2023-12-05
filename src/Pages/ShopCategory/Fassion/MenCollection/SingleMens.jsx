

const SingleMens = ({ singleMens }) => {
    const { title, image, price, rating } = singleMens;
    return (
        <div>
            <div className="rounded-md shadow-black/10 shadow">
                <img className="h-[260px] block mx-auto p-2" src={image} alt="" />
                <div className="px-2">
                    <h1 className="text-xl font-bold my-2">Mens Product.</h1>
                    <p>Price: BDT {price}/-</p>
                    <p>Rating: {rating.rate}</p>
                    <p>Count: {rating.count}</p>
                </div>
                <div className="cursor-pointer mt-3 hover:bg-[#c0e7f8] bg-[#008ECC] hover:text-[#008ECC] text-white hover:bg-transparent rounded-b-md duration-300 p-3">
                    <button className="block w-full mx-auto">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleMens;