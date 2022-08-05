import Headshot from "../Images/Headshot.png"
export default function About(){
    return (
        <div className="d-flex justify-content-center col-12">
            <div className="col-11 col-lg-9 col-xl-8 justify-content-center d-flex flex-wrap">
                <div className="mt-0 co-12 mb-md-5">
                    <p className="mb-0">Hi there! I'm</p>
                    <p className="h1" style={{fontSize: 60}}> <span className="lightBlueText">James Connors</span>.</p>
                    <p className="h4">I'm a student and a software developer, currently looking for a full-time job.</p>
                </div>
                <div className="col-12 d-flex justify-content-center align-items-stretch flex-wrap">
                    <div className="d-md-none col-12 d-flex justify-content-center mt-3 mb-2">
                        <img src={Headshot} className="rounded img-thumbnail pictureBorder" style={{maxHeight: "300px"}}></img>
                    </div>
                    <div className="col-md-8 col-12">
                        <p className="lightBlueText h4">About Me</p>
                        <p> Hello! My name is James Connors, but most people call me Jimmy. </p> 
                        <p> My interest in programming started when I made simple video games online using Scratch- turns out that my childhood spent playing video games and my own passion to create lit a fire under me to make software that I can be proud of. </p> 
                        <p> As I delved into programming languages and other tools in high school and college, I quickly found that passion spreading to all areas of software development. Nowadays I work on web development, game development, and more. I'm now the president of the Student Game Developers Club at UVA, and I've worked in web development at two different internships. I make projects like this website for fun, and I would love to become a software engineer as my full-time job.</p> 
                        <p> I'm currently looking for a job for when I graduate in May 2023. </p>
                        <p> Here are some technologies I've worked with: </p>
                        <div className="d-flex col-12">
                            <ul className="col-6">
                                <li> React </li>
                                <li> JavaScript, PHP, HTML/CSS </li>
                                <li> Angular </li>
                            </ul>
                            <ul className="col-6">
                                <li> C++, Java, Python, C# </li>
                                <li> The Unity engine </li>
                                <li> Git, GitHub and Subversion </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-4 d-md-flex d-none justify-content-center mt-5">
                        <img src={Headshot} className="rounded img-thumbnail pictureBorder" style={{maxHeight: "200px"}}></img>
                    </div>
                    

                </div>
                
            </div>
            
        </div>
    )
}