import { Send } from "@material-ui/icons"
import {mobile} from '../responsive';
import styled from 'styled-components'
//styled components
const Container=styled.div`
    height:50vh;
    padding-top:2em;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:#fcf5f5;

`;
const Title=styled.h1`
    font-size:3.5em;
    ${mobile({fontSize:"1.5em"})}
`;
const Desc=styled.p`
    font-size:1.2em;
    font-weight:300;
   letter-spacing:0.8px; 
    margin-bottom:1em;
    ${mobile({fontSize:"1em"})}


    
`;

const InputContainer=styled.div`
    display:flex;
    justify-content:space-between;
    width:50%;
    height:2.4em;
    background-color:white;
    border: 1px  solid  #a09999;
    
`;
const Input=styled.input`
    border:none;
    flex:8;
    padding-left:2em;
`;
const Button=styled.button`
flex:1;
border:none;
background-color:teal;
color:white;
cursor:pointer;

`;

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely from your favourite products.</Desc>

        <InputContainer>
            <Input placeholder='Your email'/>
            <Button>
                <Send/>
            </Button>
            
        </InputContainer>
       
    </Container>
  )
}

export default Newsletter