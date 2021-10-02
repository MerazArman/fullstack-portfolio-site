import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item  mr-4">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item  mr-4">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item  mr-4">
                            <a className="nav-link" href="#">Skills</a>
                        </li>
                        <li className="nav-item  mr-4">
                            <a className="nav-link ">Portfolio</a>
                        </li>
                        <li className="nav-item  mr-4">
                            <a className="nav-link ">Contact</a>
                        </li>
                        <li className="nav-item  mr-4">
                           <button className="btn btn-resume"> Resume </button>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;