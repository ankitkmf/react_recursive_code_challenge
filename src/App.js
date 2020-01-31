import React, { useState } from 'react';
import draw from './draw';
import './App.css';

function App() {

  // Set emum
  const pixelEnum = { 0: ' ', 1: '-', 2: '|' };

  // Set state
  const [shape, setShape] = useState([]);
  const [inputError, setInputError] = useState([]);
  const [input, setInputValues] = useState([]);

  //calling validation method 
  const validation = () => {
    const errors = [];

    if (input.width < 20 || input.width % 2 !== 0) {
      errors.push(`width value should be even and greater or equal to 20 `);
    }
    if (input.height < 20 || input.height % 2 !== 0) {
      errors.push(`height value should be even and greater or equal to 20 `);
    }
    if (input.padding < 4 || input.padding % 2 !== 0) {
      errors.push(`Padding value should be even and greater or equal to 4 `)
    }
    return errors;

  }

  // handle user input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...input, [name]: Number(value) })
  }

  // calling shape method 
  const callingShape = () => {
    let drawObj = draw(input.width, input.height, input.padding);
    setShape(drawObj.map(row => row.map(i => pixelEnum[i]).join``).join`\n`);
  }

  // handle submit method 
  const handleSubmit = (e) => {
     e.preventDefault();
     
    //calling validation method
    const errors = validation();
    if (errors.length > 0) {
      setInputError(errors);
      return;
    }
    // reset previous validation if any
    setInputError(errors);
    callingShape();
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="">
          <label>Width:</label>
          <input name="width" value={input.width} onChange={handleInputChange} />
          <label>Height:</label>
          <input name="height" value={input.height} onChange={handleInputChange} />
          <label>Padding:</label>
          <input name="padding" value={input.padding} onChange={handleInputChange} />
          <input type="submit" value="Submit" />
        </div>
        {inputError.map((value, index) => {
          return <div className="formErrors" key={index}>{value}</div>
        })}
        <pre>{shape}</pre>
      </form>
    </div>
  );
}

export default App;
