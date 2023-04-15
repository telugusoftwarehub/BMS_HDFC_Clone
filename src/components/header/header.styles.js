import { Container, styled, Box, Tabs, Tab } from "@mui/material";
import logo from "../../images/pws-sprite.png";

export const RootContainer = styled(Container)`
  color: #ffffff;
  background: #3b536f;
  min-height: 49px;
`
export const NavContainer = styled(Container)`
  max-width: 960px !important;
  display: flex;
  justify-content: space-between;
`

export const HDFClogo = styled(Box)`
  background-image: url(${logo});
  background-position: -2px 0;
  width: 155px;
  height: 30px;
  margin: 11px 11px 0px 0px;
`

export const HTabs = styled(Tabs)`

`
export const HTab = styled(Tab)`
  color: #ffffff;
  font-size: 14px;
  // width: 5%;
  // padding-right: 0px !important;
  // padding-left: 0px !important;
  padding-bottom:0px !important;
`

export const Contact = styled(Box)`
  color: #fff;
`
export const UnOrderList = styled("ul")`
  list-style-type: none;
  display: flex;
`

export const MList = styled("li")`
  padding-right: 5px;
  font-size: 12px;
`
