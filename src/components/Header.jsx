import React from 'react'
import Logo from './Logo'

const Header = () => {
    return (
        <div className='container-fluid'>
            <div className='container'>
                <div className='row'>
                    <div className='col-2 m-2'>
                        <Logo/>
                    </div>
                    <div className='col-8'></div>
                </div>
            </div>
        </div>
    )
}

export default Header
