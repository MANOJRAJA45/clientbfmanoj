import React,{Fragment} from 'react'
import {Link} from 'react-router-dom';

const Card = () => {
    return (
        <Fragment>
                <div className="row">
                <div className="col-sm-4">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Trending styles-Women's fashion</h5>
                        <img class="d-block w-100"  height="250px" width="250px" src="https://manojborder45.s3.us-west-2.amazonaws.com/womensoff.jpg" alt="First slide" />
                       
                        <Link className="btn" to="/login">Check Out</Link>
                    </div>
                    </div>
                </div> 
                <div className="col-sm-4">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Trending styles-Mens's fashion</h5>
                        <img class="d-block w-100"   height="250px" width="250px" src="https://manojborder45.s3.us-west-2.amazonaws.com/mensoff.jpg" alt="First slide" />
                       
                        <Link className="btn " to="/login">Check Out</Link>
                    </div>
                    </div>
                </div> 
                <div className="col-sm-4">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Trending styles-Kids fashion</h5>
                        <img class="d-block w-100"   height="250px" width="250px" src="https://manojborder45.s3.us-west-2.amazonaws.com/kidsoff.jpg" alt="First slide" />
                        
                        <Link className="btn " to="/login">Check Out</Link>
                    </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Trending styles-Wedding Attire</h5>
                        <img class="d-block w-100"  height="250px" width="250px"src="https://manojborder45.s3.us-west-2.amazonaws.com/weddingoff.jpg" alt="First slide" />
                        
                        <Link  className="btn " to="/login">Check Out</Link>
                    </div>
                    </div>
                </div>
                </div>
        </Fragment>
    )
}

export default Card;