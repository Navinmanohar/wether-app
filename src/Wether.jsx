import react, { useEffect, useState } from "react";

const Wether = () => {
  const [search, setSearch] = useState(null)
  const [city, setCity] = useState("Zocca");
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=86eede8dc94526403b99a2b29ebd699d`
        );
        const responseJson=await response.json();
        setSearch(responseJson.main)
        console.log(search)
      } catch (e) {
        console.log(e);
      }
    })();
  }, [city]);
  const inputData = (event) => {
    setCity(event.target.value);
    // console.log(city);
  };
  return (
    <>
      <div className="main">
        <div className="input">
          <input type="text" className="search-input" onChange={inputData} />
        </div>
        {
             !search?(
               <p>not found</p>):(
                <>
                <div className="city">
          <h1 className="city_header">{city}</h1>
        </div>
        <div className="data">
          <i className="data-info">{search.temp}</i>
        </div>
        <div className="min-max">
            <small><span>min {search.temp_min}</span> | <span>max {search.temp_min}</span></small>
        </div>
                </>
            )
        } 
        
      </div>
    </>
  );
};
export default  Wether;
