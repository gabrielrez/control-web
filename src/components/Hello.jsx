import React, { useEffect, useState } from 'react';

const Hello = () => {
    const [fullName, setFullName] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                setFullName('Username');
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
                setFullName(data.full_name.split(' ')[0]);
            } catch (error) {
                console.log('Error: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <h3 className='text-7xl text-[#262626]'>
            Hello, <br />
            <span className='font-semibold text-[#0D0D0D]'>
                {fullName.split('').map((letter, index) => (
                    <span
                        key={index}
                        className='inline-block hover:transform hover:translate-y-[-8px] transition-all duration-200 ease-out cursor-default'
                    >
                        {letter}
                    </span>
                ))}
            </span>
            !
        </h3>
    );
};

export default Hello;
