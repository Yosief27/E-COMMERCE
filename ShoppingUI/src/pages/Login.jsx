import styled from 'styled-components';
import Img  from '../assets/register.jpeg'
import {mobile} from '../responsive';
const Container=styled.div`
    width:100vw;
    height:100vh;
    
    background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url(${Img});
    background-size: cover;
    object-fit: contain;
    display:flex;
    justify-content:center;
    align-items:center;
   

    ${mobile({backgroundPosition:'center center'})}
`;

const Wrapper=styled.div`
    width:20%;
    
    background-color:white;
    
    ${mobile({width:'70%'})}

`;

const Title=styled.h1`
    font-size:1em;
    font-weight:400;
    margin:0.6em 0 0.2em 0.6em;
`;
const Form =styled.form`
display:flex;
flex-direction:column;
`;
const Input=styled.input`
    flex:1;

    margin:1.2em 0.8em 0 0.8em;
    padding:0.6em;
`;
const Button =styled.button`
    border:none;
    padding:1em 1em;

    font-weight:300;
    font-size:1em;
    margin:1em ;
    background-color:teal;
    color:white;
    cursor:pointer;
`;
const Link=styled.a`
    font-size:0.8em;
    margin:0.8em 0 1em 1em;
    text-decoration:underline; 
    
`;
const Register = () => {
  return (
    <Container >
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="Username" type="text"/> <Input placeholder="Password" type="text"/> 
                
                
                <Button>LOGIN</Button>
                <Link>Do Not Remeber The Password?</Link>
                <Link>Create A New Account</Link>            
                </Form>
        </Wrapper>
    </Container>
  )
}

export default Register