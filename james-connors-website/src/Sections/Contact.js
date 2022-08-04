import {ReactComponent as GitHubLogo} from '../Images/GitHubLogo.svg'
import {ReactComponent as ItchLogo} from '../Images/ItchLogo.svg'
import {ReactComponent as LinkedInLogo} from '../Images/LinkedInLogo.svg'
import {ReactComponent as EmailSymbol} from '../Images/Email.svg'
export default function Contact(){
    return (
        <div className="col-12 justify-content-center d-flex flex-wrap mt-5 mb-2">
            <div className="col-11 mt-5 col-lg-9 col-xl-8s justify-content-center d-flex flex-wrap">
                <div className="col-6 contactBox d-flex flex-column align-items-center">
                    <p className="lightBlueText h4 mb-2"> Contact Me </p>
                    <p>As I mentioned before, I'm currently looking for a job when I graduate in May 2023 If you know of any opportunities and think I'd be a good fit, please let me know!</p>
                    <p className='mb-0'> You can find me at the following places: </p>
                    {/* <div className='d-flex flex-row'>
                    <a href='https://github.com/jimmyc5' className='m-2 d-flex flex-row'><GitHubLogo fill="#AAABB8" stroke='#AAABB8' className="linkImage"/><p className='contactLink'>GitHub</p></a>
                        <a href='https://www.linkedin.com/in/james-connors-57520321a/' className='m-2 d-flex flex-row'><LinkedInLogo fill="#AAABB8" stroke='#AAABB8' className="linkImage"/><p className='contactLink'>LinkedIn</p></a>
                        <a href='https://jimmyc5.itch.io/' className='m-2 d-flex flex-row'><ItchLogo fill="#AAABB8" stroke='#AAABB8' className="linkImage"/><p className='contactLink'>itch.io</p></a>
                        <a href='mailto:jjc9bb@virginia.edu' className='m-2 d-flex flex-row'><EmailSymbol fill="#AAABB8" stroke='#AAABB8' className="linkImage"/><p className='contactLink'>email</p></a>
                    </div> */}
                </div>
                

            </div>
        </div>
    )
}