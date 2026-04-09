import React from 'react'  
import { Link } from 'react-router-dom';
function Navbar() {
    return (  
        <nav class="navbar navbar-expand-lg border-bottom"style={{BackgroundColor: "#ffffff"}} >
                <div class="container " >
                    <Link class="navbar-brand" to="/">
                        <img src="media/images/logo.svg" alt="Logo" style={{width:"30%"}}/>
                    </Link>
                    
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <form class="d-flex">

                        <ul class="navbar-nav mb-2">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/signup">Signup</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/about">About</Link>
                            </li>
                             <li class="nav-item">
                                <Link class="nav-link active" to="/product">Product</Link>
                            </li>
                             <li class="nav-item">
                                <Link class="nav-link active" to="/pricing">Pricing</Link>
                            </li>
                             <li class="nav-item">
                                <Link class="nav-link active" to="/support">Support</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" style={{fontSize:"17px"}} href="#"><i class="fa-solid fa-bars"></i></a>
                            </li>
                            
                       
                    </ul>

                    </form>
                    </div>
                </div>
            </nav>
        );
}

export default Navbar;