import React, { Fragment } from "react";
import { Button, Carousel } from "react-bootstrap";
import "./HeaderSlider.css";
function HeaderSlider() {
  return (
    <Fragment>
      <Carousel variant="dark" style={{ maxHeihgt: "650px" }}>
        <Carousel.Item>
          <img  
            className="d-block w-100"
            style={{ height: "100vh", objectFit: "cover" }}
            src="../img/slider/flat-design-fashion-collection-facebook-template_23-2149921756.jpg"
            type="video"
            alt="pure pu ladies bag"
          />
          <Carousel.Caption className="bg-white">
            <h5>Summer Collection Pure PU Ladies Shoulder Bag </h5>
            <p>Best Deals on fashion summer sale offer</p>
            <div className="mb-3">
              <Button variant="dark">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh", objectFit: "cover" }}
            src="../img/slider/modern-fashion-lifestyle-banner-template_23-2148924973.png"
            alt="pure mustard oil"
          />
          <Carousel.Caption className="bg-white">
            <h5>100% Cotton women Black Suits</h5>
            <p>NJATRIQQ Velvet Embroidered Salwar Suit Dupatta Material.</p>
            <div className="mb-3">
              <Button variant="dark">Shop Now</Button>
            </div>
          </Carousel.Caption> 
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh", objectFit: "cover" }}
            src="../img/slider/empty-modern-room-with-furniture_23-2149178335.jpg"
            alt="smart blender home appliance"
          />
          <Carousel.Caption className="bg-white">
            <h5>Decorate Your Smart Kitchen</h5>
            <p>Bosh Blender smart look and efficient for grinding all types of items</p>
            <div className="mb-3">
              <Button variant="dark">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
}

export default HeaderSlider;
