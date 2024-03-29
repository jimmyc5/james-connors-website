import { useState } from "react";
import ExperienceExample from "../Components/ExperienceExample";

export default function Experience(){

    const [currentTab, setCurrentTab] = useState("CapTech");

    function renderTab(){
        switch(currentTab){
            case "CapTech":
                return (
                    <ExperienceExample 
                        jobTitle="Systems Integration Intern" 
                        companyName="CapTech"
                        dateRange="May 2022 - August 2022"
                        detailsList={[
                            "Worked full time as a Software Integration Intern in CapTech's Elevate program.",
                            "Duties included the development of an airline website and other technological solutions for an in-company client. Worked in a team, and primarily handled frontend development, though also helped out some in the backend.",
                            " Tools used include React, Spring Boot, Java, JavaScript, HTML, and CSS as well as Git and GitLab for version control."
                        ]}/>
                );
            case "Northrop Grumman":
                return <ExperienceExample 
                        jobTitle="Software Engineer Intern" 
                        companyName="Northrop Grumman"
                        dateRange="May 2021 - August 2021"
                        detailsList={[
                            "Worked full time at Northrop Grumman as a Software Engineering Intern for Summer of 2021.",
                            "Primarily worked on web development, implementing various features using JavaScript, C#, and Angular.", 
                            "Joined a small team using SVN for version control. Performed and submitted code reviews using Collaborator."
                        ]}/>
            case "UVA TAing":
                return <ExperienceExample 
                    jobTitle="Teaching Assistant" 
                    companyName="University of Virginia"
                    dateRange="August 2021 - May 2022"
                    detailsList={[
                        "Worked part time as a Teaching Assistant for Professor Aaron Bloomfield",
                        "TA for the course CS 2150, Program and Data Representation, which teaches C++, assembly, data structures, and more.",
                        "Duties include holding labs, office hours, and answering student questions on the course."
                    ]}/>
            case "UVA Research":
                return <ExperienceExample 
                jobTitle="Research Assistant" 
                companyName="University of Virginia"
                dateRange="May 2020 - February 2022"
                detailsList={[
                    " Worked part time as a Research Assistant for Professor John R. Hott.",
                    " Tasks included the parsing, anonymization, visualization, and analysis of data utilizing Python and python packages like NumPy and Matplotlib, among other tools. Also collaborated on the resulting publication and presentation.",
                    ' Published and presented the resulting paper "How Do Students Collaborate? Analyzing Group Choice in a Collaborative Learning Environment" in the conference SIGCSE 2021.'
                ]}/>
            default:
                return <ExperienceExample />
        }
    }

    return (
        <div className="col-12 justify-content-center d-flex flex-wrap mt-5 mb-2">
            <div className="col-xl-8 col-lg-10 col-sm-10 col-12 d-flex justify-content-center flex-wrap p-3">
                <p className="lightBlueText h3 col-12 sectionTitle"> Work Experience </p>
                <div className="col-12 d-flex align-items-stretch justify-content-left " style={{minHeight: "20em"}}>
                    <div className="col-3 d-flex justify-content-center">
                        <div className="radio d-flex flex-column justify-content-start align-items-stretch tabs darkBox me-3 col-12">
                            <label className="navLabel d-flex flex-column align-items-stretch">
                                <input type="radio" value="CapTech" name="tab" className="expButton" onChange={(e) => setCurrentTab(e.target.value)} checked={currentTab==="CapTech"}/>
                                <p className="navLabel mb-0"> CapTech </p>
                            </label>
                            <label className="navLabel d-flex flex-column align-items-stretch">
                                <input type="radio" value="Northrop Grumman" name="tab" className="expButton" onChange={(e) => setCurrentTab(e.target.value)} checked={currentTab==="Northrop Grumman"}/>
                                <p className="navLabel mb-0">Northrop Grumman</p>
                            </label>
                            <label className="navLabel d-flex flex-column align-items-stretch">
                                <input type="radio" value="UVA TAing" name="tab" className="expButton" onChange={(e) => setCurrentTab(e.target.value)} checked={currentTab==="UVA TAing"}/>
                                <p className="navLabel mb-0">UVA Teaching Assistant</p>
                            </label>
                            <label className="navLabel d-flex flex-column align-items-stretch">
                                <input type="radio" value="UVA Research" name="tab" className="expButton" onChange={(e) => setCurrentTab(e.target.value)} checked={currentTab==="UVA Research"}/>
                                <p className="navLabel mb-0">UVA Research</p>
                            </label>
                        </div>
                    </div>
                    <div className="col-9 experienceBox darkBox">
                        {renderTab()}
                    </div>
                </div>
            </div>
        </div>
    )
}