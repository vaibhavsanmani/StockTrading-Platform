import React from 'react'  
import { Link } from 'react-router-dom';
function Navbar() {
    return (  
        <nav className="navbar navbar-expand-lg border-bottom"style={{backgroundColor: "#ffffff"}} >
                <div className="container " >
                    <Link className="navbar-brand" to="/">
                        <img src="/media/images/logo.svg" alt="Logo" style={{width:"30%"}}/>
                    </Link>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                        <ul className="navbar-nav mb-2">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">About</Link>
                            </li>
                             <li className="nav-item">
                                <Link className="nav-link active" to="/product">Product</Link>
                            </li>
                             <li className="nav-item">
                                <Link className="nav-link active" to="/pricing">Pricing</Link>
                            </li>
                             <li className="nav-item">
                                <Link className="nav-link active" to="/support">Support</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" style={{fontSize:"17px"}} href="#"><i className="fa-solid fa-bars"></i></a>
                            </li>
                            
                       
                    </ul>

                
                    </div>
                </div>
            </nav>
        );
}

export default Navbar;