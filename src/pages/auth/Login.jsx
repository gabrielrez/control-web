import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const navigate = useNavigate();

    function handleChange({ target }) {
        const { id, value } = target;
        setForm({ ...form, [id]: value });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setError('');

        try {
            const response = await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            localStorage.setItem('token', data.token);
            console.log(data);
            navigate('/');
        } catch (err) {
            setError('Invalid email or password');
        }
    }

    return (
        <div className='px-6 py-6 h-screen flex flex-col justify-center items-center'>
            <h3 className='text-7xl text-[#262626] text-center'>Login</h3>
            <form onSubmit={handleSubmit} className='mt-12 max-w-96 flex flex-col items-center'>
                <div>
                    <label htmlFor="email" className='text-lg block'>Email:</label>
                    <input
                        id='email'
                        type='email'
                        value={form.email}
                        onChange={handleChange}
                        placeholder='youremail@email.com'
                        className='p-3 border border-[#0D0D0D] rounded w-full min-w-96 mt-2'
                    />
                </div>
                <div className='mt-6'>
                    <label htmlFor="password" className='text-lg block'>Password:</label>
                    <input
                        id='password'
                        type='password'
                        value={form.password}
                        onChange={handleChange}
                        placeholder='************'
                        className='p-3 border border-[#0D0D0D] rounded w-full min-w-96 mt-2'
                    />
                </div>
                {error && <p className='text-red-700 mt-6 font-semibold'>{error}</p>}
                <button type='submit' className='text-[#F2F2F2] font-bold bg-gradient-to-t from-[#0D0D0D] to-[#262626] py-3 px-24 rounded mt-12 w-full cursor-pointer'>Login to account</button>
                <p className='mt-5 text-current'>Don't have an account yet? <Link to='/register' className='font-semibold'>Create an Account</Link></p>
            </form>
        </div>
    );
};

export default Login;