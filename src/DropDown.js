import React, { useState } from 'react';
import countriesAll from "./countriesAll.json";

 const DropDown = ({ changeRegion }) => {

  const [regions, setRegions] = useState(countriesAll);
  // const [selectedRegion, setSelectedRegion] = useState();

  // console.log(countriesAll); 
  console.log(regions);

  function dropDownHandler(event) {
    setRegions(event.target.value)
    changeRegion(event.target.value)
   // console.log(event.target.value);

  }
  
  let regionsList = [];
  countriesAll.forEach(item => {!regionsList.includes(item.region) && regionsList.push(item.region);
  }) ;
  //console.log(regionsList);


  return (
    <div>
      <label id="selector">
        Choose a Region:
        <select onChange={dropDownHandler}>
            <option key={"All"} value={"All"}> Filter by region </option>
          {regionsList.map((region) => (
            <option key={region} value={region}>
              {region ? region:"Undefined"}
            </option>
          ))}
          
        </select>
      </label>
    </div>
  );
}

export default DropDown;