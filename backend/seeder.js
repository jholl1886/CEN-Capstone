import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';

import blogs from './data/blogs.js'
import User from './models/userModel.js';
import Post from './models/postModel.js';

import User from './models/userModel.js';

import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
 
    await User.deleteMany();

    await Post.deleteMany();

    const createdUsers = await User.insertMany(users);
    

    const adminUser = createdUsers[0]._id;

    const sampleBlogs = blogs.map((post) => {
      const submitter = createdUsers.find((user) => user.username === post.username)
      if (submitter) {
        return {...post, user:submitter._id };
      }
      else {
        return {...post, user:null };
      }
    });

    await Post.insertMany(sampleBlogs);


    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;


    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    
    await User.deleteMany();

    await Post.deleteMany();


    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}

}

