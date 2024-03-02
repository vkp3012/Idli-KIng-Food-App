/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Steps from "../images/step.jpeg"
const Step = () => {
    return (
        <div ClassName='container'>
            <div className='d-flex justify-content-center'>
                <h1>STEPS TO FOLLOW</h1>
            </div>
            <hr/>

            <div className='d-flex justify-content-evenly align-items-center'>
                <div className='d-flex justify-content-center'>
                    <img src={Steps} alt="step flow image"  style={{width:"450px"}}/>
                </div>
                <div className='d-flex justify-content-center flex-column'>
                    <div className='d-flex align-items-center'>
                        <div className=' d-flex align-items-center num'>1</div>
                        <div className='d-flex justify-content-start align-items-start px-4'>
                            <p>
                                Choose the subscription plan that best fits your needs and sign up today.
                            </p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <div className=' d-flex align-items-center num'>2</div>
                        <div className='d-flex justify-content-start align-items-start px-4'>
                            <p>
                                Order your delicious meal using our mobile app or website. Or you can even call us!
                            </p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <div className=' d-flex align-items-center num'>3</div>
                        <div className='d-flex justify-content-start align-items-start px-4'>
                            <p>
                                Enjoy your meal after less than 20 minutes. See you the next time!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div ClassName="d-flex justify-content-evenly">
                <div ClassName="sBox1">
                    <img src="/static/media/Capture.611de11d.png" alt=" " ClassName="fimg" />
                </div>
                <div ClassName="sBox2">
                    <div ClassName="stepsBox">
                        <div ClassName="num"> 1 </div>
                        <div ClassName="steps">
                            <p ClassName="para">Choose the subscription plan that best fits your needs and sign up today.</p>
                        </div>
                    </div>
                    <div ClassName="stepsBox">
                        <div ClassName="num"> 2 </div>
                        <div ClassName="steps">
                            <p ClassName="para">Order your delicious meal using our mobile app or website. Or you can even call us!</p>
                        </div>
                    </div>
                    <div ClassName="stepsBox">
                        <div ClassName="num"> 3 </div>
                        <div ClassName="steps">
                            <p ClassName="para">Enjoy your meal after less than 20 minutes. See you the next time!</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Step
