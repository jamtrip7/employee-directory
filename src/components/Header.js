import React from "react";

function Header() {
    return (
        <div className="jumbotron jumbotron-fluid bg-dark">
            <div className="container text-white">
                <u><h1 className="display-4 text-center mb-3">Employee Directory</h1></u>
                <p className="lead text-center">Search the directory to get any employees info.</p>
            </div>
        </div>
    );
}

export default Header;