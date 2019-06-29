import React from 'react';
import { Link } from "react-router-dom";

const Homepage = ({ currentUser }) => {
    if(!currentUser.isAuthenticated){
        return (
            <div className="home-hero">
                <h1>Welcome to Silver Telegram</h1>
                <Link to="/signup" className="btn btn-primary">
                    Sign Up here
                </Link>
            </div>
        );
    }
    return (
        <div>
            <h1>You Made It</h1>
        </div>
    );
};

export default Homepage;