import React from "react";
import ToursItem from "../components/TourItem";


const Home = ({tours}) => {
    return (
        <div>
            <h1>Our tour list</h1>
            <div className="bodyTourse">
                {tours.length>=1?(
                    tours.map((tour) => <ToursItem tour={tour} key={tour._id} />)
                    ) : (
                        <p>Loading.......</p>

                )}
            </div>
        </div>
    );
}

export default Home