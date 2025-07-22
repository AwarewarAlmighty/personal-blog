import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // The /api prefix will be proxied by Nginx to the backend service
        fetch('/api/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(err => console.error("Failed to fetch posts:", err));
    }, []);

    return (
        <div className="post-list">
            <h2>Latest Posts</h2>
            {posts.map(post => (
                <article key={post.id} className="post-excerpt">
                    <h3>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p>{post.content.substring(0, 100)}...</p>
                </article>
            ))}
        </div>
    );
}

export default PostList;