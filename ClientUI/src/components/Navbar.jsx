import { Badge } from '@material-ui/core'
import {mobile} from '../responsive';
import {ShoppingCartOutlined,Search} from '@material-ui/icons'
import React from 'react'

import styled from 'styled-components'
const Navbar = () => {
    const Container=styled.div`
            height:4em;
            background-color: #f1f1f1;
            margin-bottom:0.7em;
            ${mobile({height: "3em"})};           

    `
    const Wrapper=styled.div`
        padding:1em 2em;
        display:flex;
        align-items:center;
        justify-content:space-between;
        ${mobile({padding: "1em 0",justifyContent:"space-around"})};           
    `
    //left contents


    const Left=styled.div`
        display: flex;
        align-items:center;
        flex:1;
        
    `
    const Language=styled.div`
        font-size:1em;
        cursor: pointer;
        ${mobile({display: "none"})};           
    `
    const SearchContainer=styled.div`
        border:1px solid lightgray;
        display:flex; 
        align-items: center;
        margin-left: 1em;
        padding: 0.2em;
        border-radius:0.3em;
        ${mobile({marginLeft: "0.2em",padding:"0.1em"})};           
    `

    const Input=styled.input`
        border:none;
        padding:0.5em 0;
        background-color: #f1f1f1;
        text-align:center;
        ${mobile({width: "4em"})}; 
        &:hover{
            background-color: white;
        }                  
    `

    //Right items
    const Right=styled.div`
    flex:1;
    display:flex;
    justify-content:right;
    align-items:center;
    ${mobile({ flex:'2',justifyContent: "center"})};           

    `
    const MenuItem=styled.div`
        font-size:0.9em;
        margin-left: 2em;
        cursor:pointer;
        ${mobile({marginLeft: "1em",fontSize: "0.7em"})};           
    `;

    //center items
    const Center=styled.div`flex:1`;
    
    const Logo=styled.h1`
        font-weight:bold;
        text-align:center;
        ${mobile({fontSize: "1.2em"})};           

    `
    
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer style={{color: 'gray',fontSize:16}}>
                    <Input placeholder='Search'/>
                    <Search/> 
                </SearchContainer>

            </Left>
        <Center>
            <Logo>
                ECOM.
            </Logo>
        </Center>
            <Right>
                <MenuItem>REGESTER</MenuItem>
                <MenuItem>SININ</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar