import React from 'react'

const Home = () => {
    return (
        <div className='container-xx'>
            <div className='home-background'>
                <div className='home-details'>
                    <div >
                        <h1 className='fw-bold fa-5x'>
                            HEALTHY
                        </h1>    
                        <h1 className='fw-bold fa-2x'>
                            TASTY LUNCH
                        </h1>    
                        <h1 className='fw-bold fa-2x'>
                            FOR HEALTHY LIFE
                        </h1>    
                        <h1 className='fw-bold fa-2x'>
                            MEAL PLANS. FOR EVERYONE
                        </h1>
                        <p style={{color:"#c8F560",fontSize:"20px",fontWeight:"500"}}>
                            We cook and deliver the tastiest healthy food 
                            right away to your destination.
                        </p>
                    </div>
                    <div className=' p-2'>
                        <button className='m-2'>MENU</button>
                        <button>Show Me More</button>
                    </div>
                </div>
            </div>                       
        </div>
    )
}

export default Home
