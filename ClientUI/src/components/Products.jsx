//named export 
import { popularProducts } from '../data'
import { mobile } from '../responsive';
import { useState, useEffect } from 'react'
//default export
import styled from 'styled-components'
import ItemProduct from './ItemProduct'
import axios from 'axios';

//component styled
const Container = styled.div`
    display:flex;
    padding:1.2em;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    
`
const Product = ({ cat, sort, filters }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([])
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(cat ? `http://localhost:3003/api/products/categories?$cat` : "http://localhost:3003/api/products");
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    }
    getProducts();
  }, [cat])
  useEffect(()=>{
    cat &&
      setFilteredProducts(
          products.filter(item=>Object.entries(filters).every(([key,value])=>item[key].includes(value)
        )
          )
      )
  },[products,cat,filters])

  return (
    <Container>
      {popularProducts.map((category) => (
        <ItemProduct item={category} key={category.id} />
      ))}
    </Container>
  )
}

export default Product 