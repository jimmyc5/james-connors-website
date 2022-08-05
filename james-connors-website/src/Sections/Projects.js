import DCrabImg from "../Images/DungeonCrab.png"
import NegativeSpaceImg from "../Images/NegativeSpace.png"
import {ReactComponent as LinkSymbol} from '../Images/LinkIcon.svg'
import {ReactComponent as GitHubLogo} from '../Images/GitHubLogo.svg'
import ProjectExample from "../Components/ProjectExample"
import PublicationScreenshot from "../Images/PublicationScreenshot.png"
export default function Projects(){
    return (
        <div className="col-12 justify-content-center d-flex flex-wrap mt-5 mb-5">
            <div className="col-11 col-lg-9 col-xl-8s justify-content-center d-flex flex-wrap">
            <p className="lightBlueText h4 col-12 mb-2"> Featured Projects </p>
                <ProjectExample
                    title="Dungeon Crab"
                    link="https://jimmyc5.itch.io/dungeon-crab"
                    subtitle="A game project I led in Student Game Developers"
                    descriptionList= {[
                        <span>I was the director of the semester-long project 'Dungeon Crab' in the Student Game Developers Club at UVA in Spring 2022. You can play it <a style={{pointerEvents:'auto'}} className="lightBlueText" href={"https://jimmyc5.itch.io/dungeon-crab"}>here</a>.</span>,
                        "As director of Dungeon Crab, I led a team of around 8 people to make this game, organizing meetings and providing guidance. I also did the bulk of the programming on the project.",
                        "While any SGD product is limited by the fact that it's made only by students in what free time we have between classes and work, I'm still very proud of what the team and I could accomplish."
                    ]}
                    image={DCrabImg}
                    techList={[ "Unity", "C#", "Git"]}
                    gitHubLink={'https://github.com/UVASGD/spring-2022-dungeon-crab'}
                    reverse={false}
                 />
                 <ProjectExample
                    title="C.O.M.P.O.S.E.R."
                    link= {null}
                    subtitle="A website I made with my roommate as a group project"
                    descriptionList= {[
                        "This project is a music recording and composition website. It was the final project of my roommate, Brian Christner, and I for the class Programming Languages for Web Development at UVA.",
                        <span>While the website itelf is no longer hosted due to it relying on a depreciated external api, you can see the video we made showing off the project <span className="d-none d-md-inline">to the left.</span><span className="d-md-none d-auto">above.</span></span>,
                    ]}
                    image={DCrabImg}
                    techList={[ "JavaScript", "PHP", "HTML/CSS"]}
                    gitHubLink={'https://github.com/atEchoOff/remote-record'}
                    reverse={true}
                    replaceImageWith={<iframe className="" style={{maxHeight: "100%", maxWidth: "130%", float:"left"}} width="560" height="315" src="https://www.youtube.com/embed/nioD_22Nz48" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
                 />
                 <ProjectExample
                    title="Negative Space"
                    link="https://jimmyc5.itch.io/negative-space"
                    subtitle="My personal favorite solo game project that I've made"
                    descriptionList= {[
                        <span>'Negative Space' is the game I think I like the most out of all of the games I've worked on in the past. I made it over about a month of occasional work for the Finally Finish Something 2022 Game Jam. You can play it <a style={{pointerEvents:'auto'}} className="lightBlueText" href={"https://jimmyc5.itch.io/negative-space"}>here</a>.</span>,
                        <span>This is just one example of the games I've worked on by myself in the past- I've actually made quite a few as a hobby. You can find the rest on <a style={{pointerEvents:'auto'}} className="lightBlueText" href={"https://jimmyc5.itch.io/"}>my itch.io account</a>.</span>,
                        "Like most of the games I've worked on, this game was made using the Unity engine, using C# for scripting."
                    ]}
                    image={NegativeSpaceImg}
                    techList={[ "Unity", "C#", "Git"]}
                    gitHubLink={'https://github.com/jimmyc5/Negative-Space'}
                    reverse={false}
                 />
                 <ProjectExample
                    title="Publication"
                    link="https://dl.acm.org/doi/abs/10.1145/3408877.3432389"
                    subtitle="A published paper that I helped author on Computer Science education"
                    descriptionList= {[
                        'This publication, "How Do Students Collaborate? Analyzing Group Choice in a Collaborative Learning Environment", was the result of my work as a research assistant with John R Hott.',
                        "I personally contributed to much of the parsing, analysis, and interpretation of the data involved, I wrote part of the manuscript, and I was one of the authors that presented the paper to SIGCSE 2021, a prominent computer science education conference."
                    ]}
                    image={PublicationScreenshot}
                    techList={[ "Python", "LaTeX", "Gephi"]}
                    gitHubLink={null}
                    reverse={true}
                 />
                 <ProjectExample
                    title="This Website"
                    link={null}
                    subtitle="The website that you're currently looking at!"
                    descriptionList= {[
                        "Funnily enough, the website you're currently looking at is also a favorite project of mine! I made it using React as a way to prove to myself I was skilled in the framework following my internship at CapTech.",
                        "I suppose there's really very little else I need to tell you about it seeing as you've already been using the website. Have fun while you're here, and let me know if you have any other ideas for what I should do with it next!"
                    ]}
                    image={PublicationScreenshot}
                    techList={[ "React", "JavaScript", "HTML/CSS"]}
                    gitHubLink={"https://github.com/jimmyc5/james-connors-website"}
                    reverse={false}
                 />
                 
            </div>
        </div>
        
    )
}