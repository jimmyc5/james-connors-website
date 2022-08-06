import {ReactComponent as GitHubLogo} from '../Images/GitHubLogo.svg'
import {ReactComponent as ItchLogo} from '../Images/ItchLogo.svg'
import {ReactComponent as LinkedInLogo} from '../Images/LinkedInLogo.svg'
import {ReactComponent as EmailSymbol} from '../Images/Email.svg'
export default function Contact(){
    return (
        <div className="col-12 justify-content-center d-flex flex-wrap  mb-5">
            <div className="col-11 col-lg-9 mb-5 col-xl-8s justify-content-center d-flex flex-wrap">
                <div className="col-12 col-xl-6 col-lg-8 contactBox d-flex flex-column align-items-center p-2">
                    <p className="lightBlueText h3 mb-2 sectionTitle col-12"> Contact Me </p>
                    <div className="col-12 contactBox d-flex flex-column align-items-center contactBox darkBox p-2">
                        <p>As I mentioned before, I'm currently looking for a job when I graduate in May 2023. If you know of any opportunities and think I'd be a good fit, please let me know!</p>
                        <a className="resumeLink" href='mailto:jjc9bb@virginia.edu'> Say Hello </a>
                    </div>
                </div>
                

            </div>
        </div>
    )
}