import React, { useState } from "react";
function ColorForm(props) {
  let [input, setInput] = useState("");

  const handleSubmit = (e) => {
    // We still want to eliminate the default behavior of our form submittal
    e.preventDefault();
    // addColor, the function we just built, should be available within props.
    props.addColor(input);
  };
  // "violet",
  // "blue",
  // "lightblue",
  // "green",
  // "greenyellow",
  // "yellow",
  // "orange",
  // "red",
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <select
          placeholder="select color"
          onChange={(e) => setInput(e.target.value)}
        >
          <option>violet</option>
          <option>blue</option>
          <option>lightblue</option>
          <option>green</option>
          <option>greenyellow</option>
          <option>yellow</option>
          <option>orange</option>
          <option>red</option>
        </select> */}
<div>
  <label htmlFor="colorpicker">Color Picker:</label>
   <input 
   onChange={(e) => setInput(e.target.value)} 
   type="color"
    id="colorpicker" 
    />
   </div>
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
}

export default ColorForm;
