const fixedInputClass = "rounded-md appearance-none relative lg:w-1/4 sm:w-1/3 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-md"

import { useState } from "react";
import axios from "axios";

export default function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const login = () => {
        const data = { username: username, password: password };
        axios.post("http://localhost:3001/auth/login", data).then((response) => {
            console.log(response.data);
        })
    };

    //Handle Login API Integration here
    const authenticateUser = () => {

    }


    return (
        <div className="text-center">

            <input type="text" className={fixedInputClass} placeholder="Username"
                onChange={(event) => {
                    setUsername(event.target.value);
                }} /> <br /> <br />
            <input type="password" className={fixedInputClass} placeholder="Password" onChange={(event) => {
                setPassword(event.target.value);
            }} />
            <button onClick={login} type="submit" className=" shadow-md bg-slate-200 p-3 m-4 rounded-md block center mx-auto"> LOGIN</button>
        </div>
    )
}