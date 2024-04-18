import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Card, CardBody, CardText, CardTitle, Button, Form } from "react-bootstrap";
import blogs from "../blogs";

const PostScreen = () => {
    const { id: postId } = useParams();
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [replyText, setReplyText] = useState("");
    const [showReplyField, setShowReplyField] = useState(false);
    const blog = blogs.find((p) => p._id === postId);
    const [replies, setReplies] = useState(blog && blog.replies ? blog.replies : []); // Ensure replies is initialized properly
    // const { blogs, setBlogs } = useContext(BlogContext);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleDislike = () => {
        setDislikes(dislikes + 1);
    };

    const handleReplyChange = (e) => {
        setReplyText(e.target.value);
    };

    const handleReplySubmit = () => {
        if (replyText.trim() !== "") {
            const newReply = {
                username: 'currentUsername', // Replace 'currentUsername' with the actual username of the user posting the reply
                content: replyText,
                likes: 0,
                dislikes: 0
            };
            setReplies([...replies, newReply]);
            setReplyText("");
            setShowReplyField(false); // Hide reply field after submission
            
        }
    };

    const handleReplyLike = (index) => {
        const updatedReplies = [...replies];
        updatedReplies[index].likes++;
        setReplies(updatedReplies);
    };

    const handleReplyDislike = (index) => {
        const updatedReplies = [...replies];
        updatedReplies[index].dislikes++;
        setReplies(updatedReplies);
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
                        <Button variant="danger" onClick={handleDislike}>Thumbs Down ({dislikes})</Button>{' '}
                        <Button variant="primary" onClick={() => setShowReplyField(true)}>Reply</Button>
                        {showReplyField && (
                            <Form.Group controlId="replyForm">
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Enter your reply"
                                    value={replyText}
                                    onChange={handleReplyChange}
                                />
                                <Button variant="primary" onClick={handleReplySubmit}>Submit</Button>
                            </Form.Group>
                        )}
                    </CardBody>
                </Card>
            )}
            {!blog && <p>Blog post not found</p>}

            {/* Display replies */}
            <h2>Replies</h2>
            {replies.map((reply, index) => (
                <Card key={index}>
                    <CardBody>
                        <CardText>Username: {reply.username}</CardText>
                        <CardText>{reply.content}</CardText>
                        <Button variant="success" onClick={() => handleReplyLike(index)}>Like ({reply.likes})</Button>{' '}
                        <Button variant="danger" onClick={() => handleReplyDislike(index)}>Dislike ({reply.dislikes})</Button>
                    </CardBody>
                </Card>
            ))}
        </>
    );
}

export default PostScreen;