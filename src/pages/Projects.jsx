
import { Link } from 'react-router-dom';
import "./Projects.css";
import fyloImg from '../assets/fylo-page.png';
import newsImg from '../assets/news-homepage.png';
import travelImg from '../assets/travelplanner.png';
import bentoImg from '../assets/bento-grid.png';
import signupImg from '../assets/intro-component-signupform.png';
import nftImg from '../assets/nft-card.png';
import recipeImg from '../assets/recipe-page.png';
import resultImg from '../assets/result-summarycomponent.png';
import pricingImg from '../assets/pricing-grid-img.png';
import drumkitImg from '../assets/drumkit-img.png';
import timetrackerImg from '../assets/time-tracker.png'
import calculatorImg from '../assets/morten-calculator.png'


/* Project cards */
const allProjects = [
    {
        id: 1,
        title: "Fylo Landing Page",
        desc: "A dark-themed landing page with JS validation",
        img: fyloImg,
        codeUrl: "https://github.com/Mort1-kode/Fylo-dark-theme-landing-page#",
        demoUrl: "https://fylo-dark-theme-mort1.netlify.app/"
    },

     {
        id: 2,
        title: "News Homepage",
        desc: "A responsive news homepage with a clean layout",
        img: newsImg,
        codeUrl: "https://github.com/Mort1-kode/News-homepage",
        demoUrl: "https://news-homepage-mort1.netlify.app/"
    },

     {
        id: 3,
        title: "User data assignment",
        desc: "A Travel Planner application focused on managing and displaying user data",
        img: travelImg,
        codeUrl: "https://github.com/Mort1-kode/user-data-assignment",
        demoUrl: "https://travel-planner-mort1.netlify.app/"
    },

     {
        id: 4,
        title: "Bento Grid",
        desc: "A modern bento-style layout designed with CSS Grid, featuring complex card spans and responsive data visualization components",
        img: bentoImg,
        codeUrl: "https://github.com/Mort1-kode/frontend-mentor-bento-grid",
        demoUrl: "https://bento-grid-mort1.netlify.app/"
    },

     {
        id: 5,
        title: "Intro Component with Signup Form",
        desc: "A clean, responsive sign-up form with real-time client-side validation using JavaScript",
        img: signupImg,
        codeUrl: "https://github.com/Mort1-kode/Intro-component-with-sign-up-form",
        demoUrl: "https://component-with-sign-up-form-mort1.netlify.app/"
    },

     {
        id: 6,
        title: "NFT Preview Card",
        desc: "A stylish NFT preview card component with custom hover states and professional layout structure",
        img: nftImg,
        codeUrl: "https://github.com/Mort1-kode/NFT-preview-card-component",
        demoUrl: "https://nft-preview-card-mort1.netlify.app/"
    },

     {
        id: 7,
        title: "Simple Omelette Recipe",
        desc: "A clean and accessible recipe page focusing on semantic HTML structure and elegant typography",
        img: recipeImg,
        codeUrl: "https://github.com/Mort1-kode/Recipe-page",
        demoUrl: "https://recipe-page-mort1.netlify.app/"
    },

     {
        id: 8,
        title: "Results Summary Component",
        desc: "An interactive-style results summary component with vibrant gradients and dynamic score categories",
        img: resultImg,
        codeUrl: "https://github.com/Mort1-kode/frontend-mentor-Results-summary-component",
        demoUrl: "https://results-summary-component-mort1.netlify.app/"
    },

     {
        id: 9,
        title: "Single Price Grid Component",
        desc: "A classic subscription pricing card built with CSS Grid, featuring a clean three-section layout and responsive call-to-action elements",
        img: pricingImg,
        codeUrl: "https://github.com/Mort1-kode/Single-price-grid-component",
        demoUrl: "https://single-price-grid-component-mort1.netlify.app/"
    },

    {
        id: 10,
        title: "Virtual Drumkit",
        desc: "An interactive web-based drum kit featuring keyboard event listeners and high-quality audio playback for a dynamic user experience",
        img: drumkitImg,
        codeUrl: "https://github.com/Mort1-kode/drumkit-assignment-Morten",
        demoUrl: "https://drumkit-assignment-mort1.netlify.app/"
    },

    {
        id: 11,
        title: "Time Tracker",
        desc: "An interactive web-based drum kit featuring keyboard event listeners and high-quality audio playback for a dynamic user experience",
        img: timetrackerImg,
        codeUrl: "https://github.com/Mort1-kode/Time_Tracker-Morten",
        demoUrl: "https://time-tracker-mort1.netlify.app/"
    },

    {
        id: 12,
        title: "Calculator",
        desc: "Calculator built with React and Vite, featuring a responsive grid layout, advanced error handling for edge cases, and a custom-styled interface optimized for all devices",
        img: calculatorImg,
        codeUrl: "https://github.com/Mort1-kode/Calculator",
        demoUrl: "https://mort1-calculator.netlify.app/"
    }

    
];

function Projects() {
    return (
        <div className="projects-container">
            <div className='back-home-wrapper'>
                <Link to="/" className="btn btn-outline">Back to Home</Link>
            </div>

            <h2 className="gallery-title">
                Complete Project Gallery
            </h2>

            <div className="project-grid">
                {allProjects.map((project) => (
                <div key={project.id} className="project-card">
                    <div className="project-image-wrapper">
                        <img src={project.img} alt={project.title} className="project-preview" />
                    </div>
                    <div className="project-info">
                        <h3>{project.title}</h3>
                        <p>{project.desc}</p>
                        <div className="project-button-group">
                           <a href={project.codeUrl} className="btn">Code</a>
                           <a href={project.demoUrl} className="btn btn-outline">Demo</a>
                        </div>
                    </div>
                </div>


                ))}
            </div>
        </div>
    )
}

export default Projects;