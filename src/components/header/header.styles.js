import { Container, styled, Box, Tabs, Tab } from '@mui/material';
import logo from "../../images/pws-sprite.png";

export const RootContainer = styled(Container)`
    color: #ffffff;
    background: #3b536f;
    min-height: 49px
`
export const NavContainer = styled(Container)`
    display: flex
`

export const HDFClogo = styled(Box)`
    background-image:url(${logo});
    background-position: -2px 0;
    width: 155px;
    height: 30px;
`

export const HTabs = styled(Tabs)`

`
export const HTab = styled(Tab)`
    color: #ffffff
`

export const Contact = styled(Box)`
    color: #000000
`
export const UnOrderList = styled('ul')`
    list-style-type: none;
    display: fled
`