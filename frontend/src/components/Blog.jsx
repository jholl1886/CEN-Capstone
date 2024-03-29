import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
    return (
      <Card className="my-3 p-3 rounded">
        <a href={`/blog/${blog._id}`}></a>
  
        <CardBody>
          <Link to={`/blogs/${blog._id}`}>
            <CardTitle as="div">
              <strong>{blog.subject}</strong>
              {' : '} {/* Adding space */}
              <sub>By {blog.author}</sub> {/* Author as subscript */}
            </CardTitle>
          </Link>
  
          <CardText as="h3">{blog.content}</CardText>

          <CardText>Tags: {blog.tag}</CardText>
        </CardBody>
      </Card>
    );
  };
  
  export default Blog;
  