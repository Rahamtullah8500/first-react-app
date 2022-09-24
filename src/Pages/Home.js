import React from "react";
import { Link } from "react-router-dom";
import './home.css';

export default function Home() {
    return (
        <div className="head">
            <nav className=" navbar">
                <ul>
                    <li><Link to="/cards" > Home </Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/News">News</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/careers">Careers</Link></li>
                </ul>
            </nav>
          
        </div>   
    )
};

