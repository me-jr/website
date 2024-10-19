import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import evren from './pictures/evrencat.jpg';
import rian from './pictures/riancat.webp';
import bhavya from './pictures/bhavyacat.jpg';
import raghav from './pictures/raghavcat.jpg';
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
                <li><Link to="/blog">Blog</Link></li>
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

const AboutTeam = () => {
    return (
        <div className="team-overview">
            <Link to="/about-team/Evren" className='team-link'>
            <div className="team-container">
                <div className="team-member">
                    <div className="team-title">
                        <h2>Evren Yucekus-Kissane</h2>
                    </div>

                    <div className="team-bottom">
                        <div className="team-image">
                            <img src={evren} alt="Evren Yucekus-Kissane" />
                        </div>
                        <div className="team-info">
                            <h3>At a Glance</h3>
                            <p><strong>Hometown:</strong> Maryland</p>
                            <p><strong>Education:</strong> UMD, B.S. in Computer Science</p>
                            <p><strong>Life Now:</strong> College Park, MD; 5 roommates and 4 siblings!</p>
                            <p><strong>Interests:</strong> Play catch</p>
                        </div>
                    </div>
                </div>
            </div>
            </Link>

            <Link to="/about-team/Rian" className='team-link'>
            <div className="team-container">
                <div className="team-member">
                    <div className="team-title">
                        <h2>Rian Tiwari</h2>
                    </div>

                    <div className="team-bottom">
                        <div className="team-image">
                            <img src={rian} alt="Rian Tiwari" />
                        </div>
                        <div className="team-info">
                            <h3>At a Glance</h3>
                            <p><strong>Hometown:</strong> Maryland</p>
                            <p><strong>Education:</strong> UMD, B.S. in Computer Science</p>
                            <p><strong>Life Now:</strong> College Park, MD; ??</p>
                            <p><strong>Interests:</strong> ??</p>
                        </div>
                    </div>
                </div>
            </div>
            </Link>

            <Link to="/about-team/Bhavya" className='team-link'>
            <div className="team-container">
                <div className="team-member">
                    <div className="team-title">
                        <h2>Bhavya Rajasekaran</h2>
                    </div>

                    <div className="team-bottom">
                        <div className="team-image">
                            <img src={bhavya} alt="Bhavya Rajasekaran" />
                        </div>
                        <div className="team-info">
                            <h3>At a Glance</h3>
                            <p><strong>Hometown:</strong> Maryland</p>
                            <p><strong>Education:</strong> UMD, B.S. in Computer Science + Applied Math</p>
                            <p><strong>Life Now:</strong> College Park, MD; ??</p>
                            <p><strong>Interests:</strong> ??</p>
                        </div>
                    </div>
                </div>
            </div>
            </Link>

            <Link to="/about-team/Raghav" className='team-link'>
            <div className="team-container">
                <div className="team-member">
                    <div className="team-title">
                        <h2>Raghav Senthilkumar</h2>
                    </div>

                    <div className="team-bottom">
                    <div className="team-image">
                        <img src={raghav} alt="Raghav Senthilkumar" />
                    </div>
                    <div className="team-info">
                        <h3>At a Glance</h3>
                        <p><strong>Hometown:</strong> Maryland</p>
                        <p><strong>Education:</strong> UMD, B.S. in Computer Science</p>
                        <p><strong>Life Now:</strong> College Park, MD; ??</p>
                        <p><strong>Interests:</strong> ??</p>
                    </div>
                    </div>
                </div>
            </div>
            </Link>
            
        </div>
    );
};

function Team() {
    return (
      <div className="Team">
        <Header />
        <AboutTeam />
        <Footer />
      </div>
    );
  }

export default Team;