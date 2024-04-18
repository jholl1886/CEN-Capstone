import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

    const authUser = asyncHandler(async (req, res) => {
        const { email, password } = req.body;
      
        const user = await User.findOne({ email });
      
        if (user && (await user.matchPassword(password))) {
            const token = jwt.sign({ id: user._id }, process.env.
                JWT_SECRET, {
                    expiresIn: '30d',
                }); 

         res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'strict',
            maxAge: 30 * 24 * 60 * 60 * 1000,
          });   
          res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
          });
        } else {
          res.status(401);
          throw new Error('Invalid email or password');
        }
      });

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
  
    if (userExists) {
      res.status(400);
      throw new Error('User already exists');
    }
  
    const user = await User.create({
      name,
      email,
      password,
    });
  
    if (user) {
      generateToken(res, user._id);
  
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }});


const logoutUser = asyncHandler(async (req, res) => {
    res.send('logout user');
  })


const getUserProfile = asyncHandler(async (req, res) => {
    res.send('get user profile');
  });


const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('update user profile');

});

const getUsers = asyncHandler(async (req, res) => {
    res.send('get all users');

});


const deleteUser = asyncHandler(async (req, res) => {
    res.send('delete user profile');

});


const getUserById = asyncHandler(async (req, res) => {
    res.send('get user by id');

});

const updateUser = asyncHandler(async (req, res) => {
    res.send('update user');

});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};