import { useState } from 'react'
import { useAuth } from '../../routers/authProvider'
import { authLogin } from '../../routers/authAction'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const [controller, dispatch] = useAuth()
    const [form, setForm] = useState({ user: '', password: '' })
    const navigate = useNavigate()

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)
        authLogin(dispatch, { user: form.user, password: form.password });
        navigate('/home', { replace: true });

        setForm({ user: '', password: '' })
    }

    return (
        <form className="mt-6" onSubmit={handleSubmit} >
            <div className="mb-2">
                <label
                    for="email"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Email
                </label>
                <input
                    type="email"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    onChange={handleChange}
                    name='user'
                    value={form.user}
                />
            </div>
            <div className="mb-2">
                <label
                    for="password"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Password
                </label>
                <input
                    type="password"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    onChange={handleChange}
                    name='password'
                    value={form.password}

                />
            </div>
            <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                    Login
                </button>
            </div>
        </form>
    )
}

export default SignIn;