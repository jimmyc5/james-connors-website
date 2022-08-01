
export default function ExperienceExample(props){
    return (
        <div className="p-1 ps-4 d-block overflow-auto">
            <div className="d-flex flex-wrap overflow-auto">
                <p className="h3"> {props.jobTitle} </p>
                
            </div>
            <p className="lightBlueText h4 ms-1"> {` @ ${props.companyName}`}</p>
            <p> {props.dateRange} </p>
            <ul className="overflow-auto">
                {props.detailsList.map((point, index)=> (
                    <li key={index}>{point}</li>
                ))} 
            </ul>
        </div>
    )
}