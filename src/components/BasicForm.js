import React, {useState}   from 'react'
import './Form.css'
const BasicForm = () => {
  const[email, setemail] = useState('');
  const[password, setpassword] = useState('');
  const chnagedpassword = (e) => {
    setpassword(e.target.value);
  }
  const chnagedemail = (e) => {
    setemail(e.target.value);
  }
  const[Allentry, setnewentry] = useState([]);
  const Submitted = (e) =>{
    e.preventDefault();
    const newEntry = {email : email, password : password};
    setnewentry([...Allentry, newEntry])

  }


  return (
    <>
    <form action='' onSubmit={Submitted}>
        <div>
        <label htmlFor='email'>Email</label>
        <input type='text' name='email' id='email' autoComplete="off" value={email} onChange={chnagedemail}></input>
        </div>
        <div>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' autoComplete="off"value={password} onChange={chnagedpassword}></input>

        </div>
        <button type='submit' name='submit' id='submit'>Login</button>

    </form>
    <div>

       {
        Allentry.map((curElem) => {
          return(
           <div className='inputss'>
            <p>{curElem.email}</p>
            <p>{curElem.password}</p>
            </div>
          )
        })
       }
    </div>
    
    
    </>
  )
}

export default BasicForm;