import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MiniList = () => {
    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchExpenses = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                return;
            }

            try {
                const response = await fetch('http://127.0.0.1:8000/api/expenses', {
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
                console.log(data);
                setExpenses(data);
            } catch (error) {
                console.error("Error fetching expenses:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchExpenses();
    }, []);


    return (
        <div className='mt-8'>
            <h3 className='font-semibold text-[#727372]'>Recent expenses</h3>
            <ul className='mt-4 space-y-3'>
                {
                    loading && <p className="text-center text-gray-500">Loading expenses...</p>
                }
                {expenses.slice(0, 3).map((expense) => (
                    <li key={expense.id} className='flex justify-between items-center p-3 border-b border-gray-300 cursor-pointer hover:scale-[1.01] transition-all duration-200 ease-out'>
                        <span className='text-[#727372] w-1/3 text-left'>{expense.created_at.split("T")[0]}</span>
                        <span className='text-[#262626] font-medium w-1/3 text-left'>{expense.tag}</span>
                        <span className='font-semibold text-[#262626] w-1/3 text-right'>{expense.amount} R$</span>
                    </li>
                ))}
                <div className='text-end mt-6 font-bold px-3'>
                    <Link to="/expenses">See All +</Link>
                </div>
            </ul>
        </div>
    );
};

export default MiniList;
