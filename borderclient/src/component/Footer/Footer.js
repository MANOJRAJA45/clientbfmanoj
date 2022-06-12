import React,{Fragment} from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Fragment>
            <div style={{"marginTop":"70px"}}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-bottom">
            <div className="container">
                <Link className="navbar-brand mr-auto ml-auto" >Fashion Styling  &copy; 2022&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;Shop online at &nbsp;FASHION STYLING  &nbsp; with  complete convenience</Link>
            </div>
            </nav>
            </div>
        </Fragment>
    )
}

export default Footer;