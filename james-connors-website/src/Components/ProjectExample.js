import {ReactComponent as LinkSymbol} from '../Images/LinkIcon.svg'
import {ReactComponent as GitHubLogo} from '../Images/GitHubLogo.svg'

export default function ProjectExample(props){
    const {title, link, subtitle, descriptionList, image, techList, gitHubLink, reverse} = props;

    console.log(descriptionList);
    return (
        <div className={`${reverse ? "flex-row" : "flex-row-reverse"} d-flex flex-wrap justify-content-center align-items-stretch mb-5`}>
                    <div className="col-10 col-md-4 d-flex justify-content-center align-items-center">
                        <div className="col-12 col-xl-9 col-lg-11">
                            <a href={link}><img src={image} className="rounded pictureBorder projectImage col-12 col-md-auto" style={reverse ? {maxHeight: "100%", maxWidth: "150%", float:"left"} : {maxHeight: "100%", maxWidth: "150%", float:"right"}} /></a>
                        </div>
                    </div>
                    <div className={`col-12 col-md-8 p-3 d-flex flex-column ${reverse ? "align-items-left" : "align-items-right"}`}>
                        <div className="p-1 pb-0" style={reverse ? {textAlign:"right"} : {textAlign:"left"}}>
                         <a href={link} className={`projectLink d-flex align-items-center ${reverse ? "flex-row-reverse" : "flex-row"}`}><p className="projectTitle h4 mb-0 mr-2"> {title}</p> {link != null && <LinkSymbol fill="#AAABB8" stroke='#AAABB8' className="ms-2 me-2 inlineLinkImage"/>}</a>
                        <p className="mb-1"> {subtitle} </p>
                        </div>
                        
                        <div className="projectBox">
                            {descriptionList.map((desc, index) => (
                                <p key={index} style={reverse ? {textAlign:"right"} : {textAlign:"left"}} className='mb-1'>{desc}</p>
                            ))}
                        </div>
                        <div className={`d-flex p-1 ${reverse ? "flex-row-reverse": ""}`}>
                            {techList.map((tech, index)=>(
                                <p key={index} className="p-2 mt-0 m-2 mb-0">{tech}</p>
                            ))}
                        </div>
                        <div className={`d-flex ${reverse ? "flex-row-reverse" : "flex-row"}`}>
                            {link != null && <a href={link} className='ms-3 me-2'><GitHubLogo fill="#AAABB8" stroke='#AAABB8' className="linkImage"/></a> }
                            {gitHubLink != null && <a href={gitHubLink} className="projectLink d-flex align-items-center"> <LinkSymbol fill="#AAABB8" stroke='#AAABB8' className="ms-3 inlineLinkImage"/></a>}
                        </div>
                    </div>
                </div>
    );
}