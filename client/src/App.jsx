import axios from 'axios';
import { useState } from 'react';

function App() {

  const [formData, setFormData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post('https://social-media-app-gje5.vercel.app/api', formData)
    .then((res) => console.log(res))
    .catch(error => console.log(error))

  }

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value });
    console.log(formData);
  }


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id='username' placeholder='Username'        onChange={handleChange}/>
      <input type="text" id='email' placeholder='Email'       onChange={handleChange}/>
      <button> Submit </button>
    </form>
  );
}

export default App;
