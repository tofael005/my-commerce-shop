import { MdDelete } from "react-icons/md";
import product from "../../assets/fashion/men.jpg"

const AddToCart = () => {
    return (
        <div className="max-w-[1240px] mx-auto mt-10 px-2">
            <h1 className="text-center font-bold text-2xl my-6">Add To cart</h1>

            <div className="flex items-center gap-5 md:flex-row">
                <div className=" md:w-[900px] flex -mt-24 justify-center gap-4 md:flex-row flex-col">
                    <table className="w-full text-center text-sky-400">
                        <tr className="bg-black rounded-md">
                            <th className="py-3">Image</th>
                            <th className="py-3">Product Name</th>
                            <th className="py-3">Quantity</th>
                            <th className="py-3">Number</th>
                            <th className="py-3">Price</th>
                        </tr>

                        <tr>
                            <td><img className="w-16 h-14 block mx-auto rounded-md" src={product} alt="" /></td>
                            <td><h1>Mens T-Shirt</h1></td>
                            <td><h1>6</h1></td>
                            <td><h1>+880 1966406795</h1></td>
                            <td><h1>350</h1></td>
                        </tr>
                    </table>

                    <div>
                        <MdDelete className="border hover:shadow-md text-5xl rounded-md cursor-pointer text-sky-400 hover:text-red-600 duration-300 p-3" />
                    </div>
                </div>

                {/* Check out  */}
                <div className="md:w-[330px] mt-16">
                    <div className="border rounded-md">
                        <h1 className="text-center p-2 text-2xl text-sky-400 font-bold">Checkout</h1>
                        <div className="px-3 font-semibold">
                            <div className="flex justify-between items-center">
                                <p>Items Name:</p>
                                <p>0.0</p>
                            </div>
                            <div className="flex my-1 justify-between items-center">
                                <p>Quantity:</p>
                                <p>0.0</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p>Price:</p>
                                <p>0.0</p>
                            </div>
                            <div className="flex mt-4 mb-6 justify-between items-center">
                                <p>Sub-Total: </p>
                                <p>0.00</p>
                            </div>
                            <button className="w-full mb-4 p-3 rounded-md bg-slate-100 hover:bg-sky-400 duration-300 hover:text-white">Payment Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToCart;