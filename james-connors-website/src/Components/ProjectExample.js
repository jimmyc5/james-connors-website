import {ReactComponent as LinkSymbol} from '../Images/LinkIcon.svg'
import {ReactComponent as GitHubLogo} from '../Images/GitHubLogo.svg'

export default function ProjectExample(props){
    const {title, link, subtitle, descriptionList, image, techList, gitHubLink, reverse, replaceImageWith} = props;

    return (
        <div className={`${reverse ? "flex-row" : "flex-row-reverse"} d-flex flex-wrap justify-content-center align-items-stretch mb-5`}>
                    <div className={`${replaceImageWith == null ? "col-10 col-xl-3 col-md-4" : "col-10 col-xl-5 col-md-6"} d-flex justify-content-center align-items-center`}>
                        <div className="col-12 col-lg-11">
                            {replaceImageWith == null ? 
                            <a href={link}><img src={image} className="rounded pictureBorder projectImage col-12 col-md-auto" style={reverse ? {maxHeight: "100%", maxWidth: "150%", float:"left"} : {maxHeight: "100%", maxWidth: "150%", float:"right"}} /></a>
                            :
                            replaceImageWith
                            }
                        </div>
                    </div>
                    <div className={`${replaceImageWith == null ? "col-12 col-md-8 col-xl-9" : "col-12 col-md-6 col-xl-7"} p-3 d-flex flex-column ${reverse ? "align-items-left" : "align-items-right"}`} style={{pointerEvents:'none'}}>
                        <div className="p-1 pb-0" style={reverse ? {textAlign:"right"} : {textAlign:"left"}}>
                            <a style={{pointerEvents:'auto'}} href={link} className={`projectLink d-flex align-items-center ${reverse ? "flex-row-reverse" : "flex-row"}`}><p className="projectTitle h4 mb-0 mr-2"> {title}</p> {link != null && <LinkSymbol fill="#AAABB8" stroke='#AAABB8' className="ms-2 me-2 inlineLinkImage"/>}</a> 
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
                        <div className={`d-flex ${reverse ? "flex-row-reverse pe-3" : "flex-row ps-3"}`}>
                            {gitHubLink != null && <a style={{pointerEvents:'auto'}} href={gitHubLink} className="projectLink d-flex align-items-center me-2'"> <GitHubLogo fill="#AAABB8" stroke='#AAABB8' className="linkImage "/></a>}
                            {link != null && <a style={{pointerEvents:'auto'}} href={link} className=''><LinkSymbol fill="#AAABB8" stroke='#AAABB8' className=" inlineLinkImage"/></a> }
                        </div>
                    </div>
                </div>
    );
}