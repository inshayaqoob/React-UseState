import React , {useState, useEffect} from 'react'


const Useeffect2 = () => {
    const[width, setwidth] = useState(window.screen.width);
    const resize =  () => {
        setwidth(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener('resize', resize)
    })
  return (
   <>
    <h1>Window Size is </h1>
    <br></br>
    <br></br>
    <h1>{width}</h1>
   </>
  )
}

export default Useeffect2;