import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Loading from "../components/Loading";

function Signin() {

	const [loading, setLoading] = useState(false	);

	const handleChange = (e) => {

	}



  return (
    <div className='max-h-screen h-screen flex justify-center items-center'>
			<form className='max-w-lg p-4 flex flex-col items-center gap-4 w-full'>
				<h1 className='text-4xl font-bold'> SIGN IN</h1>
				<Input type='email'    placeholder='Email'    id='email'    onChange={handleChange} />
				<Input type='password' placeholder='Password' id='password' onChange={handleChange} />
				<Button text={loading ? <Loading /> : 'Sign-in'} />
				<div className="pl-2 flex max-w-sm w-full gap-2">
          <p> Don't have account? - </p>
          <Link to='/sign-up' className='text-blue-500'> Sign up </Link>
        </div>
			</form>
    </div>
  );
}

export default Signin;
