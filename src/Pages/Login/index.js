import React, { useState } from 'react';
import './index.scss';

const SOCMED = {
  facebook: '/icons/facebook-login.png',
  twitter: '/icons/twitter-login.png',
  google: '/icons/google-login.png'
};

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className='page-wrapper'>
      <div className='login-wrapper'>
        {
          isLogin ?
            <div className='login-card'>
              <img src="/icons/login.png" alt="login" />
              <h3>Welcome!</h3>
              <p>Sign in to your account</p>
              <form action="">
                <label htmlFor="name">Name</label>
                <input type="text" name='name' id='name' />
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id='password' />
                <div className="login-options">
                  <div className='login-remember'>
                    <input type="checkbox" name='remember' id='remember' />
                    <label htmlFor="remember">remember me?</label>
                  </div>
                  <p>Forgot your password?</p>
                </div>
                <input className='submit' type="submit" value="Login" />
              </form>
              <p>Don't have an account? <span onClick={() => setIsLogin(!isLogin)}>Register here</span></p>
            </div>
          :
            <div className='login-card'>
              <img src="/icons/register.png" alt="register" />
              <h3>Create Account!</h3>
              <p>Already have an account? <span onClick={() => setIsLogin(!isLogin)}>Login</span></p>
              <form action="">
                <label htmlFor="name">Name</label>
                <input type="text" name='name' id='name' />
                <label htmlFor="email">E-mail</label>
                <input type="email" name='email' id='email' />
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id='password' value='' />
                <input className='submit' type="submit" value="Create Account" />
              </form>
              <p>Or create account using social media!</p>
              <div className="icon-login-wrapper">
                <img src={SOCMED.facebook} alt="facebook" />
                <img src={SOCMED.twitter} alt="twitter" />
                <img src={SOCMED.google} alt="google" />
              </div>
            </div>
        }
      </div>
    </div>
  );
}