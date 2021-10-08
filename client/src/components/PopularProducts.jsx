import React from 'react';
// import NewProduct from './NewProduct';

import item1 from '../Images/img/item3.jpg';
import item2 from '../Images/img/item3.jpg';
import item3 from '../Images/img/item4.jpg';
import item4 from '../Images/img/item4.jpg';
import NewProducts from './NewProducts';

function PopularProducts() {
    return (
        <>
            <section className="products">            
                <div className="container">
                    <div className="row">
                        <NewProducts image={item1} tag="Best Seller" title="Wide 3 door sideboard" details="Teak Finish" cp="156" sp="129"/>
                        <NewProducts image={item2} tag="20% Off" title="Wide 3 door sideboard" details="Teak Finish" cp="156" sp="129"/>
                        <NewProducts image={item3} tag="20% Off" title="Wide 3 door sideboard" details="Teak Finish" cp="156" sp="129"/>
                        <NewProducts image={item4} tag="25% Off" title="Wide 3 door sideboard" details="Teak Finish" cp="156" sp="129"/>
                        <NewProducts image={item4} tag="25% Off" title="Wide 3 door sideboard" details="Teak Finish" cp="156" sp="129"/>
                        <NewProducts image={item1} tag="Best Seller" title="Wide 3 door sideboard" details="Teak Finish" cp="156" sp="129"/>
                        <NewProducts image={item2} tag="25% Off" title="Wide 3 door sideboard" details="Teak Finish" cp="156" sp="129"/>
                        <NewProducts image={item3} tag="20% Off" title="Wide 3 door sideboard" details="Teak Finish" cp="156" sp="129"/>
                        <NewProducts image={item4} tag="20% Off" title="Wide 3 door sideboard" details="Teak Finish" cp="156" sp="129"/>
                    </div>
                </div>
                
                {/* <!--Pagination--> */}
                <div className="pagination-wrapper">
                            <ul className="pagination justify-content-center">
                                <li className="page-item"><a className="page-link" href="/">&laquo;</a></li>
                                <li className="page-item"><a className="page-link" href="/">1</a></li>
                                <li className="page-item"><a className="page-link active" href="/">2</a></li>
                                <li className="page-item"><a className="page-link" href="/">3</a></li>
                                <li className="page-item"><a className="page-link" href="/">&raquo;</a></li>
                            </ul>
                        </div>
            </section>


        </>
    )
}

export default PopularProducts;
