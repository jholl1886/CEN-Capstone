import { Row, Col } from "react-bootstrap";  
import { Link } from "react-router-dom";
import Blog from "../components/Blog";
import blogs from '../blogs';

const BlogScreen = () => {
    return (
        <>
            <Link className="btn btn-light my-3" to="/">Go Back</Link>

            <h1>Latest Blogs</h1>
            <Row>
                {blogs.map((blog) => (
                  <Col key={blog._id} sm={12} md={6} lg={4} xl={3}>
                    <Blog blog={blog}/>
                  </Col>  
                
                ))}
            </Row>
        
        </>
    )
}
export default BlogScreen