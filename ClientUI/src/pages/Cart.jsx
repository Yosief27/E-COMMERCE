import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Announcement from '../components/Announcement';
import Addias from '../assets/addias.png';
import  Air from '../assets/air.png';
import{Add,Remove} from '@material-ui/icons';
import {mobile} from '../responsive';
//styled comp
const Container= styled.div``;
const Wrapper= styled.div`
    padding:1.4em;
`;
//TODO: remove  
const Title=styled.h2`
    font-weight:400;
    text-align:center;
    margin-bottom:1em;
`;
//FIXME: this need to be done 


const TopContainer= styled.div`
    display: flex;
    justify-content:space-between;
    padding:1em;
    align-items:center;
`;



const TopButton = styled.button`
    padding:0.6em;
    background-color:${props=>props.type==='filled'? 'black':'transparent' };
    color:${props=>props.type==='filled' && 'white'};
    border:${props=>props.type==='filled'&& 'none'};

`;


const TopTexts= styled.div`
   ${mobile({display:'none'})} 
`;

const TopText= styled.span`
    text-decoration:underline;
    margin:0 0.5em;
    cursor:pointer;
`;


const BottomContainer= styled.div`
    display:flex;
    justify-content:space-around;
   ${mobile({flexDirection:'column'})} 
`;
const Info=styled.div`
    flex:3;

`;
const Product= styled.div`
    display:flex;
   ${mobile({flexDirection:'Column'})} 
`;

const Image= styled.img`
    width:10em;
    height:10em;
    margin-right:1em;
`;

const ProductDetail= styled.div`
    flex:2;
    padding:1em;
    display:flex;
    
`;
const DetailsInfo= styled.div`
     padding:1em;
     display:flex;
     flex-direction:column;
    justify-content:space-around;  
`;
const ProductName= styled.span``;
const ProductID= styled.span``;
const ProductSize= styled.span``;
const ProductColor= styled.div`
    width:1.5em;
    height:1.5em;
    border-radius:50%;
    background-color:${props=>props.color};
`;
const PriceDetail= styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    
   ${mobile({flexDirection:'row',justifyContent:'space-around',alignItems: 'center'})} 
`;
const AmountContainer= styled.div`
    display:flex;
    align-items:center;
   margin-bottom:1em; 
`;

const ProductAmount= styled.span`
    width:1.2em;
    height:1.2em;
    border:1px solid teal;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const ProductPrice= styled.h1`
    font-size:1.4em;
    font-weight:400;
    ${mobile({paddingBottom:'8px'})};
`;
const Hr=styled.hr`
background-color:#eee;
border:none;
height:1px;
`;



const Summary=styled.div`
    flex:1;
    width:80%;
    padding:1.3em;
    border:1px solid gray;
    border-radius:5px;
    height:50vh;
`;

const SummaryTitle= styled.h1`
    font-size:1.4em;
    font-weight:400;
    
    
`;
const SummaryItem= styled.div`
    display:flex;
    margin:1.4em 0;
    justify-content:space-between;
    font-size:${props=>props.type==="total"&& '1.2em'};
    font-weight:${props=>props.type==="total"&& '400'};
    
    
`;
const SummaryItemText= styled.span``;
const SummaryItemPrice= styled.span``;
const Button=styled.button`
    width:100%;
    background-color:blacK;
    color:white;
    cursor:pointer;
    padding:0.4em;
    font-weight:500;

`;

const Cart = () => {
  
  return (
    <Container>
        <Announcement/>
        <Navbar/>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <TopContainer>
                    <TopButton >CONTINUE SHOPPING</TopButton>                
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your wishlist(0)</TopText>
                    
                    </TopTexts>
                   <TopButton type='filled'>CHECKOUT NOW</TopButton>                
               </TopContainer>
                <BottomContainer>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src={Addias}/>
                                <DetailsInfo>
                                    <ProductName><b>Product:</b>addias</ProductName>
                                    <ProductID><b>ID:</b>399343</ProductID>
                                    <ProductColor color='blue'/>
                                    <ProductSize><b>Size:</b>M</ProductSize>
                                </DetailsInfo>
                                
                            </ProductDetail>
                            <PriceDetail>
                               < AmountContainer>

                                <Add/>
                                    <ProductAmount>2</ProductAmount>
                                <Remove/>
                               </AmountContainer>
                               <ProductPrice>
                                200kr
                               </ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src={Air}/>
                                <DetailsInfo>
                                    <ProductName><b>Product:</b>Air Jordan</ProductName>
                                    <ProductID><b>ID:</b>399343</ProductID>
                                    <ProductColor color='red'/>
                                    <ProductSize><b>Size:</b>M</ProductSize>
                                </DetailsInfo>
                                
                            </ProductDetail>
                            <PriceDetail>
                               < AmountContainer>

                                <Add/>
                                    <ProductAmount>2</ProductAmount>
                                <Remove/>
                               </AmountContainer>
                               <ProductPrice>
                                400kr
                               </ProductPrice>
                            
                            </PriceDetail>
                            </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>600 kr</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimate Shipping</SummaryItemText>
                            <SummaryItemPrice>59 kr</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>-10 kr</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>649 kr</SummaryItemPrice>
                        </SummaryItem>



                    <Button>CHECKOUT NOW</Button>

                    </Summary>
                </BottomContainer>
            </Wrapper>
        <Footer/>
    </Container>

  )
}

export default Cart