import React from 'react'
import Organic from "../images/organic-food-logo.jpg"
import Minutes from "../images/30-minutes-free-home.avif"
import Days from "../images/365Days.jpg"
const Features = () => {
    return (
        <div className='features container'>
            <div className='d-flex align-content-center justify-content-center'>
                <h1>AWESOME FEATURE</h1>
            </div>
            <hr/>
            <div class="card-group m-2">
                <div class="card m-4">
                    <img src={Days} class="card-img-top" alt="365 days"/>
                        <div class="card-body p-5">
                            <h5 class="card-title">365 DAYS/YEAR</h5>
                            <p class="card-text">
                                Never cook again! We really mean that. Our subscription plans include up to 365 days/year of coverage and you can also choose to order more flexibly if that is your style.
                            </p>
                        </div>
                </div>
                <div class="card m-4">
                    <img src={Minutes} class="card-img-top" alt=" 30 minutes free delivery"/>
                        <div class="card-body p-5">
                            <h5 class="card-title">
                                30 MINUTES OR FREE
                            </h5>
                            <p class="card-text">
                                You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.
                            </p>
                        </div>
                </div>
                <div class="card m-4">
                    <img src={Organic} class="card-img-top" alt="organic food logo"/>
                        <div class="card-body p-5">
                            <h5 class="card-title">100% ORGANIC</h5>
                            <p class="card-text">
                                All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!
                            </p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Features
