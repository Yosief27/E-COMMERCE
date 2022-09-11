//named export 
import {mobile} from '../responsive';
//default export
import styled from  'styled-components';
//styled components
const Container=styled.div`
flex:1;
margin:0.4em;
height:70vh;
position:relative;
`
const Info=styled.div`
position:absolute;
width:100%;
height:100%;
top:0;
left:0;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const Image=styled.img`
    width:100%;        
    height:100%;
    object-fit:cover;
    ${mobile({height:
    '50vh'})}
`
const Title=styled.h1`
    color:white;
    margin-bottom:1.2em;
`
const Button =styled.button`
    border:none;
    padding:0.6em;
    background-color:white; 
    color:gray;
    border-radius:2px;
    cursor:pointer; 
    font-weight:600;    
    `
    
const ItemCategory = ({item}) => {
  return (
    <Container key={item.id}>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>

    </Container>
  )
}

export default ItemCategory