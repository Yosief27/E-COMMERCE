import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";
import styled from 'styled-components';
//styled componentconst
const Info = styled.div`
        opacity:0;
        display:flex;
        width:100%;
        height:100%;
        position:absolute;
        top:0;
        left:0;
        justify-content:center;
        align-items:center;
        border-radius:3px;
        background-color:rgba(0,0,0,0.2);

`
const Container = styled.div`
flex:1;
margin:0.4em;
max-width:280px;
height:350px;
display:flex;
justify-content:center;
align-items:center;
background-color:#f5fbfb;
transition:all 0.5s ease;
position:relative;
&:hover ${Info}{
    opacity:1;
}
`

const Image = styled.img`
    height:75%;
`

const Button = styled.button`
    border:none;
    padding:0.6em;
    background-color:white; 
    color:gray;
    border-radius:2px;
    cursor:pointer; 
    font-weight:600;    
    `

const Icon = styled.div`
    width:2em;
    height:2em;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:0.3em;
    border-radius:50%;
    background-color:white;
    transition:all 0.5s ease-in-out;
    cursor:pointer;
    &:hover{

    background-color:#b6cccc;
    transform:scale(1.1);
    }
    ;`;
    
const Color = styled.div``;
const ItemProduct = ({ item }) => {
    return (
        <Container key={item.id}>
            <Color />

            <Image src={item.img} />

            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>

                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>

            </Info>

        </Container>
    )
}

export default ItemProduct;