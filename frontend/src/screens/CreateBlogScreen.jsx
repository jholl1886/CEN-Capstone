import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from "react-bootstrap";  
import Blog from "../components/Blog";
import blogs from '../blogs';
import useBlogs from '../blogs';

const CreateBlogScreen = ({ addBlog }) => {
  const [author, setAuthor] = useState(''); // Default author value
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("blog post created");
    // Create a new blog object
    const newBlog = {
      _id: (blogs.length + 1).toString(), // Generate a unique ID
      author: author || 'Anonymous', // Default to 'Anonymous' if author is not provided
      subject,
      content,
      tag,
    };

    // Add the new blog to the list of blogs
    //addBlog(newBlog);



  };

  return (
    <>
      <Link className="btn btn-light my-3" to="/blogs">
        Go Back
      </Link>

      <h1>Create Blog</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            type="text"
            className="form-control"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            className="form-control"
            id="content"
            rows="3"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default CreateBlogScreen;