import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const NavMenu = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    const handleLogout = async () => {
        const token = localStorage.getItem('token');

        try {
            const response = await fetch('http://127.0.0.1:8000/api/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })

            if (!response.ok) {
                throw new Error('Falha no logout');
            }

            localStorage.clear();

            navigate('/login');
        } catch (error) {
            console.error('Erro ao fazer logout:', error)
        }
    }

    return (
        <div className='flex gap-10 text-[#727372] font-medium'>
            <Link
                to="/"
                className={`hover:text-[#0D0D0D] transition-all duration-200 ease-out ${isActive('/') ? 'text-[#0D0D0D]' : ''}`}
            >
                Home
            </Link>
            <Link
                to="/me"
                className={`hover:text-[#0D0D0D] transition-all duration-200 ease-out ${isActive('/me') ? 'text-[#0D0D0D]' : ''}`}
            >
                My Profile
            </Link>
            <button
                onClick={handleLogout}
                className="text-[#727372] hover:text-red-700 cursor-pointer transition-all duration-200 ease-out"
            >
                Exit
            </button>
        </div>
    )
}

export default NavMenu