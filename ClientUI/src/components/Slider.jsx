//name export 
import { useState } from 'react'
import {mobile} from '../responsive';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import { sliderItems } from '../data'
//default export 
import styled from "styled-components"
const Container = styled.div`
    width:100%; 
    height:100vh;
    display:flex;
    position:relative;
    overflow:hidden;
    ${mobile({display:'none'})}
`
const Arrow = styled.div`
  width:2em;
  height:2em;
  border-radius:50%;
  background-color:#c1b4b4;
  display:flex;
  align-items:center;
  justify-content:center;
  position:absolute;
  top:0;
  bottom:0;
  left:${props => props.direction === 'left' && "1em"};
  right:${props => props.direction === 'right' && "1em"};
  margin:auto;
  opacity:0.6;
  cursor:pointer;
  z-index:2;
  &:hover{
    transform:scale(1.02);
    background-color:rgba(0,0,0,0.4);
  }
`
const Wrapper = styled.div`
  display:flex;
  height:100%;
  transition:all 1s ease;
  transform:translateX(${props=>props.slider*-100}vw);
  

`
const Slide = styled.div`
  display:flex;
  width:100vw;
  height:100vh;
  align-items:center;
  background-color:#${props => props.bg};

`
const ImgContainer = styled.div`
  height:100%;
  flex:1;
 display:flex;
 align-items:center;
 justify-content:center; 
`;
const Image = styled.img`
  height:80%;
  border-radius:1em;
  overflow:hidden;
`
const InfoContainer = styled.div`
  flex:1;
  padding:50px;
`
const Title = styled.h1`
font-size:3em;`;

const Desc = styled.p`
  margin: 2em 0;

  font-weight:500;
  font-size:1.2em;
  letter-spacing:1.2px;
`;
const Button = styled.button`
  padding:0.8em;
 
  font-size:1.2em;
  background-color:transparent;
  border-radius:5px;
  cursor:pointer;  

  `;



const Slider = () => {
  const [countSlider, setCountSlider] = useState(0);
  const handleArrowClick = (dir) => {
    console.log(dir)
    if (dir === 'left') {
      setCountSlider(countSlider > 0 ? countSlider - 1 : 2)
    } else {
      setCountSlider(countSlider < 2 ? countSlider + 1 : 0)
    }

  }
  return (
    <Container >
      <Arrow direction="left" onClick={() => { handleArrowClick('left') }}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slider={countSlider}>
        {sliderItems.map((item) => (
          <Slide key={item.id} bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>

          </Slide>
        ))}



      </Wrapper>
      <Arrow direction="right" onClick={() => { handleArrowClick('right') }}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider