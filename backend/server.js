import express from 'express'
const port = 5000;

const app = express(); 

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


app.listen(port, () => console.log(`Server is running on port ${port}`));