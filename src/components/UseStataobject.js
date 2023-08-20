import React , {useState}from 'react'
import '../App.css';

const UseStataobject = () => {
    const[state, setsateta] = useState({
        myname : "Insha yaqoob", myage : 26 , class : "BSSE"
    })
    const changes = ()=>{
        setsateta({...state, myname : "INSHA"})
    }
  return (
    <>

    <h1 className='h1styling'>Name : {state.myname} & Age : {state.myage} and class : {state.class}</h1>
    <button className='btn' onClick={changes}>Update</button>
    </>
  )
}

export default UseStataobject;