import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../firebase.js';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInSuccess } from '../redux/user/userSlice.js';
import Button from './Button.jsx';
import axios from 'axios';
  
function OAuth() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {

    try {

      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);  

      const res = await axios.post('https://social-media-app-gje5.vercel.app/api/auth/google', {
        name  : result.user.displayName,
        email : result.user.email,
        photo : result.user.photoURL
      });

      dispatch(signInSuccess(res));
      navigate('/')
      
    } catch (error) {

      console.log('Could not login with google', error);
      
    }
    
  }

  return <Button text='Continue with Google' type='button' onClick={handleGoogleClick} />
}

export default OAuth;
