const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// In-memory database
const posts = [
    { id: 1, title: 'Dockerizing a React App', content: 'This is a post about Dockerizing a React application with a multi-stage build...' },
    { id: 2, title: 'Express API Best Practices', content: 'Here are some best practices for building a RESTful API with Express...' }
];

// Middleware
app.use(cors());
app.use(express.json());

// --- Routes ---

// Health check route
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Get all posts
app.get('/api/posts', (req, res) => {
    res.json(posts);
});

// Get a single post by ID
app.get('/api/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
});

// --- Error Handling ---
app.use((req, res) => {
    res.status(404).send("Sorry, can't find that!");
});

app.listen(PORT, () => {
    console.log(`🚀 Backend server running on port ${PORT}`);
});