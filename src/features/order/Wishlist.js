import React, { useEffect } from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';
//npm install bootstrap
//npm install mdb-react-ui-kit
//npm update @mui/base
//npm update @popperjs/core
//npm install @material-ui/core@^4.11.2 react@^17.0.0
//npm install @popperjs/core@2.11.6
//npm install @mui/base@latest
//npm install @popperjs/core@latest

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';


const Wishlist = () => {
    useEffect(() => {
        const tooltips = document.querySelectorAll('.material-tooltip-main');
        tooltips.forEach((tooltip) => {
            new window.bootstrap.Tooltip(tooltip, {
                template:
                    '<div class="tooltip md-tooltip-main"><div class="tooltip-arrow md-arrow"></div><div class="tooltip-inner md-inner-main"></div></div>',
            });
        });
    }, []);


    return (
        <>
            <div className="skin-light">
                {/* Main layout */}
                <main>
                    <div className="container">
                        {/* Section: Block Content */}
                        <section>
                            {/* Grid row */}
                            <div className="row">
                                {/* Grid columns */}
                                <div className="col-md-4 mb-5">
                                    {/* Card */}
                                    <div className="">

                                        <div className="view zoom overlay z-depth-2 rounded">
                                            <img className="img-fluid w-100"
                                                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg" alt="Sample" />
                                            <a href="#!">
                                                <div className="mask">
                                                    <img className="img-fluid w-100"
                                                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg" />
                                                    <div className="mask rgba-black-slight"></div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="text-center pt-4">

                                            <h5>Blue denim shirt</h5>
                                            <p className="mb-2 text-muted text-uppercase small">Shirts</p>
                                            <ul className="rating">
                                                <li>
                                                    <MDBIcon icon="star" className="fa-sm text-primary" />
                                                </li>
                                                <li>
                                                    <MDBIcon icon="star" className="fa-sm text-primary" />
                                                </li>
                                                <li>
                                                    <MDBIcon icon="star" className="fa-sm text-primary" />
                                                </li>
                                                <li>
                                                    <MDBIcon icon="star" className="fa-sm text-primary" />
                                                </li>
                                                <li>
                                                    <MDBIcon icon="star" className="fa-sm text-primary" />
                                                </li>
                                            </ul>
                                            <hr />
                                            <h6 className="mb-3">17.99 $</h6>
                                            <button type="button" className="btn btn-primary btn-sm mr-1 mb-2"><i
                                                className="fas fa-shopping-cart pr-2"></i>Add to cart</button>
                                            <button type="button" className="btn btn-light btn-sm mr-1 mb-2"><i
                                                className="fas fa-info-circle pr-2"></i>Details</button>
                                            <button type="button" className="btn btn-elegant btn-sm px-3 mb-2 material-tooltip-main"
                                                data-toggle="tooltip" data-placement="top" title="Remove from wishlist"><i
                                                    className="fas fa-times"></i></button>

                                        </div>

                                    </div>
                                    {/* Card */}
                                </div>
                                {/* Grid column */}

                                {/* Add similar code for the other two cards */}

                            </div>
                            {/* Grid row */}
                        </section>
                        {/* Section: Block Content */}
                    </div>
                </main>
                {/* Main layout */}

                {/* Footer */}
                <footer className="page-footer font-small elegant-color">
                    {/* Add your footer content here */}
                </footer>
                {/* Footer */}

            </div>
        </>
    );
}

export default Wishlist;





const header = () => {

    return (<>

        {/* Main Navigation */}
        <header>

            {/* Navbar */}
            <nav className="navbar navbar-expand-md navbar-light fixed-top scrolling-navbar">
                <div className="container-fluid">

                    {/* Brand */}
                    <a className="navbar-brand" href="https://mdbecommerce.com/">
                        <MDBIcon fab icon="mdb" size="3x" alt="mdb logo" />
                    </a>

                    {/* Collapse button */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                        aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Links */}
                    <div className="collapse navbar-collapse" id="basicExampleNav">
                        {/* Right */}
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="#!" className="nav-link navbar-link-2 waves-effect">
                                    <span className="badge badge-pill red">1</span>
                                    <MDBIcon icon="shopping-cart" className="pl-0" />
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle waves-effect" id="navbarDropdownMenuLink3" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="true">
                                    <i className="flag-icon flag-icon-gb"></i>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="#!">Action</a>
                                    <a className="dropdown-item" href="#!">Another action</a>
                                    <a className="dropdown-item" href="#!">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a href="#!" className="nav-link waves-effect">
                                    Shop
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#!" className="nav-link waves-effect">
                                    Contact
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#!" className="nav-link waves-effect">
                                    Sign in
                                </a>
                            </li>
                            <li className="nav-item pl-2 mb-2 mb-md-0">
                                <a href="#!" type="button"
                                    className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light">Sign up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Navbar */}

            <div className="jumbotron color-grey-light mt-70">
                <div className="d-flex align-items-center h-100">
                    <div className="container text-center py-5">
                        <h3 className="mb-0">Wishlist</h3>
                    </div>
                </div>
            </div>

        </header>
        {/* Main Navigation */}
    </>
    )
}