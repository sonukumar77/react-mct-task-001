import moment from 'moment';
import "../SingleCard.css";
import{Link} from "react-router-dom";
const SingleCard = ({ cardData }) => {

    const date = cardData.start_time.split("T")[0];
    const time = cardData.start_time.split("T")[1].split(".")[0];
    const relativeTime = moment().format(`${date} ${time}`);

    const codeforceImg = "https://pbs.twimg.com/profile_images/1477930785537605633/ROTVNVz7_400x400.jpg";
    
    return (

        <div className="card">
            
            <div className="cardLeftContainer">
                 <Link className="link" to="/contest" state={{ cardDetail: cardData }}>
                    <h2>{cardData.name}</h2>
                    <p>Start Date:{date}</p>
                    <p>Start Time:{time}</p>
                    <p>Duration:{relativeTime}</p>
                </Link>
            </div>
            <div className="cardRightContainer">
            <Link className="link" to="/contest" state={{ cardDetail: cardData }}>
               
                <img src={codeforceImg } alt={cardData.site} />
                </Link>
            </div>
            
        </div>

    )
}

export default SingleCard