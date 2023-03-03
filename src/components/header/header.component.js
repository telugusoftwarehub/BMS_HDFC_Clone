import React from "react";
import {
    RootContainer,
    NavContainer,
    HDFClogo,
    HTabs,
    HTab,
    Contact,
    UnOrderList
} from "./header.styles";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import HelpIcon from '@mui/icons-material/Help';

const HeaderComponent = () => {
    return (
        <RootContainer maxWidth="xl">
            <NavContainer fixed>
                <HDFClogo></HDFClogo>
                <HTabs>
                    <HTab label="Personal" />
                    <HTab label="NRI" />
                    <HTab label="SME" />
                    <HTab label="Wholesale" />
                    <HTab label="Agri" />
                </HTabs>
                <Contact>
                   <UnOrderList>
                        <li><LocationOnIcon /></li>
                        <li>Locate us</li>
                        <li><HelpIcon /></li>
                        <li>Help</li>
                   </UnOrderList>
                </Contact>
            </NavContainer>
        </RootContainer>
    )
}

export default HeaderComponent;