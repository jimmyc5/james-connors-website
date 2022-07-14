import './App.css';
import { useState } from "react";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";

function App() {
  const [currentTab, setCurrentTab] = useState("about");

    function renderTab(){
        switch(currentTab){
            case "about":
                return <About/>
            case "experience":
                return <Experience/>
            case "skills":
                return <Skills/>
            case "projects":
                return <Projects/>
            case "contact":
                return <Contact/>
            default:
                return <About/>
        }
    }

    return (
        <div>
            <div className='d-flex flex-wrap justify-content-center header col-12'>
                <p className="text-center h1 mt-4 col-12">James Connors</p>
                <div onChange={(e) => setCurrentTab(e.target.value)} className="d-flex justify-content-center">
                    <input type="radio" value="about" name="tab" id="aboutTab" className="navButton d-none" defaultChecked/>
                    <label for="aboutTab" className="navLabel">About</label>
                    <input type="radio" value="experience" name="tab" id="experienceTab" className="navButton d-none"/>
                    <label for="experienceTab">Experience </label>
                    <input type="radio" value="skills" name="tab" id="skillsTab" className="navButton d-none"/>
                    <label for="skillsTab">Skills </label>
                    <input type="radio" value="projects" name="tab" id="projectsTab" className="navButton d-none"/>
                    <label for="projectsTab">Projects </label>
                    <input type="radio" value="contact" name="tab" id="contactTab" className="navButton d-none"/>
                    <label for="contactTab">Contact </label>
                </div>
            </div>
            {renderTab()}
        </div>
    );
}

export default App;