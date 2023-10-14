import React, { useState } from "react";
import "./styles.css";

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = () => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const ageInYears = today.getFullYear() - birthDateObj.getFullYear();

    setAge(`${ageInYears} years`);
  };

  return (
    <div>
      <h1>Age Calculator</h1>
      <div>
      <h4>Enter your date of birth</h4>
      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      </div>
      <div>
      <button onClick={calculateAge}>Calculate Age</button>
      </div>
      <p>Your age is: {age}</p>
    </div>
  );
};

export default AgeCalculator;