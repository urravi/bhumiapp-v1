import React from 'react';

function TrackOrder() {
    return (
        <div className="order-status col-lg-6 col-sm-12">
            <h1>Track your order using order number</h1>
            <form action="submit">
                <input type="text" placeholder="Order Id"/>
                <button>Track</button>
            </form>
            <p>-OR-</p>
            <button>Login to track all your orders</button>

        </div>
    )
}

export default TrackOrder;
