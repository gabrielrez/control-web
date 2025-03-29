import React from 'react';
import { Link } from 'react-router-dom';

const expenses = [
    { id: 1, amount: '50,00', category: 'Food', date: '2025-03-28' },
    { id: 2, amount: '120,00', category: 'Transport', date: '2025-03-27' },
    { id: 3, amount: '80,00', category: 'Entertainment', date: '2025-03-26' }
];

const ExpensesList = () => {
    return (
        <div className='mt-8'>
            <h3 className='font-semibold text-[#727372]'>Recent expenses</h3>
            <ul className='mt-4 space-y-3'>
                {expenses.map((expense) => (
                    <li key={expense.id} className='flex justify-between p-3 border-b border-gray-300'>
                        <span className='text-[#727372]'>{expense.date}</span>
                        <span className='text-[#727372] min-w-28 font-medium'>{expense.category}</span>
                        <span className='font-semibold text-[#262626]'>{expense.amount} R$</span>
                    </li>
                ))}
                <div className='text-end mt-6 font-bold px-3'>
                    <Link to="/list">See All +</Link>
                </div>
            </ul>
        </div>
    );
};

export default ExpensesList;
