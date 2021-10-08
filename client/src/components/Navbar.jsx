import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav>

                <div className="container">
                    <div className="row_help ">
                        <div className="left">
                            <ul>
                            <li><Link to="/help"><i className="icon icon-question-circle"></i>Help</Link></li>
                            <li><Link to="/track-order">Track Order</Link></li>
                            </ul>
                        </div>
                        <div className="right">
                            <ul>
                            <li><Link to="/">Stores</Link></li>
                            <li><Link to="/">Bulk Orders</Link></li>
                            <li><Link to="/aboutus"><i className="icon icon-phone"></i> Contact Us</Link></li>
                            </ul>
                        </div>
                        
                    </div>

                    {/* <!-- ==========  Top navigation ========== --> */}

                    <div className="navigation navigation-top clearfix">
                        <ul>
                            {/* <!--add active class for current page--> */}
                            <li className="left-side"><Link to="/" className="logo-icon"><img src="assets/images/header-logo.png" alt="Alternate Text" width="70" height="70" /></Link></li>
                            <li><Link to="/login" className="open-login"><i className="icon icon-user" data-bs-toggle="tooltip" data-bs-placement="bottom" title="User Login"></i></Link></li>
                            <li><Link to="/" className="open-search"><i className="icon icon-magnifier" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Open Search"></i></Link></li>
                            <li><Link to="/" className="open-favourite"><i className="icon icon-heart" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Wishlist"></i></Link></li>
                            <li><Link to="/cart" className="open-cart"><i className="icon icon-cart" data-bs-toggle="tooltip" data-bs-placement="bottom" title="View Cart"></i> <span>0</span></Link></li>
                        </ul>
                    </div>

                    {/* <!-- ==========  Main navigation ========== --> */}

                    <div className="navigation navigation-main">
                        <Link to="/" className="logo-icon left-side"><img src="assets/images/header-logo.png" alt="BS" width="50" height="50" /></Link>
                        <Link to="/" className="open-login"><i className="icon icon-user"></i></Link>
                        <Link to="/" className="open-search"><i className="icon icon-magnifier"></i></Link>
                        <Link to="/cart" className="open-cart"><i className="icon icon-cart"></i> <span>4</span></Link>
                        <Link to="/" className="open-menu"><i className="icon icon-menu"></i></Link>

                        <div className="floating-menu">
                            {/* <!--mobile toggle menu trigger--> */}
                            <div className="close-menu-wrapper">
                                <span className="close-menu"><i className="icon icon-cross"></i></span>
                            </div>
                            <ul>
                                <li>
                                    
                                    <a href="/">SALE <span className="open-dropdown"><i className="fa fa-angle-down"></i></span></a>
                                    <div className="navbar-dropdown">
                                        <div className="navbar-box">
                                            <div className="box-lg">
                                                <div className="box clearfix">
                                                    <div className="row">
                                                        <div className="col-lg-3">
                                                            <ul>
                                                                <li className="label">Deals of the week</li>
                                                                <li><a href="index.html">Wooden Sofa Sets</a></li>
                                                                <li><a href="/">Living Seating</a></li>
                                                                <li><a href="/">Living Essential</a></li>
                                                                <li><a href="/">Study Tables</a></li>
                                                                <li><a href="/">Study Chairs</a></li>
                                                                <li><a href="/">Beds</a></li>
                                                                <li><a href="/">Dining</a></li>
                                                                <li><a href="/">Mattresses</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul>
                                                                <li className="label">Promotions</li>
                                                                <li><a href="/">Products at 40% off</a></li>
                                                                <li><a href="/">Products at 30% off</a></li>
                                                                <li><a href="/">Products at 25% off</a></li>
                                                                <li><a href="/">Products at 20% off</a></li>
                                                                <li><a href="/">Products at 15% off</a></li>
                                                                <li><a href="/">Products at 10% off</a></li>
                                                                <li><a href="/">All Products on Sale</a></li>

                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul>
                                                                <li className="label">Stores</li>
                                                                <li><a href="/">Hyderabad</a></li>
                                                                <li><a href="/">Pune</a></li>
                                                                <li><a href="/">Mumbai</a></li>
                                                                <li><a href="/">Bangalore</a></li>
                                                                <li><a href="/">NCR</a></li>
                                                                <li><a href="/">Chennai</a></li>
                                                                <li><a href="/">Kolkata</a></li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="/">LIVING <span className="open-dropdown"><i className="fa fa-angle-down"></i></span></a>
                                    <div className="navbar-dropdown">
                                        <div className="navbar-box">
                                            <div className="box-lg">
                                                <div className="box clearfix">
                                                    <div className="row">
                                                        <div className="col-lg-2">
                                                            <ul>
                                                                <li className="label">Sofa Set</li>
                                                                <li><a href="/">Fabric sofa set</a></li>
                                                                <li><a href="/">L Shaped Sofa set</a></li>
                                                                <li><a href="/">Wooden Sofa set</a></li>
                                                                <li><a href="/">Leather Sofa set</a></li>
                                                                <li><a href="/">Loveseats</a></li>
                                                                <li><a href="/">Futons</a></li>
                                                                <li><a href="/">Diwans</a></li>
                                                                <li><a href="/">Sofas</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-2">
                                                            <ul>
                                                                <li className="label">Sofa Bed</li>
                                                                <li><a href="/">Sofa cum Beds</a></li>
                                                                <li><a href="/">Fabric Sofa Beds</a></li>
                                                                <li><a href="/">Wooden Sofa Beds</a></li>
                                                                <li><a href="/">Click Clack Sofa Beds</a></li>
                                                                <li><a href="/">Pull Out Sofa Beds</a></li>

                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-2">
                                                            <ul>
                                                                <li className="label">Chairs</li>
                                                                <li><a href="/">Lounge Chairs</a></li>
                                                                <li><a href="/">Recliners</a></li>
                                                                <li><a href="/">Rocking Chairs</a></li>
                                                                <li><a href="/">Accent Chairs</a></li>
                                                                <li><a href="/">Designer Chairs</a></li>
                                                                <li><a href="/">Gaming Chairs</a></li>
                                                                <li><a href="/">Ottomans & Stools</a></li>
                                                                <li><a href="/">Benches</a></li>
                                                                <li><a href="/">Bar Stools</a></li>
                                                                <li><a href="/">Bean Bags</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-2">
                                                            <ul>
                                                                <li className="label">Tables</li>
                                                                <li><a href="/">Coffee Tables</a></li>
                                                                <li><a href="/">Nested Tables</a></li>
                                                                <li><a href="/">Side & End Tables</a></li>
                                                                <li><a href="/">Console Tables</a></li>
                                                                <li><a href="/">Study Tables</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-2">
                                                            <ul>
                                                                <li className="label">Storage</li>
                                                                <li><a href="/">TV Units</a></li>
                                                                <li><a href="/">Bookshelves</a></li>
                                                                <li><a href="/">Showcases</a></li>
                                                                <li><a href="/">Wall Shelves</a></li>
                                                                <li><a href="/">Prayer Unit</a></li>
                                                                <li><a href="/">Shoe Racks</a></li>
                                                                <li><a href="/">Entryway & Foyer</a></li>
                                                                <li><a href="/">Corner Storage</a></li>
                                                                <li><a href="/">Room Divider</a></li>
                                                                <li><a href="/">Living Room Set</a></li>

                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-2">
                                                            <ul>
                                                                <li className="label">Balcony & Outdoor</li>
                                                                <li><a href="/">Balcony Chair</a></li>
                                                                <li><a href="/">Outdoor Tables</a></li>
                                                                <li><a href="/">Balcony Sets</a></li>
                                                                <li><a href="/">Swing Chairs</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="/">BEDROOM <span className="open-dropdown"><i className="fa fa-angle-down"></i></span></a>
                                    <div className="navbar-dropdown">
                                        <div className="navbar-box">
                                            <div className="box-full">
                                                <div className="box clearfix">
                                                    <div className="row">
                                                        <div className="col-lg-3">
                                                            <ul>
                                                                <li className="label">Beds</li>
                                                                <li><a href="/">Bed with Storage</a></li>
                                                                <li><a href="/">Bed without Storage</a></li>
                                                                <li><a href="/">Double Beds</a></li>
                                                                <li><a href="/">King Size Beds</a></li>
                                                                <li><a href="/">Queen Size Beds</a></li>
                                                                <li><a href="/">Single Beds</a></li>
                                                                <li><a href="/">Hydraullic Storage Beds</a></li>
                                                                <li><a href="/">Upholestered Beds</a></li>
                                                                <li><a href="/">Four Poster Beds</a></li>
                                                                <li><a href="/">Traundle Beds</a></li>
                                                                <li><a href="/">Sofa cum Beds</a></li>
                                                                <li><a href="/">Beds by Design</a></li>

                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul>
                                                                <li className="label">Matteresses</li>
                                                                <li><a href="/">Matteress by Range</a></li>
                                                                <li><a href="/">Matteress by Material</a></li>
                                                                <li><a href="/">King Size Matteress</a></li>
                                                                <li><a href="/">Queen Size Matteress</a></li>
                                                                <li><a href="/">Double Bed Matteress</a></li>
                                                                <li><a href="/">Single Bed Matteress</a></li>
                                                                <li><a href="/">All Matteresses</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul>
                                                                <li className="label">Storage & Accessories</li>
                                                                <li><a href="/">Wardrobes</a></li>
                                                                <li><a href="/">Chest of Drawers</a></li>
                                                                <li><a href="/">Bedside Tables</a></li>
                                                                <li><a href="/">Dressers & Mirrors</a></li>
                                                                <li><a href="/">Bedroom Benches</a></li>
                                                                <li><a href="/">Storage Chests</a></li>
                                                                <li><a href="/">Bedroom Chairs</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-2">
                                                            <ul>
                                                                <li className="label">Kids Bedroom</li>
                                                                <li><a href="/">Kids Beds</a></li>
                                                                <li><a href="/">Bunk Beds</a></li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="/"> DINING <span className="open-dropdown"><i className="fa fa-angle-down"></i></span></a>
                                    <div className="navbar-dropdown">
                                        <div className="navbar-box">
                                            <div className="box-full">
                                                <div className="box clearfix">
                                                    <div className="row">
                                                        <div className="col-lg-3">
                                                            <ul>
                                                                <li className="label">Dining Table & Sets</li>
                                                                <li><a href="/">Dining Tables</a></li>
                                                                <li><a href="/">4 Seater Dining Table Sets</a></li>
                                                                <li><a href="/">6 Seater Dining Table Sets</a></li>
                                                                <li><a href="/">2 & 3 Seater Dining Table Sets</a></li>
                                                                <li><a href="/">8 Seater Dining Table Sets</a></li>
                                                                <li><a href="/">All Dining Table Sets</a></li>
                                                                <li><a href="/">Breakfast Tables</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul>
                                                                <li className="label">Dining Chairs & Benches</li>
                                                                <li><a href="/">Dining Chairs</a></li>
                                                                <li><a href="/">Chair Pads</a></li>
                                                                <li><a href="/">Dining Benches</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-2">
                                                            <ul>
                                                                <li className="label">Dining Storage</li>
                                                                <li><a href="/">Crockery Units</a></li>
                                                                <li><a href="/">Kitchen Cabinets</a></li>
                                                                <li><a href="/">Kitchen Racks</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-2">
                                                            <ul>
                                                                <li className="label">Bar Furniture</li>
                                                                <li><a href="/">Bottel Racks</a></li>
                                                                <li><a href="/">Bar Cabinets</a></li>
                                                                <li><a href="/">Bar Stools</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-2">
                                                            <ul>
                                                                <li className="label">Tableware</li>
                                                                <li><a href="/">Bakeware</a></li>
                                                                <li><a href="/">Barware</a></li>
                                                                <li><a href="/">Cups & Mugs</a></li>
                                                                <li><a href="/">Trays & Platters</a></li>
                                                                <li><a href="/">Cutlery</a></li>
                                                                <li><a href="/">Dinnerware</a></li>
                                                                <li><a href="/">Glassware</a></li>
                                                                <li><a href="/">Serveware</a></li>
                                                                <li><a href="/">Kitchen Organisers</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="/">STORAGE <span className="open-dropdown"><i className="fa fa-angle-down"></i></span></a>
                                    <div className="navbar-dropdown">
                                        <div className="navbar-box">
                                            <div className="box-full">
                                                <div className="box clearfix">
                                                    <div className="row">
                                                        <div className="col-lg-2">
                                                            <ul>
                                                                <li className="label">Living Storage</li>
                                                                <li><a href="/">TV Units</a></li>
                                                                <li><a href="/">Bookshelves</a></li>
                                                                <li><a href="/">Showcases</a></li>
                                                                <li><a href="/">Wall Shelves</a></li>
                                                                <li><a href="/">Shoe Racks</a></li>
                                                                <li><a href="/">Prayer Units</a></li>
                                                                <li><a href="/">Entryway & Foyers</a></li>
                                                                <li><a href="/">Corner Storage</a></li>
                                                                <li><a href="/">Living Room Sets</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul>
                                                                <li className="label">Bedroom Storage</li>
                                                                <li><a href="/">Cupboards</a></li>
                                                                <li><a href="/">Chest of Drawers </a></li>
                                                                <li><a href="/">Bedside Tables</a></li>
                                                                <li><a href="/">CupDressers & Mirrors</a></li>
                                                                <li><a href="/">Storage Chests</a></li>                                                                
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul>
                                                                <li className="label">Dining Storage</li>
                                                                <li><a href="/">Crockery Units</a></li>
                                                                <li><a href="/">Kitchen Cabinates & Racks</a></li>
                                                                <li><a href="/">Bar Cabinates</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-2">
                                                            <ul>
                                                                <li className="label">Shop By Range</li>
                                                                <li><a href="/">Galaxy Range</a></li>
                                                                <li><a href="/">Oslo Range</a></li>
                                                                <li><a href="/">Vector Range</a></li>
                                                                <li><a href="/">Baltoro Range</a></li>
                                                                <li><a href="/">Fujiwara Range</a></li>
                                                                <li><a href="/">Boeberg Range</a></li>
                                                                <li><a href="/">Zephyr Range</a></li>
                                                                <li><a href="/">Iwaki & Bayern Range</a></li>
                                                                <li><a href="/">Rhodes Range</a></li>
                                                                <li><a href="/">Malabar Range</a></li>
                                                                <li><a href="/">Taarkasi Range</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="index.html">STUDY  <span className="open-dropdown"><i className="fa fa-angle-down"></i></span></a>
                                    <div className="navbar-dropdown">
                                        <div className="navbar-box">
                                            <div className="box-lg">
                                                <div className="box clearfix">
                                                    <div className="row">
                                                        <div className="col-lg-3">
                                                            <ul>
                                                                <li className="label">Study Tables</li>
                                                                <li><a href="/">Study Tables</a></li>
                                                                <li><a href="/">Computer Tables</a></li>
                                                                <li><a href="/">Study Sets</a></li>
                                                                <li><a href="/">Laptop Tables</a></li>
                                                                <li><a href="/">Solid Wooden Tables</a></li>
                                                                <li><a href="/">Study Tables with Storage</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul>
                                                                <li className="label">Study Chairs</li>
                                                                <li><a href="/">Study Chairs</a></li>
                                                                <li><a href="/">Office Chairs</a></li>
                                                                <li><a href="/">Ergonomy Study Chairs</a></li>
                                                                <li><a href="/">Solid Wooden Study Chairs</a></li>
                                                                <li><a href="/">Accent Study Chairs</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-2">
                                                            <ul>
                                                                <li className="label">Storage</li>
                                                                <li><a href="/">Bookselves</a></li>
                                                                <li><a href="/">Open Bookselves</a></li>
                                                                <li><a href="/">Closed Bookselves</a></li>
                                                                <li><a href="/">Wall Shelves</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="index.html">KIDS ROOM<span className="open-dropdown"><i className="fa fa-angle-down"></i></span></a>
                                    <div className="navbar-dropdown">
                                        <div className="navbar-box">
                                            <div className="box-lg">
                                                <div className="box clearfix">
                                                    <div className="row">
                                                        <div className="col-lg-3">
                                                            <ul>
                                                                <li className="label">Kids Bed</li>
                                                                <li><a href="/">Beds With Storage</a></li>
                                                                <li><a href="/">Beds Without Storage</a></li>
                                                                <li><a href="/">Kids Bunk Beds</a></li>
                                                                <li><a href="/">Cribs</a></li>
                                                                <li><a href="/">Loft Beds</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul>
                                                                <li className="label">KIds Chairs & Table</li>
                                                                <li><a href="/">Kids Chair</a></li>
                                                                <li><a href="/">Nurshing Chair</a></li>
                                                                <li><a href="/">Play Tables</a></li>
                                                                <li><a href="/">Study Tables</a></li>
                                                                <li><a href="/">Eating Tables</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-2">
                                                            <ul>
                                                                <li className="label">Kids Storage</li>
                                                                <li><a href="/">Kids Bookshelves</a></li>
                                                                <li><a href="/">Beside Tables</a></li>
                                                                <li><a href="/">Kids Storage Cabinets</a></li>
                                                                <li><a href="/">Chest of Drawers</a></li>
                                                                <li><a href="/">Kids Wardrobes</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="index.html">DECOR<span className="open-dropdown"><i className="fa fa-angle-down"></i></span></a>
                                    <div className="navbar-dropdown">
                                        <div className="navbar-box">
                                            <div className="box-lg">
                                                <div className="box clearfix">
                                                    <div className="row">
                                                        <div className="col-lg-2">
                                                            <ul>
                                                                <li className="label">Lighting</li>
                                                                <li><a href="/">Floor Lamps</a></li>
                                                                <li><a href="/">Table Lamps</a></li>
                                                                <li><a href="/">Wall Lights</a></li>
                                                                <li><a href="/">Ceiling Lights</a></li>
                                                                <li><a href="/">Study Lamp</a></li>
                                                                <li><a href="/">Chamdeliers</a></li>
                                                                <li><a href="/">Outdoor Lights</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-2">
                                                            <ul>
                                                                <li className="label">Carpets & Rugs</li>
                                                                <li><a href="/">Carpets</a></li>
                                                                <li><a href="/">Dhurries</a></li>
                                                                <li><a href="/">Doormats</a></li>
                                                                <li><a href="/">Runners</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-2">
                                                            <ul>
                                                                <li className="label">Mirrors</li>
                                                                <li><a href="/">Wall Mirrors</a></li>
                                                                <li><a href="/">Standing Mirrors</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-2">
                                                            <ul>
                                                                <li className="label">Cushions</li>
                                                                <li><a href="/">Cushion Covers</a></li>
                                                                <li><a href="/">Throws</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-2">
                                                            <ul>
                                                                <li className="label">Bedroom Linen</li>
                                                                <li><a href="/">Bedsheets</a></li>
                                                                <li><a href="/">Comforters</a></li>
                                                                <li><a href="/">Quilts</a></li>
                                                                <li><a href="/">Duvets</a></li>
                                                                <li><a href="/">Door Curtains</a></li>
                                                                <li><a href="/">Window Curtains</a></li>
                                                                <li><a href="/">Diwan Set</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-2">
                                                            <ul>
                                                                <li className="label">Home Furnishing</li>
                                                                <li><a href="/">Home Accent</a></li>
                                                                <li><a href="/">Wall Plates</a></li>
                                                                <li><a href="/">Wall Arts</a></li>
                                                                <li><a href="/">Photo Frames</a></li>
                                                                <li><a href="/">Showpieces</a></li>
                                                                <li><a href="/">Planters</a></li>
                                                                <li><a href="/">Artificial Plants</a></li>
                                                                <li><a href="/">Artificial Flowers</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <a href="/">COLLECTION <span className="open-dropdown"><i className="fa fa-angle-down"></i></span></a>
                                    <div className="navbar-dropdown">
                                        <div className="navbar-box">
                                            <div className="box-full">
                                                <div className="box clearfix">
                                                    <div className="row">
                                                        <div className="col-lg-3">
                                                            <ul>
                                                                <li className="label">Packages</li>
                                                                <li><a href="/">Recliners</a></li>
                                                                <li><a href="/">Ottomans</a></li>
                                                                <li><a href="/">Cabinets</a></li>
                                                                <li><a href="/">Entertainment</a></li>
                                                                <li className="more"><a href="/"><i className="icon icon-chevron-right"></i> More</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul>
                                                                <li className="label">Dining</li>
                                                                <li><a href="/">Dining Packages</a></li>
                                                                <li><a href="/">Dining Tables</a></li>
                                                                <li><a href="/">Dining Chairs</a></li>
                                                                <li><a href="/">Dining Benches</a></li>
                                                                <li className="more"><a href="/"><i className="icon icon-chevron-right"></i> More</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul>
                                                                <li className="label">TV & Video</li>
                                                                <li><a href="/">TVs</a></li>
                                                                <li><a href="/">DVD & Blu-ray Players</a></li>
                                                                <li><a href="/">Home Audio & Theater</a></li>
                                                                <li><a href="/">TVs Accessories</a></li>
                                                                <li className="more"><a href="/"><i className="icon icon-chevron-right"></i> More</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul>
                                                                <li className="label">Bedroom</li>
                                                                <li><a href="/">King Beds</a></li>
                                                                <li><a href="/">Queen Beds</a></li>
                                                                <li><a href="/">Storage Beds</a></li>
                                                                <li><a href="/">Daybeds & Futons</a></li>
                                                                <li className="more"><a href="/"><i className="icon icon-chevron-right"></i> More</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul>
                                                                <li className="label">Storages</li>
                                                                <li><a href="/">Dressers & Chests</a></li>
                                                                <li><a href="/">Night Tables</a></li>
                                                                <li><a href="/">Mirrors</a></li>
                                                                <li><a href="/">Armoires</a></li>
                                                                <li className="more"><a href="/"><i className="icon icon-chevron-right"></i> More</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul>
                                                                <li className="label">Office</li>
                                                                <li><a href="/">Desks & Hutches</a></li>
                                                                <li><a href="/">Office Chairs</a></li>
                                                                <li><a href="/">Filing Cabinets</a></li>
                                                                <li><a href="/">Bookcases</a></li>
                                                                <li className="more"><a href="/"><i className="icon icon-chevron-right"></i> More</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul>
                                                                <li className="label">Floor Care</li>
                                                                <li><a href="/">Upright Vacuums</a></li>
                                                                <li><a href="/">Stick Vacuums</a></li>
                                                                <li><a href="/">Robotic Vacuums</a></li>
                                                                <li><a href="/">Handheld Vacuums</a></li>
                                                                <li className="more"><a href="/"><i className="icon icon-chevron-right"></i> More</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul>
                                                                <li className="label">Kids</li>
                                                                <li><a href="/">Full Beds</a></li>
                                                                <li><a href="/">Twin Beds</a></li>
                                                                <li><a href="/">Chests & Dressers</a></li>
                                                                <li><a href="/">Baby Furniture</a></li>
                                                                <li className="more"><a href="/"><i className="icon icon-chevron-right"></i> More</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* <!-- ==========  Search wrapper ========== --> */}

                    <div className="search-wrapper">
                        <input className="form-control" placeholder="Search..." />
                        <button className="btn btn-outline-dark btn-sm">Search now</button>
                    </div>

                    {/* <!-- ==========  Login wrapper ========== --> */}

                    <div className="login-wrapper">
                        <div className="h5">Sign in</div>
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <a href="#forgotpassword" className="open-popup btn btn-main btn-sm">Forgot password?</a>
                                <a href="#createaccount" className="open-popup btn btn-main btn-sm">Don't have an account?</a>
                            </div>
                            <button type="submit" className="btn btn-block btn-outline-primary">Submit</button>
                        </form>
                    </div>

                    {/* <!-- ==========  Cart wrapper ========== --> */}

                    <div className="cart-wrapper">
                        <div className="checkout">
                            <div className="clearfix">

                                {/* <!--cart item--> */}

                                <div className="row">

                                    <div className="cart-block cart-block-item clearfix">
                                        <div className="image">
                                            <a href="product.html"><img src="assets/images/item-1.jpg" alt="" /></a>
                                        </div>
                                        <div className="title">
                                            <div><a href="product.html">Product item</a></div>
                                            <small>Product category</small>
                                        </div>
                                        <div className="quantity">
                                            <input type="number" value="2" className="form-control form-quantity" />
                                        </div>
                                        <div className="price">
                                            <span className="final">$ 1.998</span>
                                            <span className="discount">$ 2.666</span>
                                        </div>
                                        {/* <!--delete-this-item--> */}
                                        <span className="icon icon-cross icon-delete"></span>
                                    </div>

                                    {/* <!--cart item--> */}

                                    <div className="cart-block cart-block-item clearfix">
                                        <div className="image">
                                            <a href="product.html"><img src="assets/images/item-2.jpg" alt="" /></a>
                                        </div>
                                        <div className="title">
                                            <div><a href="product.html">Product item</a></div>
                                            <small>Product category</small>
                                        </div>
                                        <div className="quantity">
                                            <input type="number" value="2" className="form-control form-quantity" />
                                        </div>
                                        <div className="price">
                                            <span className="final">$ 1.998</span>
                                            <span className="discount">$ 2.666</span>
                                        </div>
                                        {/* <!--delete-this-item--> */}
                                        <span className="icon icon-cross icon-delete"></span>
                                    </div>

                                    {/* <!--cart item--> */}

                                    <div className="cart-block cart-block-item clearfix">
                                        <div className="image">
                                            <a href="product.html"><img src="assets/images/item-3.jpg" alt="" /></a>
                                        </div>
                                        <div className="title">
                                            <div><a href="product.html">Product item</a></div>
                                            <small>Product category</small>
                                        </div>
                                        <div className="quantity">
                                            <input type="number" value="2" className="form-control form-quantity" />
                                        </div>
                                        <div className="price">
                                            <span className="final">$ 1.998</span>
                                            <span className="discount">$ 2.666</span>
                                        </div>
                                        {/* <!--delete-this-item--> */}
                                        <span className="icon icon-cross icon-delete"></span>
                                    </div>

                                </div>

                                <hr />

                                {/* <!--cart prices --> */}

                                <div className="clearfix">
                                    <div className="cart-block cart-block-footer clearfix">
                                        <div>
                                            <strong>Discount 15%</strong>
                                        </div>
                                        <div>
                                            <span>$ 159,00</span>
                                        </div>
                                    </div>

                                    <div className="cart-block cart-block-footer clearfix">
                                        <div>
                                            <strong>Shipping</strong>
                                        </div>
                                        <div>
                                            <span>$ 30,00</span>
                                        </div>
                                    </div>

                                    <div className="cart-block cart-block-footer clearfix">
                                        <div>
                                            <strong>VAT</strong>
                                        </div>
                                        <div>
                                            <span>$ 59,00</span>
                                        </div>
                                    </div>
                                </div>

                                <hr />

                                {/* <!--cart final price --> */}

                                <div className="clearfix">
                                    <div className="cart-block cart-block-footer clearfix">
                                        <div>
                                            <strong>Total</strong>
                                        </div>
                                        <div>
                                            <div className="h4 title">$ 1259,00</div>
                                        </div>
                                    </div>
                                </div>


                                {/* <!--cart navigation --> */}

                                <div className="cart-block-buttons clearfix">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <a href="products-grid.html" className="btn btn-outline-info">Continue shopping</a>
                                        </div>
                                        <div className="col-sm-6 text-right">
                                            <a href="checkout-1.html" className="btn btn-outline-warning"><span className="icon icon-cart"></span> Checkout</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </>


    )
}

export default Navbar;
