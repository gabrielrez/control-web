import React, { useEffect, useState } from 'react'
import Header from '../components/layout/Header'

const MyProfile = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                return;
            }

            try {
                const response = await fetch('http://127.0.0.1:8000/api/me', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Unauthorized');
                }

                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.log('Error: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Header />
            <div className='px-6 pt-12 pb-12'>
                {user ? (
                    <div>
                        <p><strong>Full Name:</strong> {user.full_name}</p>
                        <p className='mt-2'><strong>Email:</strong> {user.email}</p>
                    </div>
                ) : (
                    <p>Carregando...</p>
                )}
            </div>
        </>
    )
}

export default MyProfile