import { IoLogoDesignernews } from "react-icons/io";
import {HashRouter, Routes, Route, Link} from 'react-router-dom';
import Home from "./Component/Home";
import AboutUs from "./Component/AboutUs";
import Service from "./Component/Service";
import Contact from "./Component/Contact";

function App() {
    return (
        <HashRouter>
            <div className="App">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <IoLogoDesignernews className="fs-1" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item ms-4">
                                    <Link to="/" className="nav-link" aria-current="page">Home</Link>
                                </li>
                                <li className="nav-item ms-4">
                                    <Link to="/aboutus" className="nav-link">About Us</Link>
                                </li>
                                <li className="nav-item ms-4">
                                    <Link to="/service" className="nav-link">Service</Link>
                                </li>
                                <li className="nav-item ms-4">
                                    <Link to="/contact" className="nav-link">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <Routes path="/" element={<Home />}>
                <Route index element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />}></Route>
                <Route path="/service" element={<Service />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>

        </HashRouter>
    );
}

export default App;
