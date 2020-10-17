import React from 'react';


 const CountryBorders = ({ country, goBack, countryInfo, countriesAll }) => {
   //  console.log(country)
 

// let arr1 = [
//   { id: 1, nextTo: [2, 3, 4] },
//   { id: 2, nextTo: [1, 3] },
//   { id: 3, nextTo: [2, 4,1] },
//   { id: 4, nextTo: [3, 1] }
//   ];
// let aa = { id: 4, nextTo: [3, 1] };
//   let newArr = arr1.filter(item => aa.nextTo.find(el => el ===  item.id));

// arr1[0].id = 1;       aa
// arr[0].nextTo[0]          arr1[2].nextTo = [2, 4, 1]
//                           arr1[2].nextTo === aa.nextTo
// arr[2.id = 3;                   [2,  4, 1] === [3,1]
//                     arr1[2 + 1] || OR arr[2-1]

  
   const goTo = (e) => {
     countryInfo(e.target.innerText);
   };
   //  return <div></div>
   if (country) {
      let borderCountries = countriesAll.filter((item => country.borders && country.borders.includes(item.alpha3Code))); 

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
                   onClick={goTo}
                   value={item.flag}
                   src={item.flag}
                   // value={}
                   alt={item.name}
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