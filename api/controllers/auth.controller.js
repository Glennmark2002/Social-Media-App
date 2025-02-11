import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {

  const { username, email, password, confirmPassword } = req.body;

  try {

    if(password === confirmPassword) {

      const hashed = bcrypt.hashSync(password, 1);
      const newUser = User({username, email, password:hashed});
      await newUser.save();
      res.status(201).json({message : 'User created successfully!'});

    } else { 

      res.status(401).json({message : 'Password does not match!'});

    }
    
  } catch (error) {

    next(error);
    
  }

}

export const signin = async (req, res, next) => {

  const { email, password } = req.body;

  try {

    const validUser = await User.findOne({ email });
    if(!validUser) return next(errorHandler(404, 'User not found'));

    const validPassword = bcrypt.compareSync(password, validUser.password);
    if(!validPassword) return next(errorHandler(401, 'Wrong credentials'));

    const token = jwt.sign({id: validUser._id}, process.env.SECRET);
    const { password: _password, ...rest } = validUser._doc;
    const expiryDate = new Date(Date.now() + 3600000);  

    res.cookie('access_token', token, { httpOnly: true, expires: expiryDate })
       .status(200)
       .json(rest);

  } catch (error) {

    next(error);
    
  }

}

export const google = async (req, res, next) => {

  try {

    const user = await User.findOne({ email: req.body.email }); 

    if(user) { 
      
      const token = jwt.sign({id : user._id}, process.env.SECRET);
      const { password: _password, ...rest } = user._doc;
      createCookie(token, rest, res);  

    } else { 

      const hashed = bcrypt.hashSync('Password', 10);
      const newUser = new User({

        username : req.body.name,
        email : req.body.email,
        password : hashed,
        picture: req.body.photo

      }); 

      await newUser.save();

      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET); 
      const { password: _password2, ...rest} = newUser._doc;
      createCookie(token, rest, res);   

    }
    
  } catch (error) {

    next(error);
    
  }

}

export const signout = async (req, res) => {
  res.clearCookie('access_token').status(200).json('Signout Success');
}

function createCookie(token, rest, res) {

  const expires = new Date(Date.now() + 3600000); 
  res.cookie('access_token', token, {
    htppOnly: true,
    expires 
  }).status(200).json(rest); 

  console.log(res);

}