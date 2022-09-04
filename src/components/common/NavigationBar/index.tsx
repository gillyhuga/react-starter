import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../lib/auth-provider/context";

export default function NavigationBar() {
    const auth = useAuth();
    const navigate = useNavigate();

    return (
        <nav className="flex justify-around py-4 bg-white/80 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10">
            <div className="flex items-center">
                <h3 className="text-2xl font-medium text-blue-500">
                    React
                </h3>
            </div>
            <div className="flex items-center space-x-5">
                <Link to="/" className="flex hover:text-gray-600 transition-colors duration-300 font-semibold text-blue-600">Home</Link>
                <Link to="/dashboard" className="flex hover:text-gray-600 transition-colors duration-300 font-semibold text-blue-600">Dashboard</Link>
                {auth.token ? (
                    <button
                        onClick={() => {
                            auth.signout(() => navigate("/"));
                        }}
                        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"> Logout </button>
                ) : null}
            </div>
        </nav>
    );
}
