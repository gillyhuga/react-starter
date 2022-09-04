import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginForm from "../../components/pages/login/Form";
import { useAuth } from "../../lib/auth-provider/context";

export default function LoginPage() {
    const navigate = useNavigate();
    const location: { state: any } = useLocation();
    const auth = useAuth();

    const from = location.state?.from?.pathname || "/";

    const [authForm, setAuthForm] = useState({
        username: "",
        password: "",
    });

    const handleFormChange = (e: any) => {
        setAuthForm({
            ...authForm,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (authForm.username === '123' && authForm.password === '123') {
            const token = '1234567890';
            auth.signin(token, () => {
                navigate(from, { replace: true });
            });
        } else {
            alert("unAuthorized, login with username: 123, password: 123");
        }
    }

    return (
        <div className="flex flex-col justify-center">
            <div className="place-self-center">
                <p className="place-content-center">You must log in to view the page at <Link to={from} className="text-blue-800">{from}</Link></p>
            </div>
            <LoginForm
                username={handleFormChange}
                password={handleFormChange}
                onSubmit={handleSubmit}
            />
        </div>
    );
}