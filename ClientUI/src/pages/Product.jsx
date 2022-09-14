import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Newletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Remove ,Add} from '@material-ui/icons';
import {mobile } from '../responsive';



  const  Wrapper=styled.div`
        display:flex;
        padding:3em;
        ${mobile({flexDirection: 'column',padding:'0'})}
  `;
  const  ImgContainer=styled.div`
    flex:1;

    padding:0 2em;
  `;
  const  Image=styled.img`
    width:100%;
    height:90vh;
    object-fit: contain;
    ${mobile({height:'40vh'})}
  `;
  const  InfoContainer=styled.div`
    flex:1;
    padding:0 2em;

  
  `;
  const Title=styled.h1`
    font-weight:200;
    ${mobile({fontSize:'2em'})}
  `;
  const Desc=styled.p`
    margin:1.3em 0;
    ${mobile({margin:'0.5em 0'})}
  `;

  const Price=styled.h2`
    margin-bottom:0.8em;
    font-weight:300;
    
    ${mobile({marginBottom:'0.5em'})}

  `;

  const FilterContainer=styled.div`
    display:flex;
    width:50%;
    justify-content:space-between;
    ${mobile({width:'100%'})}
  `;
  const Filter=styled.div`
    display:flex;
    align-items:center;
    
  `;

  const FilterTitle=styled.h3`
        font-weight:300;
        margin-right:0.4em;
`;
  const FilterColor=styled.div`
    width:2em;
    height:2em;
    margin-right:0.4em;
    border-radius:50%;
    background-color:${props=>props.color};
  `;
  const FilterSize=styled.select``;
  const FilterSizeOption=styled.option``;
  const AddContainer=styled.div`
    display:flex;
    width:50%;
    margin-top:1em;
    justify-content:space-between;
    ${mobile({width:'100%'})};
  `;
  

  const AmountAdd=styled.div`
    display:flex;
    align-items:center;
    font-weight:600;
    margin:0.2em;
    padding-right:1em;

  `;
  const Button=styled.button`
    padding:1em;
    font-weight:600;
    border:2px solid teal;
    background-color:white;
    cursor:pointer;
    &:hover{
        background-color:#f8f4f2;
    }
  
  `;
  const Amount=styled.label`
    width:1.8em;
    height:1.8em;
    border-radius:0.6em;
    border:1px solid teal;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:0 0.4em;
  `;
    

 const Product = () => { 
  return (
    <div>
       <Announcement/> 
        <Navbar/>
        <Wrapper>
            <ImgContainer>
                <Image src='https://i.ibb.co/S6qMxwr/jean.jpg'/>
            </ImgContainer>
            <InfoContainer>
                <Title>New Design Jeans</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis explicabo, quaerat aliquam porro earum odit inventore quo minus ratione rerum delectus. Dignissimos, quae.</Desc>
                <Price>200Kr</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color :</FilterTitle>
                        <FilterColor color='black' />
                        <FilterColor color='blue' />
                        <FilterColor color='gray' />
                    </Filter>
                    <Filter>
                        <FilterTitle>Size :</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>xL</FilterSizeOption>
                        </FilterSize>
                       
                    </Filter>

                </FilterContainer>
                <AddContainer>
                    <AmountAdd>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountAdd>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newletter/>
        <Footer/>

    </div>
  )
}

export default Product