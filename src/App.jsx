import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import Tour from "./Tour";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetchTours()
  }, [])

  const fetchTours = async() => {
    setLoading(true);
    try{
      const res = await fetch(url);
      if(!res.ok) throw new Error("Bad request")
      const data = await res.json();
      console.log(data)
      setLoading(false);
      setTours(data);

    } catch(err) {
      setLoading(false)
      console.log(err, '>>Error')
    }
  }

  const handleDelete = (id) => {
    const filtered = tours.filter(tour => tour.id !== id);
    setTours(filtered)
  }


  if(loading){
    return (
      <main><Loading/></main>
    )
  }
  if(tours.length === 0){
    return(
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button onClick={fetchTours} className="btn">Refresh</button>
        </div>
      </main>
    )
  }
  return <main>
    <Tours
      handleDelete={handleDelete}
      tours={tours}
    />
  </main>;
}

export default App;
