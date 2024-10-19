import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Logo from './pictures/logo.png'

const Header = () => {
  // return (
  //   <header>
  //     <nav className="navbar">
  //       <div className="logo">Me Jr.</div>
  //       <ul className="nav-links">
  //         <li><a href="#">Features</a></li>
  //         <li><a href="#">Pricing</a></li>
  //         <li><Link to="/about-team">About the Team</Link></li>
  //         <li><a href="#">Support</a></li>
  //         <li><Link to="/blog">Blog</Link></li>
  //       </ul>
  //     </nav>
  //   </header>
  // );

  return (
    <header className='website-header'>
      <div className='logo'>
        <img src={Logo} alt="Company Logo" className="logo-img" /> <span>Me Jr.</span>
      </div>
      <div>
        <ul className="nav-links">
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><Link to="/about-team">About the Team</Link></li>
          <li><a href="#">Support</a></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </div>
    </header>
  );
}

const Motto = () => {
  return (
    <section className="motto-section">
      <h1 className="motto-h">Bringing the future to pharma</h1>
      <p className="motto-p">Aspiring to increase the length and quality of human life.</p>
    </section>
  );
}

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p>Me Jr. automates the generation of the PSUR from start to finish. You just have to review and submit!</p>
      </div>
    </section>
  );
}

const About = () => {
  return (
    <section className="about">
      <h2>About the Product</h2>
      <div className="about-cards">
        <div className="card">
          <h3>Why we are doing this</h3>
          <p>We want to help pharmaceutical companies help people better, faster, and cheaper.</p>
        </div>
        <div className="card">
          <h3>Why we are unique</h3>
          <p>Our determination is unmatched, our technology is cutting edge, and we will work day and night to produce products our clients love.</p>
        </div>
        <div className="card">
          <h3>Who our clients are</h3>
          <p>Information about existing clients.</p>
        </div>
      </div>
    </section>
  );
}

const SoftwareDetails = () => {
  return (
    <section className="software-details">
      <h2>Software Details</h2>
      <div className="process-flow">
        <div className="step">User submits data</div>
        <div className="step">We take over</div>
        <div className="step">Define the basics</div>
        <div className="step">Automate cross-review</div>
        <div className="step">Submit</div>
      </div>
    </section>
  );
}

const Footer = () => {
  return (
    <footer className='footer'>
      <p>© 2024 Me Jr. All rights reserved.</p>
    </footer>
  );
}

function Home() {
  return (
    <div className="Home">
      <Header />
      <Motto />
      <Hero />
      <About />
      <SoftwareDetails />
      <Footer />
    </div>
  );
}

export default Home;
