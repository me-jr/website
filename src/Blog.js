import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Logo from './pictures/logo.png'

const Header = () => {
    return (
        <header className='website-header'>
        <div className='logo'>
            <img src={Logo} alt="Company Logo" className="logo-img" /> <span>Me Jr.</span>
        </div>
        <div>
            <ul className="nav-links">
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><Link to="/">Home</Link></li>
                <li><a href="#">Support</a></li>
                <li><Link to="/about-team">About the Team</Link></li>
            </ul>
        </div>
        </header>
    );
}

const Footer = () => {
    return (
      <footer className='footer'>
        <p>© 2024 Me Jr. All rights reserved.</p>
      </footer>
    );
}


const BlogHome = () => {
    return (
        <div>
            <h1>Welcome to the Me Jr.'s Blog!</h1>
            <p>Here we will feature some blogs.</p>
        </div>
    );
}

const BlogSpace = () => {
  return (
    <div className="Blog">
        <Header />
        <BlogHome />
        <Footer />
    </div>
  );
};

export default BlogSpace;