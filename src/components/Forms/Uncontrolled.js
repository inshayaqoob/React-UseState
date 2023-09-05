import React, { useRef, useState } from 'react';

const Uncontrolled = () => {
  const[show, setshow] = useState(false)
  const luckynumber = useRef(null);

  const formsubmitted = (e) => {
    e.preventDefault();
    // You can access the value of luckynumber using luckynumber.current.value
    const name =  luckynumber.current.value
    name === "" ? alert("Please enter name here ") : setshow(true);
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    // backgroundColor: '#f0f0f0', // Light gray background color for the container
  };

  const formStyle = {
    backgroundColor: '#3498db', // Blue background color for the form
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Add a slight shadow to the form
  };

  const labelStyle = {
    color: 'white',
  };

  const inputStyle = {
    width: '100%',
    padding: '5px',
    marginBottom: '10px',
    border: 'none',
    borderRadius: '5px',
  };

  const buttonStyle = {
    backgroundColor: '#2ecc71', // Green background color for the button
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s', // Add a smooth color transition
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={formsubmitted}>
        <div>
          <label htmlFor='luckynumber' style={labelStyle}>
            Enter your luckyName
          </label>
          <input type='text' id='luckynumber' ref={luckynumber} style={inputStyle} />
        </div>
        <button style={buttonStyle}>Submit</button>
      </form>
      <p> {show ?  `You luckyName is ${luckynumber.current.value}`: ""}
      </p>
    </div>
  );
};

export default Uncontrolled;
