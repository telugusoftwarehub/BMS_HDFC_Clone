import { Carousel } from "react-responsive-carousel";
import { styled, Container } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const RootContainer = styled(Container)`
  background: #f3f3f3;
  padding-top:1px;
  padding-bottom:10px
`
export const HCarousel = styled(Carousel)`
  width: 713px;
  height: 300px;
  border: 0.8px solid #dedede;

`
export const NavContainer = styled(Container)`
  max-width: 960px !important;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`
