
import logo from './default-logo.png';
import home_image from './ffffff.jpg';
import React, { Component } from 'react';


export default class App extends Component {
  render() {
    return (
      <div>

        <div className='background'>

        <div className = 'container'>
            <nav>
                <div className='navbar'>

                    <div className='logo'>
                        <img src = {logo} alt = ''/>
                    </div>

                    <div>

                    </div>

                </div>
            </nav>

        <div className='home'>
          
            <div className = 'home-text'>
                <h2>Web Software <br />Developers</h2>
                <p className = 'text-muted text-wrap mt-3'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                <button className = 'btn btn-info mt-4'>Read more</button>
            </div>

            <div className='home-img'>
                <img src={home_image} width = '550px' alt = '#'/>
            </div>
        </div>

      </div>
    </div>
    </div>
    )
  }
}

