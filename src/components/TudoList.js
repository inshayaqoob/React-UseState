import React, { useState } from 'react';
import './Tudo.css'; // Import your CSS file for styling

const TudoList = () => {
  const initialBiodata = [
    {
      id: 0,
      myName: "INSHA YAQOOB",
      myage: 30
    }
  ];
  const initiadata = [
    {
      id: 1,
      myName: "INSHA",
      myage: 21
    }
  ];

  const [myarray, setMyArray] = useState(initialBiodata);
  const [setaaray, setarray] = useState(initiadata);

  const clearData = () => {
    setMyArray([]);
  };
  const clearDataa = () => {
    setarray([]);
  };

  return (
    <div className='container'>
      <div className='data-container'>
        {myarray.map((curElem) => (
          <div key={curElem.id} className='card'>
            <h1 className='h1styling'>
              <span className='data-item'>
                Name: {curElem.myName} & My Age: {curElem.myage}
              </span>
              <button className='btn remove-btn' onClick={clearData}>
                Remove
              </button>
            </h1>
          </div>
        ))}
      </div>
      <div className='data-container'>
        {setaaray.map((curElem) => (
          <div key={curElem.id} className='card'>
            <h1 className='h1styling'>
              <span className='data-item'>
                Name: {curElem.myName} & My Age: {curElem.myage}
              </span>
              <button className='btn remove-btn' onClick={clearDataa}>
                Remove
              </button>
            </h1>
          </div>
        ))}
      </div>
      <button className='clear-button' onClick={() => { clearData(); clearDataa(); }}>
        Clear All
      </button>
    </div>
  );
};

export default TudoList;
