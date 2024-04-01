import {registerUser, loginUser} from '../services/auth.service.js';

export const register = async (req, res) => {
  try{

    const newUser = await registerUser(req.body);
    const {password, ...data} = newUser._doc;

    res.status(200).json({
      data,
      message: 'user has been registered successfully!'
    })
  }catch(error){
    res.status(500).json({
      error: error,
      message: 'Error Occured registering user'
    });
    console.log(error);
  }
}


export const login = async (req, res) => {
  try{
    const loggedInUser = await loginUser(req.body);
    const {password, ...data} = loggedInUser._doc;

    res.status(200).json({
      data,
      message: 'user has been logged in successfully!'
    })
  }catch(error){
    res.status(500).json({
      error: error,
      message: 'Error Occured login user'
    });
    console.log(error);
  }
}