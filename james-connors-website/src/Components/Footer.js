import GitHubLogo from '../Images/GitHubLogo.svg'
import ItchLogo from '../Images/ItchLogo.svg'
import LinkedInLogo from '../Images/LinkedInLogo.svg'
import EmailSymbol from '../Images/Email.svg'

export default function Footer(){
    return (
        <div>
            <div className='phantomFooter' />
            <div className='footer'>
                <a href='https://github.com/jimmyc5' className='m-2'><img src={GitHubLogo} className="linkImage"/></a>
                <a href='https://www.linkedin.com/in/james-connors-57520321a/' className='m-2'><img src={LinkedInLogo} className="linkImage"/></a>
                <a href='https://jimmyc5.itch.io/' className='m-2'><img src={ItchLogo} className="linkImage"/></a>
                <a href='mailto:jjc9bb@virginia.edu' className='m-2'><img src={EmailSymbol} className="linkImage"/></a>

            </div>
        </div>
    );
}