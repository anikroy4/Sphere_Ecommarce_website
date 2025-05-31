
import Container from '../../layers/Container'
import React from "react";
import Slider from "react-slick";

const NewProduct = () => {

    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          color: "blue",
          border: "1px blue solid"
        }}
      >
        {i + 1}
      </div>
    )
  };



  return (
    <Container>
        <h2>New <span>arrival</span> for you</h2>
        
    </Container>
  )
}

export default NewProduct