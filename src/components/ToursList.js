import React from "react";
import ToursItem from "./TourItem";

function ToursList ({tours}) {
    return (
        <div>
            <h1>Tours List Component</h1>
            <div>
                {tours.length>=1?(
                    tours.map((tour) => <ToursItem tour={tour} key={tour._id} />)
                    ) : (
                        <p>Loading.......</p>

                )}
            </div>
        </div>
    );
}

export default ToursList;