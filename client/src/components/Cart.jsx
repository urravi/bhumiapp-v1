import React from 'react';

function Cart() {
    return (
        <>
        <div className="user-cart col-lg-8 col-sm-12">
            <div className="cart-map">
                <div className="row">
                    <div className="on col-lg-4">
                        <p>1. Cart &nbsp; <i className="icon icon-chevron-right"></i> </p>
                    </div>
                    <div className="col-lg-4">
                        <p>2. Address &nbsp; <i className="icon icon-chevron-right"></i> </p>
                    </div>
                    <div className="col-lg-4">
                        <p>3. Payment &nbsp; </p>
                    </div>
                </div>
            </div>
            <p>Your cart is empty</p>
            <button>Continue Shopping</button>
        </div>
        <div className="shop-options col-10">
            <h4>Browse Popular Categories</h4>
            <div className="options row">
                <div className="option"> Living </div>
                <div className="option"> Dining </div>
                <div className="option"> Bedroom </div>
                <div className="option"> Storage </div>
                <div className="option"> Decor </div>
                <div className="option"> Kids Room </div>
                <div className="option"> Study </div>
                <div className="option"> Sale </div>
                <div className="option"> Mattresses </div>
                <div className="option"> Collection </div>
            </div>
        </div>
        </>
    )
}

export default Cart;
