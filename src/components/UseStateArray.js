import React, { useState } from 'react';
import '../App.css';

const UseStateArray = () => {
    const initialBiodata = [
        {
            id: 0,
            myName: "INSHA YAQOOB",
            myage: 30
        },
        {
            id: 1,
            myName: "INSHA",
            myage: 21
        }
    ];

    const [myarray, setMyArray] = useState(initialBiodata);

    const clearData = () => {
        setMyArray([]); // Clears the data array
    };

    return (
        <div className='container'>
            {myarray.map((curElem) => (
                <div key={curElem.id} className='card'>
                    <h1 className='h1styling'>
                        Name: {curElem.myName} & My Age: {curElem.myage}
                    </h1>
                </div>
            ))}
            {myarray.length > 0 && (
                <button className='btn' onClick={clearData}>
                    Clear Data
                </button>
            )}
        </div>
    );
};

export default UseStateArray;
