import React from 'react'
import { Link } from 'react-router-dom'

const Value = () => {
    return (
        <Link to="/analitics" className='flex justify-between items-end bg-gradient-to-t from-[#0D0D0D] to-[#262626] p-6 rounded-3xl cursor-pointer hover:scale-[0.97] transition-all duration-200 ease-out'>
            <div>
                <span className='text-[#BFBFBF]'>Total expenses in the last 30 days</span>
                <h3 className='text-[#F2F2F2] text-4xl font-semibold mt-2'>250,00 R$</h3>
            </div>
            <div className='flex justify-center items-baseline text-4xl font-normal text-[#F2F2F2]'>
                <span className='text-2xl'>Analitics</span> <i class="fa-solid fa-chart-simple ml-3"></i>
            </div>
        </Link>
    )
}

export default Value