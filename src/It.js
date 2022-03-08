import React, { Component } from 'react'
import it_img from './Untitled-1-min.jpg'
export default class app extends Component {
    render() {
        return (
            <div>
                <div className='background mt-5' style={{backgroundColor: '#fff'}}>
                    <div className = 'container'>
                        <div className='it-content'>
                            <div className='it-text'>
                                <h1 className='fw-bold text-info'>IT solutions</h1>
                                <p className='mt-4 fs-5'>We collaborate with you to<br /> create new value through digital<br /> transformation. We have hundreds<br /> of specialists at your service.</p>
                                <button className='btn btn-info mt-4'>Learn more</button>
                            </div>

                            <div className='it-img'>
                                <img src={it_img} width = '750px' alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
