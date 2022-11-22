import { useLocation } from 'react-router-dom'
import "./Contest.css";
const Contest = (props) => {

    const location = useLocation();
    const { cardDetail } = location.state;
    console.log(cardDetail);

    const img_url = "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png";
    return (
        <div className="contestContainer">
            <h1> Contest Detail Page</h1>
            <div className="cardContest">
                <div className="cardContestLeftContainer">
                    <img src={img_url} alt="banner_img" />
                </div>
                <div className="cardContestMiddleContainer">
                    <h2>{cardDetail?.name}</h2>
                    <p>Start Time :{cardDetail?.start_time}</p>
                    <p>End Time : {cardDetail?.end_time}</p>
                    <p>Duration : {cardDetail?.duration}</p>
                    <p>Status : {cardDetail?.status}</p>
                </div>
                <div className="cardContestRightContainer">
                    <a href={cardDetail?.url} target="_blank" rel="noreferrer">start test</a>
                </div>
            </div>

        </div>
    )
}

export default Contest