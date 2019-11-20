import React from "react";

/* <input type="text" list="suggestions">
<datalist id="suggestions">
    <option>мебель офисная</option>
    <option>стол компьютерный</option>
    <option>стул мягкий</option>
</datalist> */

// const gettingCities = async e => {
//     // e.preventDefault();
//   const city = e.target.elements.city.value;
//   const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=32dcebbe9e7c1782266ddc845ad962c9&units=metric`);
//   const data = await api_url.json();
//   console.log(data.name);
//   return data.name;
// };
// gettingCities();

const Form = props => {
  return (
    <form onSubmit={props.weatherMethod}>
      <input type="text" name="city" placeholder="City:" />
      <button>Get weather:</button>
    </form>
  );
};

export default Form;
