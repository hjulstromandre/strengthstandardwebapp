import React, { useState } from 'react';
import './TextBoxes.css'; // Import CSS file for styling

function TextBoxes() {
  // Define state variables to store the values of your textboxes
  const [gender, setGender] = useState('');
  const [equipment, setEquipment] = useState('');
  const [ageDivision, setAgeDivision] = useState('');
  const [comparisonCategory, setComparisonCategory] = useState('');
  const [liftAmount, setLiftAmount] = useState('');

  // Event handler functions to update the state when the text in the textboxes change
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleEquipmentChange = (event) => {
    setEquipment(event.target.value);
  };

  const handleAgeDivisionChange = (event) => {
    setAgeDivision(event.target.value);
  };

  const handleComparisonCategoryChange = (event) => {
    setComparisonCategory(event.target.value);
  };

  const handleLiftAmountChange = (event) => {
    setLiftAmount(event.target.value);
  };

  // Event handler function for button click
  const handleClick = () => {
    // You can perform any action here when the button is clicked
    console.log('Button clicked!');
  };

  return (
    <div className="textBoxesContainer">
      {/* Render the textboxes */}
      <input
        type="text"
        value={gender}
        onChange={handleGenderChange}
        placeholder="Gender"
        className="textBox"
      />
      <br />
      <input
        type="text"
        value={equipment}
        onChange={handleEquipmentChange}
        placeholder="Equipment"
        className="textBox"
      />
      <br />
      <input
        type="text"
        value={ageDivision}
        onChange={handleAgeDivisionChange}
        placeholder="Age division"
        className="textBox"
      />
      <br />
      <input
        type="text"
        value={comparisonCategory}
        onChange={handleComparisonCategoryChange}
        placeholder="Comparison category"
        className="textBox"
      />
      <br />
      <input
        type="text"
        value={liftAmount}
        onChange={handleLiftAmountChange}
        placeholder="How much do you lift?"
        className="textBox"
      />
      <br />
      {/* Render the button */}
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default TextBoxes;
