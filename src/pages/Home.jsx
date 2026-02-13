import { Link } from 'react-router-dom';
import '../App.css';
import './Home.css'; 
import backgroundImg from '../assets/bg.jpg';
import profileImg from '../assets/picture.jpg';
import fyloImg from '../assets/fylo-page.png';
import newshomepageImg from '../assets/news-homepage.png';
import travelplannerImg from '../assets/travelplanner.png';

function Home() {
  return (
    <div className='portfolio-wrapper'>
      
      {/* Hero section */}
      <section 
        className='hero-full' 
        style={{ 
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(${backgroundImg})` 
        }}
      >
        <nav className='mini-nav'>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About Me</Link>
        </nav>

        <div className='hero-content'>
          <span className='badge'>Frontend Developer</span>
          <h1 className='big-title'>Design <br /> & Code</h1>
          
          <div className='profile-box'>
            <div className='image-container'>
              <img src={profileImg} alt="Morten profil" className='profile-image' />
            </div>
            <div className='text-content'>
              <p className='greeting'>Hey. I'M Morten</p>
              <p className='bio-short'>I'm learning React and love working with modern CSS</p>
              <p className='hero-subtitle'>Morten / Norge</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills section */}
      <section className='skills-section'>
      <div className='skills-container'>
        <div></div>
        <div className='skill-badge'><i className='fab fa-html5'></i> HTML5</div>
        <div className='skill-badge'><i className='fab fa-css3-alt'></i> CSS3</div>
        <div className='skill-badge'><i className='fab fa-js'></i> JavaScript</div>
        <div className='skill-badge'><i className='fab fa-react'></i> REACT</div>
        <div className='skill-badge'><i className='fab fa-figma'></i> FIGMA</div>
        </div>
        </section>

      {/* Project cards section */}
      <div className='home-container' id="projects">
        <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>My Projects</h2>
          <p style={{ opacity: 0.7 }}>Junior Developer building projects with React and CSS Grid</p>
        </header>

        <div className='home-project-grid'>
          
          {/* First project card */}
          <div className='home-project-card'>
            <div className='home-image-wrapper'>
              <img src={fyloImg} alt="fylo project" className='home-preview' />
            </div>
            <div className='home-project-info'>
              <h3>Fylo Landing Page</h3>
              <p>A dark-themed landing page featuring email validation built with JavaScript</p>
              <button className='btn'>View Code</button>
            </div>
          </div>

          {/* Second project card */}
          <div className='home-project-card'>
            <div className='home-image-wrapper'>
              <img src={newshomepageImg} alt="news project" className='home-preview' />
            </div>
            <div className='home-project-info'>
              <h3>News Homepage</h3>
              <p>A fully responsive news homepage utilizing CSS Grid and Flexbox layouts</p>
              <button className='btn'>View Code</button>
            </div>
          </div>

          {/* Third project card */}
          <div className='home-project-card'>
            <div className='home-image-wrapper'>
              <img src={travelplannerImg} alt="travel project" className='home-preview' />
            </div>
            <div className='home-project-info'>
              <h3>User data assignment</h3>
              <p>A Travel Planner application focused on managing and displaying user data</p>
              <button className='btn'>View Code</button>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem', paddingBottom: '4rem'}}>
          <Link to="/projects" className='btn'>See All 10+ Projects</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;