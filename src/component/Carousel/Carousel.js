import React,{Fragment} from 'react';

import Card from './Card';
import {connect} from 'react-redux';
import { Redirect } from 'react-router'; 

const Carousel = ({isAuthenticated}) => {
    if(isAuthenticated){
        return <Redirect to='/dashboard' />
    }
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                    
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img class="d-block w-100"  height="500px"src="https://manojborder45.s3.us-west-2.amazonaws.com/coursel1.jpg" alt="First slide" />
                    <div class="carousel-caption">
                        <h3>Women's Fashion</h3>
                        <p>Taking women's fashion to the next level</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100"  height="500px" src="https://manojborder45.s3.us-west-2.amazonaws.com/coursel2.jpg" alt="Second slide" />
                    <div class="carousel-caption">
                        <h3>Women's - Now!</h3>
                        <p>Designed For Women's, Engineered To Last</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100"  height="500px" src="https://manojborder45.s3.us-west-2.amazonaws.com/coursel3.jpg" alt="Third slide" />
                    <div class="carousel-caption">
                        <h3>Mens Styling</h3>
                        <p>Gorgeous Wearing Apparel, Royal Vesture</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100"  height="500px" src="https://manojborder45.s3.us-west-2.amazonaws.com/coursel4.jpg" alt="fourth slide" />
                    <div class="carousel-caption">
                        <h3>The best outfit for Men starts here</h3>
                        <p>A Different Kind Of Company. A Different Kind Of Mens wear</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100"  height="500px" src="https://manojborder45.s3.us-west-2.amazonaws.com/coursel5.jpg" alt="fifth slide" />
                    <div class="carousel-caption">
                        <h3>Clothing for the little sunshine</h3>
                        <p>Make your child  wardrobe brighter with us</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100"  height="500px" src="https://manojborder45.s3.us-west-2.amazonaws.com/coursel6.jpg" alt="sixth slide" />
                    <div class="carousel-caption">
                        <h3>kids you got covered</h3>
                        <p>The Perfect style for your Kids</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100"  height="500px" src="https://manojborder45.s3.us-west-2.amazonaws.com/coursel7.jpg" alt="seventh slide" />
                    <div class="carousel-caption">
                        <h3>The Wedding Attire</h3>
                        <p>Everything but the wedding dress!</p>
                    </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div> 
                <br />

                <Card />   

        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated : state.auth.isAuthenticated,
})
export default connect(mapStateToProps)(Carousel);