import {ReactComponent as GitHubLogo} from '../Images/GitHubLogo.svg'
import {ReactComponent as ItchLogo} from '../Images/ItchLogo.svg'
import {ReactComponent as LinkedInLogo} from '../Images/LinkedInLogo.svg'
import {ReactComponent as EmailSymbol} from '../Images/Email.svg'

export default function Footer(){
    return (
        <div className='d-flex justify-content-center'>
            <div className='phantomFooter' />
            <div className='footer d-flex flex-row justify-content-center'>
                {/* <a href='https://github.com/jimmyc5' className='m-2'><GitHubLogo fill="#AAABB8" stroke='#AAABB8' className="linkImage"/></a>
                <a href='https://www.linkedin.com/in/james-connors-57520321a/' className='m-2'><LinkedInLogo fill="#AAABB8" stroke='#AAABB8' className="linkImage"/></a>
                <a href='https://jimmyc5.itch.io/' className='m-2'><ItchLogo fill="#AAABB8" stroke='#AAABB8' className="linkImage"/></a>
                <a href='mailto:jjc9bb@virginia.edu' className='m-2'><EmailSymbol fill="#AAABB8" stroke='#AAABB8' className="linkImage"/></a> */}
                        <a href='https://github.com/jimmyc5' className='m-2 d-flex flex-row'><GitHubLogo fill="#AAABB8" stroke='#AAABB8' className="linkImage"/><p className='contactLink'>GitHub</p></a>
                        <a href='https://www.linkedin.com/in/james-connors-57520321a/' className='m-2 d-flex flex-row'><LinkedInLogo fill="#AAABB8" stroke='#AAABB8' className="linkImage"/><p className='contactLink'>LinkedIn</p></a>
                        <a href='https://jimmyc5.itch.io/' className='m-2 d-flex flex-row'><ItchLogo fill="#AAABB8" stroke='#AAABB8' className="linkImage"/><p className='contactLink'>itch.io</p></a>
                        <a href='mailto:jjc9bb@virginia.edu' className='m-2 d-flex flex-row'><EmailSymbol fill="#AAABB8" stroke='#AAABB8' className="linkImage"/><p className='contactLink'>Email</p></a>
            </div>
        </div>
    );
}