import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ParticlesComponent from '../../components/partical';
import logo from '../../images/logo.svg';
import EastIcon from '@mui/icons-material/East';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("fayzullayevc");
    const [password, setPassword] = useState("muhammadal1");

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username.trim() || !password.trim()) {
            return toast.warn("Malumot to'liq emas", {
                position: "top-right",
                autoClose: 3000,
                theme: "dark"
            });
        }

        const fakeUsername = "fayzullayevc";
        const fakePassword = "muhammadal1";

        if (username === fakeUsername && password === fakePassword) {
            toast.success("welcome", {
                position: "top-right",
                autoClose: 3000,
                theme: "dark"
            });
            localStorage.setItem("token", "mock-token");
            navigate("/admin");
        } else {
            toast.error("username or password is incorrect", {
                position: "top-right",
                autoClose: 3000,
                theme: "dark"
            });
        }
    };

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit} className="login">
                    <img className='login__img' src={logo} alt="" />
                    <input required value={username} onChange={(e) => setUsername(e.target.value)} className='login__input' type="text" placeholder='ФИО' />
                    <div className='login__passwort'>
                        <input className='login__passwort__input' required value={password} onChange={(e) => setPassword(e.target.value)} type={showPassword ? "text" : "password"} placeholder='Pasword' />
                        {
                            password &&
                            <button className='login__passwort__button' onClick={() => setShowPassword(p => !p)} type='button'>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        }
                    </div>
                    <button type='submit' className='login__button'>Весь каталог <EastIcon /></button>
                </form>
            </div>
            <ParticlesComponent id="particles" />
        </>
    );
};

export default Login;
