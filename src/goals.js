import React, { Component } from 'react'
import goals_img from './ssssss.jpg'
export default class app extends Component {
    render() {
        return (
            <div>
                <div className='goals-bg mt-5'>

                    <div className = 'container'>
                        <div className='goal-content'>
                            <div>
                                <h1>Data Visualization</h1>
                                <img src= {goals_img} width = '710px'/>
                            </div>
                            

                        
                            <div className='goal-text'>
                                <div >
                                    <h3>01. GOALS</h3>
                                    <p>Sample text. Click to select the <br />text box. Click again or double <br />click to start editing the text.</p>
                                    <a href='#'>More</a>
                                    <br /> <br /> <br />
                                </div>
                                <div>
                                    <h3>02. STRATEGY</h3>
                                    <p>Sample text. Click to select the <br />text box. Click again or double <br />click to start editing the text.</p>
                                    <a href='#'>More</a>
                                </div>

                                </div>
                            
                        </div>
                        </div>
                    </div>
            </div>
        )
    }
}
