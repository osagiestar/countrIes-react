import React, { useState } from 'react';
import countriesAll from "./countriesAll.json";

 const DropDown = ({ regionsVal }) => {

  const [regions, setRegions] = useState(countriesAll);
  console.log(countriesAll);

  function dropDownHandler(event) {
    setRegions(event.target.value)
    // regionsVal(event.target.value)
    console.log(event.target.value);
  }

  let regionsList = [];
  countriesAll.forEach(item => {!regionsList.includes(item.region) && regionsList.push(item.region);
  !item.region && console.log(item.name)}) ;
  console.log(regionsList);

  

  return (
    <div>
      <label id="selector">
        Choose a Region:
        <select onChange={dropDownHandler}>
          {/* {regions.map((region) => (
            <option key={region.alpha3Code} value={region.region}>
              {region.region}
            </option>
          ))} */}
          <option> All regions </option>
          {regionsList.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
          
        </select>
      </label>
    </div>
  );
}


{/* const names = ['John', 'Paul', 'George', 'Ringo', 'John'];
let x = (names) => names.filter((v,i) => names.indexOf(v) === i)
x(names); // 'John', 'Paul', 'George', 'Ringo' */}

export default DropDown;