import React from "react";
import {
    RootContainer,
    NavContainer,
    HDFClogo,
    HTabs,
    HTab,
    Contact,
    UnOrderList,
    MList
} from "./header.styles";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import HelpIcon from '@mui/icons-material/Help';
import { List } from "@mui/material";


const HeaderComponent = () => {
    return (
        <RootContainer maxWidth="xl">
            <NavContainer fixed>  
                <HTabs>
                <HDFClogo></HDFClogo>
                    <HTab label="Personal"/>
                    <HTab label="NRI" />
                    <HTab label="SME" />
                    <HTab label="Wholesale" />
                    <HTab label="Agri" />
                </HTabs>
                <Contact>
                   <UnOrderList>
                        <MList><LocationOnIcon sx={{width:18,height:18}}/></MList>
                        <MList >Locate us</MList>
                        <MList ><HelpIcon /></MList>
                        <MList >Help</MList>
                   </UnOrderList>
                </Contact>
            </NavContainer>
        </RootContainer>
    )
}

export default HeaderComponent;