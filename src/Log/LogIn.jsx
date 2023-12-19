import { Link } from "react-router-dom";
import logo from "../assets/footer/E-commerce-review-page-login-illustration-vector.jpg"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const LogIn = () => {
    
    return (
        <div className="max-w-[1240px] mx-auto mt-3 px-2 mb-10">

            <div>
                <img className="w-full h-[650px] rounded-md" src={logo} alt="" />
                <div className="w-full md:-mt-[650px] rounded-md -mt-[650px] object-cover h-[650px] md:h-[650px] flex  justify-center items-center backdrop-brightness-100 bg-black/80">

                    <span className="">
                        <div className="rounded-md">
                            <h1 className="text-3xl my-3 font-semibold text-white text-center">Log In</h1>
                            <form action="">
                                <label className="text-xl text-white font-semibold" htmlFor="">Email: </label><br />
                                <input className="md:w-[500px] mt-1 mb-2 w-[350px] p-3 rounded-md border bg-transparent " type="email" name="email" id="" placeholder="Enter your email" /><br />
                                <label className="text-xl text-white font-semibold" htmlFor="">Password: </label><br />
                                <input className="md:w-[500px] mt-1 mb-2 w-[350px] p-3 border rounded-md bg-transparent " type="password" name="password" id="" placeholder="Enter your password" /><br />
                                <input className="md:w-[500px] font-bold w-[350px] block mx-auto mt-4 bg-slate-200 p-3 rounded-md text-sky-500 cur hover:bg-sky-400 hover:text-white duration-300 cursor-pointer" type="button" value="Sign In" />
                                <p className="text-center mt-3 text-white ">You dont have an account? <span className="text-sky-400 font-semibold"><Link to="/registration">Sign Up</Link></span></p>
                            </form>
                        </div>

                        <div className="flex gap-3 items-center md:flex-row flex-col mb-6">
                            <FcGoogle className="md:w-[240px] text-5xl my-3 bg-white w-[350px] py-3  rounded-md text-sky-500 hover:bg-sky-400 hover:text-white duration-300" />
                            <FaFacebook className="md:w-[240px] text-5xl my-3 bg-white w-[350px] py-3 rounded-md text-sky-500 hover:bg-sky-400 hover:text-white duration-300" />
                        </div>
                    </span>

                </div>
            </div>
        </div>
    );
};

export default LogIn;