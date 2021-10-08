import React from 'react';
import {Link} from 'react-router-dom';

function Login() {
    return (
        <> 
            <div className="signin col-5">
                <h1> Sign up for sale updates</h1>
                <p>Login to explore great designs.</p>
                <div className="emaillogin">
                    <h6>Login with your email id</h6>
                    <form method="POST">
                        <input type="text" name="email" class="form-control" id="formGroupExampleInput" placeholder="Email address" />
                        <input type="password" name="password" class="form-control" id="formGroupExampleInput" placeholder="Password" />
                        <Link to="/forgotPassword">Forgot Password?</Link>
                        <button type="submit" >Log In</button>
                    </form>
                    <p>Don't have an account? <span><Link to="/registration">Sign up</Link></span> </p>
                </div>
                <div className="sociallogin">
                    <h6> Social Sign in</h6>
                    <div className="row">
                        <button className="fb"><i className="fa fa-facebook"></i> Connect with Facebook <i className="icon icon-chevron-right"></i></button>
                        <button className="google"><i className="fa fa-google"></i> Connect with Google <i className="icon icon-chevron-right"></i></button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login;
