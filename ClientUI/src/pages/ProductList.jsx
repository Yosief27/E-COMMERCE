import {useLocation} from 'react-router-dom'
import{useState} from 'react';
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement";
import Footer  from "../components/Footer";
import Products from "../components/Products";
import styled from 'styled-components'
import Newsletter from "../components/Newsletter";
import {mobile} from '../responsive';
const ProductList = () => {
  const [filters,setFilters]=useState({})
  const [sort,setSort]=useState("newest");

  const history= useLocation();
  const cat=history.pathname.split("/")[2]
// functions

  const handleFilter=(e)=>{
    const value=e.target.value;
    setFilters({
      ...filters,
    
      [e.target.name]:value
    });

  }
  
  
  //style components
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
                <Select name="color" onChange={handleFilter}>
                    <Option disabled>Color</Option>
                    <Option >White</Option>
                    <Option >Black</Option>
                    <Option >Red</Option>
                    <Option >Blue</Option>
                    <Option >Yellow</Option>
                    <Option >Green</Option>
                </Select> 
                 <Select name="size" onChange={handleFilter}>
                    <Option  disabled>Size</Option>
                    <Option >S</Option>
                    <Option >M</Option>
                    <Option >L</Option>
                    <Option >XL</Option>
                    <Option >XXL</Option>
                    <Option >XXXL</Option>
                </Select> 
 
                </FilterText></Filter>
            <Filter><FilterText>Sort Product: 
                 <Select  onChange={e=>setSort(e.target.value)}>
                    <Option  disabled value="newest">Newest</Option>
                    <Option value="asc" >Price(asc)</Option>
                    <Option value="desc" >Price(desc)</Option>
                    
                </Select> 
 
   
            </FilterText></Filter>
        </FilterContainer>
        <Products sort={sort} filters={filters} cat={cat}/>
        <Newsletter/>
        <Footer/>
    </div>

  )
}

export default ProductList