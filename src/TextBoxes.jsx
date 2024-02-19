import React, { useState } from 'react';
import './TextBoxes.css'; // Import CSS file for styling

function TextBoxes() {
  // Define state variables to store the values of your textboxes
  const [textBox1Value, setTextBox1Value] = useState('');
  const [textBox2Value, setTextBox2Value] = useState('');

  // Event handler functions to update the state when the text in the textboxes change
  const handleTextBox1Change = (event) => {
    setTextBox1Value(event.target.value);
  };

  const handleTextBox2Change = (event) => {
    setTextBox2Value(event.target.value);
  };

  return (
    <div className="textBoxesContainer">
      {/* Render the textboxes */}
      <input
        type="text"
        value={textBox1Value}
        onChange={handleTextBox1Change}
        placeholder="Gender"
        className="textBox"
      />
      <br />
      <input
        type="text"
        value={textBox2Value}
        onChange={handleTextBox2Change}
        placeholder="Equipment"
        className="textBox"
      />
      <br />
      <input
        type="text"
        value={textBox2Value}
        onChange={handleTextBox2Change}
        placeholder="Age division"
        className="textBox"
      />
      <br />
      <input
        type="text"
        value={textBox2Value}
        onChange={handleTextBox2Change}
        placeholder="Comparison category"
        className="textBox"
      />
    </div>
  );
}

export default TextBoxes;
