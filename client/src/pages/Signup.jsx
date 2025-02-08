import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import OAuth from "../components/OAuth";

function Signup() {

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id] : e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    try {

      const res = await fetch('/api/auth/signup', {
        method : 'POST',
        headers : { 'Content-Type' : 'application/json' },  
        body : JSON.stringify(formData)
      });
  
      const data = await res.json();  
      console.log(data);
      if(data.success === false) return
      
      

      // navigate('/sign-in'); 
      
    } catch (error) {
      console.log(error)
    }
  
  }

  return (
    <div className='max-h-screen h-screen flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='max-w-lg p-4 flex flex-col items-center gap-4 w-full' >
        <h1 className='text-4xl font-extrabold'> SIGN UP</h1>
        <Input type='text'     placeholder='Username'         id='username'        onChange={handleChange} />
        <Input type='email'    placeholder='Email'            id='email'           onChange={handleChange} />
        <Input type='password' placeholder='Password'         id='password'        onChange={handleChange} />
        <Input type='password' placeholder='Confirm Password' id='confirmPassword' onChange={handleChange} />
        <Button text='Create' />
        <OAuth />
      </form>
    </div>
  );
}

export default Signup;
