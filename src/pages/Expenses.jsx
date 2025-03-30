import React from 'react'
import Header from '../components/layout/Header'
import ExpensesList from '../components/ExpensesList'

const Expenses = () => {
    return (
        <div>
            <Header />
            <div className='px-6 pt-8 pb-12'>
                <ExpensesList />
            </div>
        </div >
    )
}

export default Expenses