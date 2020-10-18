import "stop-runaway-react-effects/hijack";
import React, {useState, useEffect} from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import DropDown from './DropDown.js'
import CountryBorders from "./CountryBorders.js";
// import countriesAll from "./countriesAll.json";

const Countries = () => {

  const [countries, setCountries] = useState([]);
  const [countriesAll, setCountriesAll] = useState([]); 
  const [countrySearch, setCountrySearch] = useState("");
  const [regionName, setRegionName] = useState("All");
  const [oneCountry, setOneCountry] = useState([]);

  useEffect(() => {
      fetch(`https://restcountries.eu/rest/v2/all`)
      .then((response) => response.json())
      .then((data) => {
        
        setCountries(data);

        setCountriesAll(data);
      });
  }, []);
  
  function search (searchValue) {
    // console.log(regionName === "All");
    setCountrySearch(searchValue.toLowerCase());
    setCountries(
      countriesAll
        .filter((country) =>
          country.name.toLowerCase().includes(searchValue.toLowerCase())
        )
        .filter((country) =>
          regionName === "All"
            ? true
            : country.region === regionName
        )
    );
  }

  function regionsVal (searchRegion) { 
    setRegionName(searchRegion)
    
     setCountries(
       countriesAll
         .filter((country) =>
           searchRegion === "All"
             ? true
             : country.region === searchRegion
         )
         .filter((country) =>
           country.name.toLowerCase().includes(countrySearch)
         )
     );
  }

  const countryInfo = (name) => {
    setCountries([]);
    setOneCountry(countriesAll.find(item => item.name===name))
  };

  const goBack = () => {
    setOneCountry();
    setCountries(
    countriesAll
    .filter((country) =>
    regionName === "All" ? true : country.region === regionName
    )
    .filter((country) => country.name.toLowerCase().includes(countrySearch))
    );
  }

  return (
    <div className="App-content">
      <Search searchFn={search} /> <br/>
      <DropDown changeRegion={regionsVal} /> <br/>
      <div className="container">
        <SearchResults results={countries} countryInfo={countryInfo} />
        <CountryBorders
          country={oneCountry}
          goBack={goBack}
          countryInfo={countryInfo}
          countriesAll={countriesAll}
        />
      </div>
    </div>
  );
}

  export default Countries;


