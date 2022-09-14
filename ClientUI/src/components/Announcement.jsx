import styled from "styled-components"




const Container=styled.div`
    height:2em;
    background-color:teal;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    font-style: 1em;
    font-weight: 500;
`
const Announcement = () => {
  return (
    <Container>Free Shipping on Orders over 500kr!!!</Container>
  )
}

export default Announcement