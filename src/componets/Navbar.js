import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



export default function Navbar(props) {
    return (
        <>

        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{fontSize: 22,fontWeight: 'bold'}}>{props.title} 💫  |</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" style={{fontSize: 20}} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{fontSize: 20}} to="/About">About</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-primary" type="submit">Search</button>
                        </form>

                        <div className={`form-check form-switch mx-4 text-${props.mode==='ligth'?'dark':'white'}`}>
                            <input className="form-check-input" style={{cursor:'pointer'}} onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

// text-${props.mode==='ligth'?'dark':'ligth'}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Text Editer",
}

