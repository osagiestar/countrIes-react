import React from 'react';


 const CountryBorders = ({ country, goBack, countryInfo, countriesAll }) => {
    
   const goTo = (e) => {
     countryInfo(e.target.innerText);
   };

   if (country) {
      let borderCountries = countriesAll.filter((
      item => country.borders && country.borders.includes(item.alpha3Code))); 

     return (
       <div className="countryDetail">
         <h1>{country.name}</h1>
         <img
           src={country.flag}
           // value={}
           alt={country.alpha3Code}
           onClick={goBack}
           style={{ width: "280px", height: "220px" }}
         />
         <div> {country.name} </div>
         <div> Population: {country.population} </div>
         <div> Capital: {country.capital} </div>
         <ul>
           {borderCountries &&
             borderCountries.map((item) => (
               <li onClick={goTo} value={item.alpha3Code}>
                 <img
                   src={item.flag}
                   // value={}
                   alt={item.flag}
                   style={{ width: "100px", height: "auto" }}
                 />
                 <p>{item.name}</p>
               </li>
             ))}
         </ul>
       </div>
     );
   } else {
     return null;
   }
 };

export default CountryBorders;