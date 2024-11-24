import { Link } from "react-router-dom";

const Service = () => {


    return(
        <div className="container">
            <h1 className="pb-4 pt-5">Service</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </div>
    )
}

export default Service;