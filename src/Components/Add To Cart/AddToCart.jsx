import { MdDelete } from "react-icons/md";
import product from "../../assets/fashion/men.jpg"

const AddToCart = () => {
    return (
        <div className="max-w-[1240px] mx-auto mt-10 px-2">
            <h1 className="text-center font-bold text-2xl my-6">Add To cart</h1>

            <div className="flex justify-center gap-4 md:flex-row flex-col">
                <table className="w-full text-center text-sky-400">
                    <tr className="bg-black rounded-md">
                        <th className="py-3">Image</th>
                        <th className="py-3">Product Name</th>
                        <th className="py-3">Address</th>
                        <th className="py-3">Number</th>
                        <th className="py-3">Price</th>
                    </tr>

                    <tr>
                        <td><img className="w-16 h-14 block mx-auto rounded-md" src={product} alt="" /></td>
                        <td><h1>Mens T-Shirt</h1></td>
                        <td><h1>Dhaka</h1></td>
                        <td><h1>+880 1966406795</h1></td>
                        <td><h1>350</h1></td>
                    </tr>
                </table>

                <div>
                    <MdDelete className="border hover:shadow-md text-5xl rounded-md cursor-pointer text-sky-400 hover:text-red-600 duration-300 p-3" />
                </div>
            </div>
        </div>
    );
};

export default AddToCart;