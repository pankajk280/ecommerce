import React from 'react';
import './Accountpage.css';
import pic from '../../Images/image1.png'

const Accountpage = () =>{
    return(
    <div className="account-page">
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <img src={pic} />
                </div>
                <div className="col-2">
                    <div className="form-container">
                        <div className="form-btn">
                            <span onclick="login()">Login</span>
                            <span onclick="register()">Register</span>
                            <hr id="indicator" />
                        </div>
                        <div action="" id="loginForm">
                            <input type="text" placeholder="Username" />
                            <input type="password" placeholder="Password" />
                            <button type="submit" className="btn">Login</button>
                            <a href="">Forgot password</a>
                        </div>
                        <div action="" id="regForm">
                            <input type="text" placeholder="Username" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button type="submit" className="btn">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Accountpage;