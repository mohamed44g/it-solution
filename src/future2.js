import React, { Component } from 'react'
import future_img from './fff.jpg'
import G from './5g.svg'
import ai from './ai.svg'
import dev from './solution.svg'

export default class app extends Component {
    render() {
        return (
            <div>
                <div className = 'background'>
                    <div className='container'>
                        <div className='future2-content'>
                            <div className='future2-img'>
                                <img src={future_img} width = '600px' height='600px'/>
                            </div>

                            <div className='future2-cards'>
                                <div className='card'>
                                    <img src = {ai} height = '60px'/>
                                    <p className='mt-3' style={{color: '#333', letterSpacing : '2px'}}>5G NETWORK</p>
                                </div>

                                <div className='card'>
                                    <img src = {G} height = '60px'/>
                                    <p className='mt-3' style={{color: '#333', letterSpacing : '2px'}}>5G NETWORK</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
