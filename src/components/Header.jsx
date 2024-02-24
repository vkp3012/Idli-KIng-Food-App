import React from 'react'
import Logo from './Logo'
import { faSearch, faShoppingCart, faUser,faCircleQuestion,faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className='container'>
                    <a href='/' className='navbar-brand'>
                        <Logo/>
                    </a>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarScroll"
                        aria-expanded="false"
                        aria-label='toggle Navigation'
                        aria-controls='navbarScroll'

                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='container d-flex justify-content-center align-items-center'>
                        <div className='collapse navbar-collapse' id="navbarScroll">
                            <ul className='navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll fw-bold'>
                                <li className='nav-item'>
                                    <a href='/' className='nav-link active bg-danger' aria-current="page">
                                    <FontAwesomeIcon icon={faHouse} className='px-1'/>Home</a>
                                </li>
                                <li className='nav-item'>
                                    <a href='/cart' className='nav-link'>
                                    <FontAwesomeIcon icon={faShoppingCart} className='px-1'/>Cart</a>
                                </li>
                                <li className='nav-item'>
                                    <a href='/help' className='nav-link'>
                                    <FontAwesomeIcon icon={faCircleQuestion} className='px-1'/>Help</a>
                                </li>
                                <li className='nav-item'>
                                    <a href='/login' className='nav-link'>
                                    <FontAwesomeIcon icon={faUser} className='px-1'/> Login</a>
                                </li>
                                <li className='nav-item'>
                                    <a href='/search' className='nav-link'> 
                                        <FontAwesomeIcon icon={faSearch} className='px-1'/>
                                        Search
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
