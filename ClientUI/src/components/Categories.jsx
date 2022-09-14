//named export
import {categories} from '../data'
import {mobile} from '../responsive';
//default export 
import ItemCategory from './ItemCategory'
import  styled from 'styled-components'
//component styled
const Container=styled.div`
    display:flex;
    padding:1.2em;
    background-color: #f2f2f3;
    ${mobile({flexDirection: 'column',padding:'0.5em'})}
    
`
const Categories = () => {
    console.log(categories.length); 
  return (
    <Container>
      {categories.map((category) =>(
                <ItemCategory item={category}/>     
      ))}  
    </Container>
  )
}

export default Categories