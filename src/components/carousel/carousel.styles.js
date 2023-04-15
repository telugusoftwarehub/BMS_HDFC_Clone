import { Carousel } from 'react-responsive-carousel';
import { styled,Container} from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";




export const HCarousel = styled(Carousel)`
   width:713px;
   height:300px
`
export const NavContainer = styled(Container)`
  max-width: 960px !important;
  display: flex;
  margin-top:15px;
`;