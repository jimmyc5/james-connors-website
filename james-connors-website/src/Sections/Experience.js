import { useState } from "react";
import ExperienceExample from "../Components/ExperienceExample";

export default function Experience(){

    const [currentTab, setCurrentTab] = useState("CapTech");

    function renderTab(){
        switch(currentTab){
            case "about":
                return <ExperienceExample />
            case "experience":
                return <ExperienceExample />
            case "projects":
                return <ExperienceExample />
            case "contact":
                return <ExperienceExample />
            default:
                return <ExperienceExample />
        }
    }

    return (
        <div className="col-11 col-lg-9 justify-content-center d-flex flex-wrap mt-5">
            <div className="col-md-8 col-12">
                <p className="lightBlueText h4"> Work Experience </p>
                <div className="col-12">
                    <div className="">
                        <div className="radio d-flex flex-column justify-content-center align-items-stretch">
                            <label className="navLabel">
                                <input type="radio" value="CapTech" name="tab" className="navButton d-none" onChange={(e) => setCurrentTab(e.target.value)} checked={currentTab==="CapTech"}/>
                                CapTech
                            </label>
                            <label className="navLabel">
                                <input type="radio" value="Northrop Grumman" name="tab" className="navButton d-none" onChange={(e) => setCurrentTab(e.target.value)} checked={currentTab==="Northrop Grumman"}/>
                                Northrop Grumman
                            </label>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}