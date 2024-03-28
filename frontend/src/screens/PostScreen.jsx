import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";
import blogs from "../blogs"

const PostScreen = () => {
    const {id:postId } = useParams();
    const blog = blogs.find((p) => p._id === postId)

    return (
        <>
            <Link className="btn btn-light my-3" to="/blogs">Go Back</Link>

            
        </>
    );
}

export default PostScreen;

{/* WORK IN PPROGRESS*/}