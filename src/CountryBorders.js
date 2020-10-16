import React from 'react';


 const CountryBorders = ({ country, goBack, countryInfo }) => {
   //  console.log(country)
const goTo = (e) => {
countryInfo(e.target.innerText)
}
   //  return <div></div>
   if (country) {
     // console.log("hhhh",country.name)
     return (
       <>
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
           {country.borders && country.borders.map((item) => (
             <li onClick={goTo}>{item}</li>
           ))}
         </ul>
       </>
     );
   } else {
     return null;
   }
 };

export default CountryBorders;