import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PostList from './components/PostList';
import PostView from './components/PostView';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <h1>My Personal Blog</h1>
                    </Link>
                    <p>A simple blog powered by React, Express, and Docker.</p>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<PostList />} />
                        <Route path="/posts/:id" element={<PostView />} />
                    </Routes>
                </main>
                <footer className="App-footer">
                    <p>© 2025 My Personal Blog</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;