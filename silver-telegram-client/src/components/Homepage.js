import React from 'react';
import { Link } from "react-router-dom";

const Homepage = () => (
    <div className="home-hero">
        <h1>Welcome to Silver Telegram</h1>
        <Link to="/signup" className="btn btn-primary">
            Sign Up here
        </Link>
    </div>
);

export default Homepage;