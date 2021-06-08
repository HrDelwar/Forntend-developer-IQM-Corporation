import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light mb-5">
            <div className="container">
                <a className="navbar-brand" href="/"><img src="https://w7.pngwing.com/pngs/69/539/png-transparent-stack-overflow-stack-exchange-programmer-logo-others.png" width="200" alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;