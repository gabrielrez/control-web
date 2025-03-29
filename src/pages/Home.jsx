import React, { useEffect } from 'react'
import Value from '../components/Value'
import ExpensesList from '../components/ExpensesList'
import Header from '../components/layout/Header'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <>
            <Header />
            <div className='px-6 pt-12 pb-12'>
                <Value />
                <ExpensesList />
            </div>
        </>
    )
}

export default Home