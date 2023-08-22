import React, {useState, useEffect} from 'react'

const UseEffects = () => {
  const styling = {
   backgroundColor: 'red',
   color : 'white',
   padding : '10px',
   width : '75px'
  }
const[count, setcounts] = useState(0)
const changedCounts = ()=>{
    setcounts(count +1)
}
useEffect(()=>{
 document.title = `chats(${count})`;
})
  return (
    <>
   <h1>{count}</h1>
   <button style={styling} className='buttons' onClick={changedCounts}>Click👍</button>
   </>
  )
}

export default UseEffects