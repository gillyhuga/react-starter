import React from "react";

type Props = {
    username: (e: React.ChangeEvent<HTMLInputElement>) => void;
    password: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
}
const LoginForm = ({ onSubmit, username, password }: Props) => {
    return (
        <div className="flex justify-center">
            <div className="block p-6 rounded-lg shadow-lg w-1/4 bg-white">
                <form onSubmit={onSubmit}>
                    <label className="block mt-4 ">
                        <span className="block font-medium text-slate-700">Username</span>
                        <input onChange={username} type="text" name="username" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Input Username" />
                    </label>
                    <label className="block mt-4 ">
                        <span className="block font-medium text-slate-700">Password</span>
                        <input onChange={password} type="password" name="password" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Input Password" />
                    </label>
                    <button type="submit" className="mt-4 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"> Login </button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;