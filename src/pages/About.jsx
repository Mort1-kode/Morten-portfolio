import { Link } from "react-router-dom";
import "./About.css"

function About() {
    return (
        <div className="about-container">
            <div style={{ marginBottom: '2rem'}}>
                <Link to="/" className="btn btn-outline">Back to Home</Link>
            </div>
            <header className="about-header">
                <h1>About Me</h1>
                <p className="about-subtitle">
                    Frontend Developer | Dedicated Father | Football Enthusiast
                </p>
            </header>

            <section className="about-section">
                <h2>Who Am I</h2>
                <p>
                    I am an aspiring Frontend Developer currently in the early stages of my career. 
                    While I consider myself a beginner, I have a strong foundation built through hands-on practice, having completed 11 different web projects.
                </p>
                <p>
                    I`ve learned a lot on my own, but I am now eager to take the next step. 
                    I believe that I will learn much faster and more effectively by working within a professional development team than I can at home. 
                    My goal is to find an environment where I can contribute my current skills while being mentored by experienced developers, helping me grow into a professional frontend specialist.
                </p>
            </section>

            <section className="about-section">
                <h2>Life outside of Coding</h2>
                <p>
                    When I'm not behind the screen, I spend most of my time with my partner and our three children (aged 4, 9, and 13). 
                    Managing a busy household has taught me a lot about structure, patience, and multitasking.
                </p>
                <ul>
                    <li><strong>Football:</strong> I serve as the coach for my son's football team, a role that helps me on my leadership and communication skills</li>
                    <li><strong>Viking FK:</strong> I am a loyal supporter and a season ticket holder at Lyse Arena. One of my favorite traditions is bringing my son to the matches, sharing the excitement and supporting our local team together</li>
                    <li><strong>Gaming:</strong> In the evenings, you`ll often find me in <strong>CS2</strong>, where I enjoy the tactical challenges and fast-paced teamwork</li>
                    <li><strong>The Outdoors:</strong> I love to recharge by going fishing, hiking in the mountains, or traveling to new places</li>
                </ul>
            </section>

            <section className="about-section">
                <h2>Contact Information</h2>
                <p>
                    I am currently looking for new opportunities and would love to hear from you.
                    Whether you have a question or just want to discuss a potential internship, my inbox is always open!
                </p>
                <div className="contact-info">
                    <p><strong>Email</strong> <a href="mailto:mortenolsen1901@gmail.com" className="contact-link">mortenolsen1901@gmail.com</a></p>
                    <p><strong>Phone</strong> <a href="tel:+4740494907" className="contact-link">+4740494907</a></p>
                </div>
            </section>

        </div>
    )
     }


    export default About;