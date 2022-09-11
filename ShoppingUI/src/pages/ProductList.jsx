import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement";
import Footer  from "../components/Footer";
import Product from "../components/Product";
import styled from 'styled-components'
import Newsletter from "../components/Newsletter";
import {mobile} from '../responsive';
const ProductList = () => {
  const Title=styled.h1`
    ${mobile({fontSize:'1.5em',textAlign:'center',fontWeight:'600'})}
  `;

  const FilterContainer=styled.div`
    display:flex;
    justify-content:space-between;
  `;
  const FilterText=styled.span`
        font-size:1.2em;
        font-weight:600;
        margin-left:0.8em;
        
        ${mobile({marginLef:'0',fontSize:'1em',fontWeight:'500'})}
  `;
  
  const Filter=styled.div`
    margin:2em;

    ${mobile({width:"0 1.4em",display:'flex',flexDirection:'column'})}
  `;
  const Select =styled.select`
            padding:0.6em;
            margin-left:0.8em;
            ${mobile({width:'100%',marginLeft:'0'})}
       
  `;
  const Option=styled.option`
  
  `;

  return (
    <div>
        <Announcement/>
        <Navbar />     
        <Title>Dress</Title>
        <FilterContainer>
            <Filter><FilterText>Search Product:
                <Select>
                    <Option selected disabled>Color</Option>
                    <Option >White</Option>
                    <Option >Black</Option>
                    <Option >Red</Option>
                    <Option >Blue</Option>
                    <Option >Yellow</Option>
                    <Option >Green</Option>
                </Select> 
                 <Select>
                    <Option selected disabled>Size</Option>
                    <Option >S</Option>
                    <Option >M</Option>
                    <Option >L</Option>
                    <Option >XL</Option>
                    <Option >XXL</Option>
                    <Option >XXXL</Option>
                </Select> 
 
                </FilterText></Filter>
            <Filter><FilterText>Sort Product: 
                 <Select>
                    <Option selected disabled>Newest</Option>
                    <Option >Price(asc)</Option>
                    <Option >Price(desc)</Option>
                    
                </Select> 
 
   
            </FilterText></Filter>
        </FilterContainer>
        <Product/>
        <Newsletter/>
        <Footer/>
    </div>

  )
}

export default ProductList