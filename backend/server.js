import express from 'express'
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import connectDB from './config/db.js';
const port = process.env.PORT || 5000;
import userRoutes from './routes/userRoutes.js';
connectDB();
const app = express(); 

//Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Cookie parser
app.use(cookieParser());    


app.get('/', (req, res) => {
    res.send('API is running...');
});

app.get('/api/blogs', (req, res) => {
    res.json(blogs);
});

app.get('/api/blogs/:id', (req, res) => {
    const blog = blogs.find((p) => p._id === req.params.id)
    res.json(blog);
});



app.use('/api/users', userRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));