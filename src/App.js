import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './images/logo.png';

const Navigation = ({ isSticky }) => (
  <nav className={`main-nav ${isSticky ? 'sticky' : ''}`} style={{
    position: isSticky ? 'fixed' : 'static',
    top: 0,
    left: 0,
    right: 0,
    padding: '10px 20px',
    backgroundColor: isSticky ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
    boxShadow: isSticky ? '0 2px 4px rgba(0,0,0,.1)' : 'none',
    transition: 'all 0.3s ease-in-out',
    zIndex: 1000,
  }}>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'center' }}>
      <li style={{ margin: '0 10px' }}><a href="#portfolio" className="nav-button">Projects</a></li>
      <li style={{ margin: '0 10px' }}><a href="#about" className="nav-button">About</a></li>
      <li style={{ margin: '0 10px' }}><a href="#contact" className="nav-button">Contact</a></li>
    </ul>
  </nav>
);

const Home = ({ isSticky }) => (
  <div className="Home">
    <div className="hero" style={{ padding: '40px 20px', position: 'relative' }}>
      <div className="hero-content" style={{ 
        display: 'flex', 
        maxWidth: '1200px', 
        margin: '0 auto',
        alignItems: 'stretch'
      }}>
        <div className="hero-text" style={{ 
          flex: '1', 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <h1>Reporting, Analytics, Data Visualization, Digital Marketing, User Acquisition, and Automation</h1>
          <p>Transforming complex data into actionable insights and intelligent systems.</p>
          {!isSticky && <Navigation isSticky={false} />}
        </div>
        <div className="hero-logo" style={{ 
          flex: '1', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          padding: '20px' 
        }}>
          <img src={logo} alt="DG Logo" style={{ 
            maxWidth: '100%', 
            maxHeight: '100%', 
            objectFit: 'contain' 
          }} />
        </div>
      </div>
    </div>
  </div>
);

const Portfolio = () => (
  <div id="portfolio" className="Portfolio" style={{ padding: '80px 20px' }}>
    <h2>Projects</h2>
    <div className="project-grid">
      {[...Array(12)].map((_, index) => (
        <div key={index} className="project-card">
          <img src={`/placeholder-image-${index + 1}.jpg`} alt={`Project ${index + 1}`} />
          <h3>Project {index + 1}</h3>
          <p>Brief summary of project {index + 1}. This is a placeholder for the actual project description.</p>
        </div>
      ))}
    </div>
  </div>
);

const About = () => (
  <div id="about" className="About" style={{ padding: '80px 20px', backgroundColor: '#f5f5f5' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h2>About Daniel</h2>
      <p>With over a decade of experience in performance reporting, analytics, and digital marketing, I've helped companies across various industries leverage data-driven strategies to optimize performance and drive innovation.</p>
      <h3>Skills</h3>
      <ul>
        <li>Reporting and Analytics</li>
        <li>Data Visualization (Power BI, Tableau, Tibco Spotfire)</li>
        <li>Marketing Strategy and Optimization</li>
        <li>Team Leadership and Project Management</li>
        <li>SQL, Python, JavaScript, HTML</li>
      </ul>
      <h3>Professional Interests</h3>
      <ul>
        <li>Statistics</li>
        <li>Data Science</li>
        <li>Machine Learning</li>
        <li>Generative AI</li>
      </ul>
    </div>
  </div>
);

const Contact = () => (
  <div id="contact" className="Contact" style={{ padding: '80px 20px' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h2>Get in Touch</h2>
      <p>I'm always open to discussing new projects and opportunities.</p>
      <p>Email: Dan@Dan.com</p>
      <p>LinkedIn: linkedin.com/in/djdgreen</p>
      <p>GitHub: github.com/thunderhugs</p>
    </div>
  </div>
);

function App() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsSticky(window.scrollY > heroBottom - 100); // Start transition slightly before reaching the bottom of hero
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      {isSticky && <Navigation isSticky={true} />}
      <main>
        <Home isSticky={isSticky} />
        <Portfolio />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;