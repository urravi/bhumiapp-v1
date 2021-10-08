import React from 'react';
import Header from './Header';
import FilterMain from './FilterMain';
import PopularProducts from './PopularProducts';

function MainPage() {
    return (
        <>
            <Header />
            <FilterMain />
            <PopularProducts />
        </>
    )
}

export default MainPage;
