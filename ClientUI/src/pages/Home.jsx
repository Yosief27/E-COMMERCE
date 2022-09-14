//rafce//short cut to create the boiling theme plate
import styled from 'styled-components';
import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Product from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
const Container=styled.div`
  
`;
const Home = () => {

  return (

    <Container>
      <Announcement />
      <Navbar />
      <Slider/>
      <Categories/>
      <Product/>
      <Newsletter/>
      <Footer/>
    </Container>
  );
};

export default Home;
