import React from 'react';

function Header() {
    return (
        <>
            <header>
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item"><a href="/">Library</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                    <div className="pageHeading">
                    <h2 className="title">Best from Listed Furnitures</h2>
                    <p>(351 Products)</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iure alias magnam, excepturi vero ipsa, rerum nemo vitae sit commodi sapiente eius Quas iure alias magnam, excepturi veroneque. Quam eveniet.</p>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
