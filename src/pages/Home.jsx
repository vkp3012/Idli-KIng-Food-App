import React from 'react'
import Features from '../components/Features'
import Step from '../components/Step'

const Home = () => {
    return (
        <div className='container-xx'>
            <div className='home-background'>
                <div className='home-details'>
                    <div className='bg-dark p-4 opacity-75 position-relative'>
                        <h1 className='fw-bold fa-5x text-white opacity-100 position-relative'>
                            HEALTHY
                        </h1>    
                        <h1 className='fw-bold fa-2x text-danger opacity-100'>
                            TASTY LUNCH
                        </h1>    
                        <h1 className='fw-bold fa-2x  text-white opacity-100'>
                            FOR HEALTHY LIFE
                        </h1>    
                        <h1 className='fw-bold fa-2x text-danger opacity-100'>
                            MEAL PLANS. FOR EVERYONE
                        </h1>
                        <p style={{color:"#fff",fontSize:"20px",fontWeight:"500"}}>
                            We cook and deliver the tastiest healthy food 
                            right away to your destination.
                        </p>
                        <div className=' p-2'>
                            <button className='m-2'>MENU</button>
                            <button>Show Me More</button>
                        </div>
                    </div>
                </div>
            </div>  
            <div className='my-5'>
                <Features/>                     
            </div>
            <div className='container my-5'>
                <Step/>                    
            </div>
        </div>
    )
}

export default Home
