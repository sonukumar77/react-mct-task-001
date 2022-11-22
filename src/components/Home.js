import "./Home.css";
import { useState, useEffect } from "react";
import SingleCard from "./SingleCard";

const Home = () => {

    const [apiData, setApiData] = useState([]);
    // console.log(apiData);
    useEffect(() => {
        (
            async () => {
                const res = await fetch(`https://kontests.net/api/v1/all`);
                const data = await res.json();
                setApiData(data);
            }
        )();
    }, []);


    return (
        <>
            <div className="homeContainer">
                <div className="topHeaderBtnContainer">
                    <button >Platforms</button>
                </div>
                <div className="cardContainer">
                    {
                        apiData?.map((single_element, idx) => {
                            return (

                                <SingleCard cardData={single_element} key={idx} />


                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Home