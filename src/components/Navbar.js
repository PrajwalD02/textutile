import React from 'react';
// import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
                <div className="container-fluid" >
                    {/* <Link className="navbar-brand" to="/" style={{color: props.mode==='light'?'black':'white'}}>{props.title}</Link> */}
                    <a className="navbar-brand" href="#" style={{color: props.mode==='light'?'black':'white'}}>{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <Link className="nav-link active" aria-current="page" to="/" style={{color: props.mode==='light'?'black':'white'}}>Home</Link> */}
                                <a className="nav-link active" aria-current="page" href="#" style={{color: props.mode==='light'?'black':'white'}}>Home</a>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/about" style={{color: props.mode==='light'?'black':'white'}}>{props.about}</Link>
                            </li> */}


                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form> */}
                        <div className="form-check form-switch" style={props.txtColor}>
                            <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" style={{color: props.mode==='light'?'black':'white'}} forhtml="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    );
}


export default Navbar;