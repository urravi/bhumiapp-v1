import React from 'react';

function Footer() {
    return (
        <>
            <footer>
                <div className="container-fluid">
                    <div className="footer-wrap">
                        <div className="container">
                            <div className="footer-showroom">
                                <div className="text-center">
                                    <a href="/"><img src="assets/images/header-logo.png" alt="" width="80" height="80" /></a>
                                </div>
                            </div>

                            {/* <!--footer links--> */}
                            <div className="footer-links">
                                <div className="row">
                                    <div className="col-md-2">
                                        <h5>Browse by</h5>
                                        <ul>
                                            <li><a href="/">Brand</a></li>
                                            <li><a href="/">Product</a></li>
                                            <li><a href="/">Category</a></li>
                                            <li><a href="/">Projects</a></li>
                                            <li><a href="/">Sales</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-2">
                                        <h5>Quick links</h5>
                                        <ul>
                                            <li><a href="/">In-Store Pickup</a></li>
                                            <li><a href="/">Gift Cards</a></li>
                                            <li><a href="/">Afterpay</a></li>
                                            <li><a href="/">Shop</a></li>
                                            <li><a href="/">FAQ</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-2">
                                        <h5>Order info</h5>
                                        <ul>
                                            <li><a href="/">Order Status </a></li>
                                            <li><a href="/">Payments</a></li>
                                            <li><a href="/">Shipping</a></li>
                                            <li><a href="/">Returns</a></li>
                                            <li><a href="/">Order history</a></li>
                                        </ul>
                                    </div>
                                    <div className="offset-md-3 col-md-3">
                                        <h5>Sign up for our newsletter</h5>
                                        <p><i>Add your email address to sign up for our monthly emails and to receive promotional offers.</i></p>
                                        <div className="form-group form-newsletter">
                                            <input className="form-control" type="text" name="email" value="" placeholder="Email address" />
                                            <input type="submit" className="btn btn-secondary btn-sm" value="Subscribe" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!--footer social--> */}

                            <div className="footer-social">
                                <div className="row">
                                    <div className="col-sm-6">
                                    </div>
                                    <div className="col-sm-6 links">
                                        <ul>
                                            <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="/"><i className="fa fa-google-plus"></i></a></li>
                                            <li><a href="/"><i className="fa fa-youtube"></i></a></li>
                                            <li><a href="/"><i className="fa fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer;
