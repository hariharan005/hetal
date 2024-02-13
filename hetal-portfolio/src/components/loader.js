import React from "react";
import "../css/loader.css"
const Loader = ({ name }) => {
    return (
        <div className="loader-container">
            <p>{name}</p>
            <div className="spinner"></div>
        </div>
    );
};

export default Loader;