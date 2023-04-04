import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HelpIcon from '@mui/icons-material/Help';
import "./header.component.css"

import logo from '../../images/logo.png';

const HeaderComponent = () => {
    return (
        <header className="header">
            <img src={logo} />
            <h1>Welcome to HDFC Bank NetBanking</h1>
        </header>)
}

export default HeaderComponent;