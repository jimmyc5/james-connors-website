import DCrabImg from "../Images/DungeonCrab.png"
import {ReactComponent as LinkSymbol} from '../Images/LinkIcon.svg'
import {ReactComponent as GitHubLogo} from '../Images/GitHubLogo.svg'
import ProjectExample from "../Components/ProjectExample"
export default function Projects(){
    return (
        <div className="col-12 justify-content-center d-flex flex-wrap mt-5 mb-5">
            <div className="col-11 mt-5 col-lg-9 col-xl-8s justify-content-center d-flex flex-wrap">
                <p className="lightBlueText h4 col-12 mb-2"> Featured Projects </p>
                <ProjectExample
                    title="Dungeon Crab"
                    link="https://jimmyc5.itch.io/dungeon-crab"
                    subtitle="A game project I led"
                    descriptionList= {[
                        "I was the director of the semester-long project 'Dungeon Crab' in the Student Game Developers Club at UVA in Spring 2022.",
                        "As director of Dungeon Crab, I led a team of around 8 people to make this game, organizing meetings and providing guidance. I also did the bulk of the programming on the project.",
                        "While any SGD product is limited by the fact that it's made only by students in what free time we have between classes and work, I'm still very proud of what the team and I could accomplish."
                    ]}
                    image={DCrabImg}
                    techList={[ "Unity", "C#", "Git"]}
                    gitHubLink={'https://github.com/UVASGD/spring-2022-dungeon-crab'}
                    reverse={false}
                 />
                 <ProjectExample
                    title="Dungeon Crab"
                    link="https://jimmyc5.itch.io/dungeon-crab"
                    subtitle="A game project I led"
                    descriptionList= {[
                        "I was the director of the semester-long project 'Dungeon Crab' in the Student Game Developers Club at UVA in Spring 2022.",
                        "As director of Dungeon Crab, I led a team of around 8 people to make this game, organizing meetings and providing guidance. I also did the bulk of the programming on the project.",
                        "While any SGD product is limited by the fact that it's made only by students in what free time we have between classes and work, I'm still very proud of what the team and I could accomplish."
                    ]}
                    image={DCrabImg}
                    techList={[ "Unity", "C#", "Git"]}
                    gitHubLink={'https://github.com/UVASGD/spring-2022-dungeon-crab'}
                    reverse={true}
                 />
            </div>
        </div>
        
    )
}