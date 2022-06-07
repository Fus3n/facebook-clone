import React from 'react'

import "./login.scss"

import facebookLogo from "../../imgs/logos/facebook-logo.svg";

const Login = () => {
  return (
    <div className="login">
        <div className="login-container">
            <div className="login-header">
                <img src={facebookLogo} alt="facebook logo" />
                <h2>Facebook helps you connect and share with the people in your life.</h2>
            </div>

            <div className="login-fields">
                <div className="login-box">
                    <input type="text" placeholder='Email address or phone number'/>
                    <input type="password" placeholder='Password'/>
                    <button className="btn-login">Log In</button>
                    <p className='txt-forgot-pass'>Forgotten password?</p>
                    <div className="login-seperator"></div>

                    <button className="btn-create-acc">Create New Account</button>
                </div>

                <p><strong>Create a Page</strong> for a celebrity, brand or business.</p>

            </div>
        </div>

        <div className="login-footer">
            <div className="login-footer-langs">
                <ul className="footer-list">
                    <li><a href="#">English (UK)</a></li>
                    <li><a href="#">বাংলা</a></li>
                    <li><a href="#">অসমীয়া</a></li>
                    <li><a href="#">हिन्दी</a></li>
                    <li><a href="#">العربية</a></li>
                    <li><a href="#">中文(简体)</a></li>
                    <li><a href="#">Bahasa Melayu</a></li>
                    <li><a href="#">Español</a></li>
                    <li><a href="#">Português (Brasil)</a></li>
                    <li><button className="add-lang">+</button></li>    
                </ul>
            </div>
            <div className="login-seperator"></div>
            
            <div className="login-footer-links">
                <ul className="footer-list">
                    <li><a href="#">Sign Up</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Messenger</a></li>
                    <li><a href="#">Facebook Lite</a></li>
                    <li><a href="#">Watch</a></li>
                    <li><a href="#">Places</a></li>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Marketplace</a></li>
                    <li><a href="#">Sign Up</a></li>
                    <li><a href="#">Facebook Pay</a></li>
                    <li><a href="#">Oculus</a></li>
                    <li><a href="#">Portal</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">BulletinLocal</a></li>
                </ul>
                <ul className="footer-list">
                    <li><a href="#">Fundraisers</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Voting Information Centre</a></li>
                    <li><a href="#">BulletinLocal</a></li>
                </ul>
            </div>
            

            <p className="footer-copyright">Meta © 2022</p>
        </div>
    </div>
  )
}

export default Login