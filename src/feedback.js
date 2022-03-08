import React, { Component } from 'react'

export default class app extends Component {
    render() {
        return (
            <div className='feeds'>
                <div className='feed-background' >
                    <div className='container'>
                        <div className='feed-title'>
                            <div className='text-center'>
                                <h1 className='text-light'>What They Say About Us</h1>
                                <p  className='text-light mt-3'>Explore and learn more about everything from machine learning and global payments to<br /> scaling your team.</p>
                            </div>
                        </div>

                        <div className='feed-cards'>
                            <div className='feed-card'>
                                <div className='feed-content'>
                                    <div className='user'>
                                        <img src='https://demo.graygrids.com/themes/hostgrids/assets/images/testimonial/testi1.jpg' height= '70px' width= '70px'/>
                                        <h6 className='text-secondary'>Jane Anderson</h6>
                                        <p className='deg text-secondary'>Founder & CEO</p>
                                    </div>

                                    <div className='feed-text text-muted mt-4'>
                                    "It’s amazing how much easier it has been to meet new people and create instant connections. I have the exact same personality."
                                    </div>
                                </div>
                            </div>

                            <div className='feed-card'>
                                <div className='feed-content'>
                                    <div className='user'>
                                        <img src='https://demo.graygrids.com/themes/hostgrids/assets/images/testimonial/testi2.jpg' height= '70px' width= '70px'/>
                                        <h6 className='text-secondary'>Devid Samuyel</h6>
                                        <p className='deg text-secondary'>Web developer</p>
                                    </div>

                                    <div className='feed-text text-muted mt-4'>
                                    "It’s amazing how much easier it has been to meet new people and create instant connections. I have the exact same personality."
                                    </div>
                                </div>
                            </div>

                            <div className='feed-card'>
                                <div className='feed-content'>
                                    <div className='user'>
                                        <img src='https://demo.graygrids.com/themes/hostgrids/assets/images/testimonial/testi3.jpg' height= '70px' width= '70px'/>
                                        <h6 className='text-secondary'>Jully Sulli</h6>
                                        <p className='deg3 text-secondary'>Ui/Ux Designer</p>
                                    </div>

                                    <div className='feed-text text-muted mt-4'>
                                    "It’s amazing how much easier it has been to meet new people and create instant connections. I have the exact same personality."
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
