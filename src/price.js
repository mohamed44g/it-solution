import React, { Component } from 'react'

export default class app extends Component {
  render() {
    return (
      <div>
          <div className='background mt-5' style={{backgroundColor: '#fff'}}>
                <div className = 'container'>
                    <div className='price-cards'>
                        <div className='price-card'>
                            <p className='text-center text-muted mt-2'>Basic</p>
                            <h2  style={{color: '#3b065e'}} className='text-center mt-2'>10$<sub className='text-muted' style={{fontSize: '11px'}}>/month</sub></h2>
                            <hr />
                            <div className='price-future'>
                                <ul>
                                    <li><span><i class="fa fa-check"></i></span>  Single User</li>
                                    <li><span><i class="fa fa-check"></i></span>  Unlimited Public Projects</li>
                                    <li><span><i class="fa fa-check"></i></span>  Community Access</li>
                                    <li><span><i class="fa fa-check"></i></span>  20GB Storage</li>
                                    <li className='text-muted'><span><i class="fas fa-times"></i>  Unlimited Private Projects</span> </li>
                                    <li className='text-muted'><span><i class="fas fa-times"></i></span> Dedicated Phone Support</li>
                                    <li className='text-muted'><span><i class="fas fa-times"></i></span> Monthly Status Reports</li>
                                    <li className='text-muted'><span><i class="fas fa-times"></i></span> 24/7 Support System</li>
                                    <li><button className='price-btn mt-5 p-2'>Buy</button></li>
                                </ul>    
                            </div>

                        </div>

                        <div className='price-card'>
                            <p className='text-center text-muted mt-2'>Plus</p>
                            <h2  style={{color: '#3b065e'}} className='text-center mt-2'>20$<sub className='text-muted' style={{fontSize: '11px'}}>/month</sub></h2>
                            <hr />
                            <div className='price-future'>
                                <ul>
                                    <li><span><i class="fa fa-check"></i></span>  5 Users</li>
                                    <li><span><i class="fa fa-check"></i></span>  Unlimited Public Projects</li>
                                    <li><span><i class="fa fa-check"></i></span>  Community Access</li>
                                    <li><span><i class="fa fa-check"></i></span>  100GB Storage</li>
                                    <li><span><i class="fa fa-check"></i>  Unlimited Private Projects</span> </li>
                                    <li><span><i class="fa fa-check"></i></span> Dedicated Phone Support</li>
                                    <li><span><i class="fa fa-check"></i></span> Monthly Status Reports</li>
                                    <li className='text-muted'><span><i class="fas fa-times"></i></span> 24/7 Support System</li>
                                    <li><button className='price-btn mt-5 p-2'>Buy</button></li>
                                </ul>    
                            </div>

                        </div>


                        <div className='price-card'>
                            <p className='text-center text-muted mt-2'>Pro</p>
                            <h2  style={{color: '#3b065e'}} className='text-center mt-2'>30$<sub className='text-muted' style={{fontSize: '11px'}}>/month</sub></h2>
                            <hr />
                            <div className='price-future mb-5'>
                                <ul>
                                    <li><span><i class="fa fa-check"></i></span>  Unlimited Users</li>
                                    <li><span><i class="fa fa-check"></i></span>  Unlimited Public Projects</li>
                                    <li><span><i class="fa fa-check"></i></span>  Community Access</li>
                                    <li><span><i class="fa fa-check"></i></span>  200GB Storage</li>
                                    <li><span><i class="fa fa-check"></i>  Unlimited Private Projects</span> </li>
                                    <li><span><i class="fa fa-check"></i></span> Dedicated Phone Support</li>
                                    <li><span><i class="fa fa-check"></i></span> Monthly Status Reports</li>
                                    <li><span><i class="fa fa-check"></i></span> 24/7 Support System</li>
                                    <li><button className='price-btn mt-5 p-2'>Buy</button></li>
                                </ul>    
                            </div>

                        </div>
    
                    </div>
                </div>
          </div>
      </div>
    )
  }
}
