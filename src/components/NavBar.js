import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
            <Link to="/">
            <img src="https://pbs.twimg.com/profile_images/1220285531164233729/A98RISKc_400x400.jpg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" style={{borderRadius: "100%", height: "50px", width: "50px"}} />
            </Link>    
                <Link className="navbar-brand mx-3" to="/">MAK News</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        {/* <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/business">Business</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/general">General</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/health">Health</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/science">Science</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sports">Sports</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/technology">Technology</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar