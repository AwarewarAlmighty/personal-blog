import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function PostView() {
    const [post, setPost] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`/api/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
            .catch(err => console.error("Failed to fetch post:", err));
    }, [id]);

    if (!post) return <div>Loading...</div>;

    return (
        <div className="post-view">
            <Link to="/">&larr; Back to Posts</Link>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}

export default PostView;