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
       
      } catch (e) {
        console.log(e);
      }
    })();
  }, [city]);
  const inputData = (event) => {
    setCity(event.target.value);
    // console.log(city);
  };
  return (<>
      <div className="container app-container app-top-bar">
      <div className="">
       <h1 className="app-heading">weather app</h1>
        <div className="input">
         <label for="search-input">Search: </label>
          <input type="text" className="search-input" onChange={inputData} />
        </div>
        {
            !search?(<p>not found</p>):(<>
                <div className="city">
                <h1 className="city_header">{city}</h1>
               </div>
               <div className="data">
                <div className="app-content">
                {search.temp<20?(<i className="color-cool">coldy today - {search.temp}</i>):(<i className="color-warm">warmy today {search.temp}</i>)
               }
                </div>
                </div>
               <div className="color-cool">
                <small><span>min {search.temp_min}</span> | </small>
                
                    <small><span className="color-warm">max {search.temp_max}</span></small>
                    
                </div>
                
                </>)
        }
        </div>
        </div>
    </>
);
};
export default  Wether;
