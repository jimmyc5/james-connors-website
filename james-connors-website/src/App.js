import './App.css';
import { useRef, useState } from "react";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Experience from "./Sections/Experience";
import Projects from "./Sections/Projects";
import Footer from './Components/Footer';
import Resume from './StaticFiles/JamesConnorsResume.pdf';

function App() {

    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const executeScroll = (ref) => {
        ref.current.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <div className='baseStyle'>
            <div className=''>
                <div className='phantomHeader' />
                <div className='d-flex flex-wrap justify-content-between p-1 pe-4 header col-12 heder'>
                    <p className="text-center h1 m-1 darkBlueText"></p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button onClick={() => executeScroll(aboutRef)} className='navButton'>About</button>
                        <button onClick={() => executeScroll(experienceRef)} className='navButton'>Experience</button>
                        <button onClick={() => executeScroll(projectsRef)} className='navButton'>Projects</button>
                        <button onClick={() => executeScroll(contactRef)} className='navButton'>Contact</button>
                        <a href={Resume} className="resumeLink">Resume</a>
                    </div>
                </div>
                <div ref={aboutRef} style={{paddingTop: 60}}>
                    <About/>
                </div>
                <div ref={experienceRef} style={{paddingTop: 60}}>
                    <Experience/>
                </div>
                <div ref={projectsRef} style={{paddingTop: 60}}>
                    <Projects/>
                </div>
                <div ref={contactRef} style={{paddingTop: 60}}>
                    <Contact/>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
