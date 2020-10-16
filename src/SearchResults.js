// eslint-disable-next-line 
import React, {useState } from "react";


const SearchResults = ({ results, countryInfo  }) => {
  
  // console.log(results);
    // const [countries, setCountries] = useState("");

    function countryBorderHandler(e) {
countryInfo(e.target.alt);
    }
    
  return (
    <>
      {results.map((country) => (
        <div
          className="country"
          key={country.alpha3Code}
          onClick={countryBorderHandler}
        >
          <img
            src={country.flag}
            // value={}
          alt={country.alpha3Code}
            style={{ width: "250px", height: "220px" }}
          />
          <div> {country.name} </div>
          <div> Population: {country.population} </div>
          <div> Capital: {country.capital} </div>
        </div>
      ))}
    </>
  );  
};

export default SearchResults;