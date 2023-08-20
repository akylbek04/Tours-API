import React from "react";
import Tour from "./Tour";
const Tours = ({tours, handleDelete}) => {
  return <section >
    <div className="title">
        <h2>Our tours</h2>
        <div className="underline"></div>
        <div>
            {tours.map(tour => {
                return <Tour key={tour.id} {...tour} handleDelete={handleDelete}/>
            })}
        </div>
    </div>
  </section>;
};

export default Tours;
