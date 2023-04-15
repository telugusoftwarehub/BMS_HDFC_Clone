import React from "react";
import { HCarousel, NavContainer, RootContainer } from "./carousel.styles";
import Form from "../form";

const CarouselComponent = () => {
  return (
    <RootContainer maxWidth="xl">
      <NavContainer>
        <HCarousel
          axis="horizontal"
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
        
        >
          <div>
            <img
              src="https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/dfaf4f95-0ef9-4f49-bfe6-867cf47d6a28/NRI/Home/NRO-account-Netbanking-carousel-banner-A-716x298-%282%29.jpg/1.jpeg"
            />
          </div>
          <div>
            <img
              src="https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/7bc69495-39c1-462b-9d6e-3ff81b92d054/NRI/Home/NRE-account-Netbanking-carousel-banner-B-716x298-%281%29.jpg"
            />
          </div>
          <div>
            <img
              src="https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/7bc69495-39c1-462b-9d6e-3ff81b92d054/NRI/Home/NRE-account-Netbanking-carousel-banner-B-716x298-%281%29.jpg"
            />
          </div>
        </HCarousel>
        <Form />
      </NavContainer>
    </RootContainer>
  );
};

export default CarouselComponent;
