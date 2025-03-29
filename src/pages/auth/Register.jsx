import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [form, setForm] = useState({ full_name: '', email: '', password: '', confirm_password: '', });
    const [error, setError] = useState('');

    function handleChange({ target }) {
        const { id, value } = target;
        setForm({ ...form, [id]: value });
    }

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (form.password !== form.confirm_password) {
            setError("Passwords do not match");
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });

            if (!response.ok) {
                throw new Error('Failed to register');
            }

            const data = await response.json();
            console.log('Success:', data);
            setError(null);
            navigate('/login')
        } catch (error) {
            console.error('Error:', error);
            setError("Registration failed. Please try again.");
        }
    };

    return (
        <div className='px-6 py-6 h-screen flex flex-col justify-center items-center'>
            <h3 className='text-7xl text-[#262626] text-center'>Create Account</h3>
            <form className='mt-12 max-w-96 flex flex-col items-center' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="full_name" className='text-lg block'>Full Name:</label>
                    <input
                        id='full_name'
                        type="text"
                        value={form.full_name}
                        onChange={handleChange}
                        placeholder='Your Full Name'
                        className='p-3 border border-[#0D0D0D] rounded w-full min-w-96 mt-2'
                        required
                    />
                </div>
                <div className='mt-6'>
                    <label htmlFor="email" className='text-lg block'>Email:</label>
                    <input
                        id='email'
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder='youremail@email.com'
                        className='p-3 border border-[#0D0D0D] rounded w-full min-w-96 mt-2'
                        required
                    />
                </div>
                <div className='flex flex-col md:flex-row items-center gap-6 mt-6'>
                    <div className='w-full'>
                        <label htmlFor="password" className='text-lg block'>Password:</label>
                        <input
                            id='password'
                            type="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder='************'
                            className='p-3 border border-[#0D0D0D] rounded w-full mt-2'
                            required
                        />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="confirm_password" className='text-lg block'>Confirm Password:</label>
                        <input
                            id='confirm_password'
                            type="password"
                            value={form.confirm_password}
                            onChange={handleChange}
                            placeholder='************'
                            className='p-3 border border-[#0D0D0D] rounded w-full mt-2'
                            required
                        />
                    </div>
                </div>
                {error && <p className='text-red-700 mt-6 font-semibold'>{error}</p>}
                <button type='submit' className='text-[#F2F2F2] font-bold bg-gradient-to-t from-[#0D0D0D] to-[#262626] py-3 px-24 rounded mt-12 w-full cursor-pointer'>Create account</button>
                <p className='mt-5 text-center'>Already have an account? <Link to="/login" className='font-semibold'>Login</Link> </p>
            </form>
        </div>
    );
};

export default Register;
