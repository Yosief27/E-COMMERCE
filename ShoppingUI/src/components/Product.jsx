//named export 
import {popularProducts} from '../data'
import {mobile} from '../responsive';
//default export
import  styled from 'styled-components'
import ItemProduct from './ItemProduct'
//component styled
const Container=styled.div`
    display:flex;
    padding:1.2em;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    
`
const Product= () => {
  return (
    <Container>
      {popularProducts.map((category) =>(
                <ItemProduct item={category} key={category.id}/>     
      ))}  
    </Container>
  )
}

export default Product 