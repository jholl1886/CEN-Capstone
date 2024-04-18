import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Card, CardBody, CardText, CardTitle, Button } from "react-bootstrap";
import blogs from "../blogs";

const PostScreen = () => {
    const { id: postId } = useParams();
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const blog = blogs.find((p) => p._id === postId);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleDislike = () => {
        setDislikes(dislikes + 1);
    };

    return (
        <>
            <Link className="btn btn-light my-3" to="/blogs">Go Back</Link>

            <h1>This Post</h1>

            {blog && (
                <Card>
                    <CardBody>
                        <CardTitle>{blog.subject}</CardTitle>
                        <CardText>Author: {blog.author}</CardText>
                        <CardText>Date: {blog.date}</CardText>
                        <CardText>{blog.content}</CardText>
                        <Button variant="success" onClick={handleLike}>Thumbs Up ({likes})</Button>{' '}
                        <Button variant="danger" onClick={handleDislike}>Thumbs Down ({dislikes})</Button>
                    </CardBody>
                </Card>
            )}
            {!blog && <p>Blog post not found</p>}
        </>
    );
}

export default PostScreen;