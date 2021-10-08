import React from 'react';
import {Link} from 'react-router-dom';


function NewProducts(props) {
    return (
        <>
            <div className="col-12 col-md-6 col-lg-4">
                <article>
                    <div className="info">
                        <span className="add-favorite">
                            <a href="/" data-title="Add to favorites" data-title-added="Added to favorites list">
                                <i className="icon icon-heart"></i>
                            </a>
                        </span>
                        <span>
                            <a href="#productid1" className="mfp-open" data-title="Quick wiew">
                                <i className="icon icon-eye"></i>
                            </a>
                        </span>
                    </div>
                    <div className="special-tag">
                        <p className="vc">{props.tag}</p>
                    </div>
                    <div className="btn btn-add">
                        <i className="icon icon-cart"></i>
                    </div>
                    <div className="figure-grid">
                        <div className="image">
                            <Link to="/">
                                <img src={props.image} alt="" />
                            </Link>
                        </div>
                        <div className="text">
                            <h2 className="title h4">
                                <Link to="/">{props.title}</Link>
                            </h2>
                            <p>({props.details})</p>
                            <sub>$ {props.cp}</sub>
                            <sup>$ {props.sp}</sup>
                        </div>
                    </div>
                </article>
            </div>

        </>
    )
}

export default NewProducts;
