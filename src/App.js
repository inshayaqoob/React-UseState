import React , {useState} from 'react';
// import UseStateArray from './components/UseStateArray';
// import UseStataobject from './components/UseStataobject';
import TudoList from './components/TudoList';

const App = () => {
// In useState first value is current value and we store it into variable name myNAME and then other value it take is function and then we define it setMyname when this one function and here we give new value because we define this one function on inside the fucntion that call when we clicked on the button 
//  const[myNAME, setMyname ] = useState("INSHA YAQOOB")
//   const changestatement = () =>{
//     setMyname("BY click on it changed to INSHA")
    

//   }
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "gray"
  };

//   const headingStyle = {
//     margin: 0,
//     textAlign: "center"
//   };

//   const buttonStyle = {
//     backgroundColor: "#007BFF",
//     color: "white",
//     padding: "10px 20px",
//     border: "none",
//     borderRadius: "5px",
//     marginTop: "10px",
//     cursor: "pointer"
//   };

  return (
    <div style={containerStyle}>
    {/* //   <h1 style={headingStyle}>{myNAME}</h1>
    //   <button style={buttonStyle} onClick={changestatement}>Click me plz</button> */}
      {/* <UseStateArray /> */}
       {/* <UseStataobject /> */}
       <TudoList />
    </div>
  );
}
export default App;
