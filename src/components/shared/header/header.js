import React, { useEffect, useRef, useState } from "react";
import './style.scss';
import profileImage from '../../../assets/images/profile-image.webp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSignOut, faTools } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Header = () => {
    const [dropdown, setDropdown] = useState(false);
    const toggleOpen = () => setDropdown(!dropdown);
    const ref = useRef();
    useEffect(() => {
        // const handleClickOutside = (event) => {
        //     if (!ref.current.contains(event.target)) {
        //         setDropdown(false);
        //     }
        // };
        // document.addEventListener("mousedown", handleClickOutside);
    }, [ref]);
    return (

        <>
            <nav className="navbar sticky-top bg-body-tertiary header">
                <div className="container-fluid">
                    <a className="navbar-brand brand-name" href="#">Fashion Point</a>

                    <div className="dropdown">
                        <button onClick={toggleOpen} className="btn btn-primary dropdown-toggle btn-profile" ref={ref} >
                            <img src={profileImage} alt="Profile Image" className="profile-mage" /> Dropdown
                        </button>
                        <div
                            className={`dropdown-menu ${dropdown ? 'show' : ''}`}
                            aria-labelledby="dropdownMenuButton"
                        >
                            <a className="dropdown-item" href="#">
                                <FontAwesomeIcon icon={faUser} size={'1x'} /> My Profile
                            </a>
                            <a className="dropdown-item" href="#">
                                <FontAwesomeIcon icon={faTools} size={'1x'} /> Settings
                            </a>
                            <Link to="/login" className="dropdown-item btn-logout">
                                <FontAwesomeIcon icon={faSignOut} size={'1x'} /> Logout
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Header;