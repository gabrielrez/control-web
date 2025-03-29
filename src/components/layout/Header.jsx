import React from 'react'
import Hello from '../Hello'
import NavMenu from '../NavMenu'

const Header = () => {
    return (
        <div className='px-6 py-6 flex justify-between items-start'>
            <Hello />
            <NavMenu />
        </div>
    )
}

export default Header
