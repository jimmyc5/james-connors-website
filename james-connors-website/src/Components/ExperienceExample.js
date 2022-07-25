
export default function ExperienceExample(props){
    return (
        <div className="p-1 ps-4">
            <div className="d-flex flex-wrap">
                <p className="h3"> {props.jobTitle} </p>
                <p className="lightBlueText h3 ms-1"> {` @ ${props.companyName}`}</p>
            </div>
            <p> {props.dateRange} </p>
            <ul>
                {props.detailsList.map((point)=> (
                    <li>{point}</li>
                ))} 
            </ul>
        </div>
    )
}