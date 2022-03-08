
import Future_img from './fffffff-min.jpg';
import develop_img from './e8cfeb49186337554586690983480864.svg';
import skills from './brief-case-1.svg';
import design from './icon-making-template-02-1.svg';
import res from './monitor-responsive-svgrepo-com.svg';
import React, { Component } from 'react';


export default class componentName extends Component {
    
    render() 
    {
        return (
            <div className = 'container'>
                <div className='future-text text-center mt-5'>
                    <h1 className='fw-bold'>Key Features</h1>
                    <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                </div>

                <div className = 'future mt-5' id='future'>
                    <div className = 'future-img text-center'>
                        <img src = {Future_img} height = '450px' width='540px' alt = ''/>
                    </div>

                        
                    <div className = ' cards'>
                        <div className='card' style={{backgroundColor: '#29b7dd'}}>
                            <span>
                            <img src = {develop_img} width = '60px' alt = ''/>
                            </span>
                            <p className='mt-2'>Development</p>
                        </div>

                        <div className='card' style={{backgroundColor: '#8b72ee'}}>
                            <span>
                            <img src = {skills} width = '60px' alt = ''/>
                            </span>
                            <p className='mt-2'>Top Skills</p>
                        </div>

                        <div className='card ' style={{backgroundColor: '#5d3be7'}}>
                            <span>
                            <img style={{marginTop : '-7px'}} src = {design} width = '80px' alt = ''/>
                            </span>
                            <p style={{marginTop : '-7px'}}>Design</p>
                        </div>

                        <div className='card' style={{backgroundColor: '#bd72ef'}}>
                            <span>
                            <img src = {res} width = '60px' alt = ''/>
                            </span>
                            <p className='mt-2'>Responsive</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
