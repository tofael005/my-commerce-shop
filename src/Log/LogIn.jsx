import { Link } from "react-router-dom";


const LogIn = () => {
    return (
        <div className="max-w-[1240px] mx-auto mt-10 px-2">
            <h1>Log In</h1>



            <Link to="/registration"><button className="mt-28 bg-sky-300 text-white">Go to Register</button></Link>
        </div>
    );
};

export default LogIn;