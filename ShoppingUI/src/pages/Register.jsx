import styled from 'styled-components';
import Img  from '../assets/register.jpeg'
import {mobile} from '../responsive';
const Container=styled.div`
    width:100vw;
    height:100vh;
    
    background:linear-gradient(rgba(255,255,255,0.6),rgba(255,255,255,0.6)), url(${Img});
    background-size: cover;
    object-fit: contain;
    display:flex;
    justify-content:center;
    align-items:center;
    ${mobile({backgroundPosition:'center center'})}
   

`;

const Wrapper=styled.div`
    width:40%;
    
    background-color:white;
    ${mobile({width:'70%'})}
    

`;

const Title=styled.h1`
    font-size:1.4em;
    font-weight:400;
    margin-left:0.4em;
`;
const Form =styled.form`
display:flex;
flex-wrap:wrap;
`;
const Input=styled.input`
    flex:1;
    min-width:40%;
    margin:1.2em 0.8em 0 0.8em;
    padding:0.6em;
`;
const Button =styled.button`
    border:none;
    padding:1em 1.5em;
    width:40%;
    font-weight:400;
    font-size:1em;
    margin:1em auto;
    background-color:teal;
    color:white;
    cursor:pointer;
`;
const Aggrement=styled.span`
    font-size:0.8em;
    margin:1.2em 0 0 0.4em;
    
    
`;
const Register = () => {
  return (
    <Container >
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name" type="text"/>
                <Input placeholder="last_name" type="text"/>
                <Input placeholder="Username" type="text"/> <Input placeholder="Email" type="text"/> <Input placeholder="Password" type="text"/> <Input placeholder="Confirm Password" type="password"/>
                <Aggrement>By creating an account ,I consent to the processing of my personal data in accordance with the Privacy Policy.</Aggrement>
                <Button>Create</Button>
                
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register