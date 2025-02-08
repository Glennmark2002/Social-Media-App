import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../firebase.js';
import Button from './Button.jsx';
import axios from 'axios';

function OAuth() {

	// const handleGoogleClick = async () => {

	// 	try {
			
	// 		const provider = new GoogleAuthProvider();
	// 		const auth = getAuth(app);

	// 		const result = await signInWithPopup(auth, provider);  
  //     const res = await fetch('/api/auth/google', {
  //       method : 'POST',
  //       headers : { 'Content-Type' : 'application/json' }, 
  //       body : JSON.stringify({
  //         name : result.user.displayName, 
  //         email : result.user.email,
  //         photo : result.user.photoURL
  //       })
  //     });

  //     const data = await res.json();
	// 		console.log(data);


	// 	} catch (error) {
			
	// 	}

	// }

  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
		const auth = getAuth(app);

    const result = await signInWithPopup(auth, provider);  

    console.log(result);

    // const res = await axios.post('http://localhost:3000/api/auth/signup',
    //  { name : result.user.displayName
    //    email : 
    //   } );
   
  }

  return <Button text='Continue with Google' type='button' onClick={handleGoogleClick} />
}

export default OAuth;
