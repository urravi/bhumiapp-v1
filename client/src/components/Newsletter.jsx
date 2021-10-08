import React from 'react';

function Newsletter() {
    return (
        <>
          <section className="banner">

<div className="container-fluid">

    <div className="banner-image bgBanner1">

        <header>
            <div className="container">

                <h2 className="h2 title">Stay in touch!</h2>
                <div className="text">
                    <p>Be first to know about all new interior features!</p>
                </div>

            </div>
        </header>

        <div className="container">
            <div className="row newsletter-email">
                <div className="col-lg-4 col-sm-10">
                    <input type="email" className="form-control" name="name" value="" placeholder="Enter your e-mail" />
                </div>
                <div className="col-lg-4 col-sm-5">
                    <a href="/" className="btn btn-clean">Subscribe now</a>
                </div>
            </div>
        </div>
    </div>

</div> 

</section>

        </>
    )
}

export default Newsletter;
