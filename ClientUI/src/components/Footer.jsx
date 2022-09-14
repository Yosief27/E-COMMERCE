import {mobile} from '../responsive';
import { Facebook,Instagram,Twitter ,Room,Phone,MailOutline} from '@material-ui/icons';
import styled from 'styled-components';
//styled components
const Container=styled.div`
      display: flex;
     background-color: #f5f2fd;
    ${mobile({flexDirection: 'column'})}
`;

const Left=styled.div`
    flex:1;
    display:flex;
    flex-direction:column;

    padding:2em;
`;
const Logo=styled.h1`
`
const Desc=styled.p`
   margin:1.2em 0;

`
const SocialContainer=styled.div`
    display:flex;
    
 

`

const SocialIcon=styled.div`
    width:2.5em;
    height:2.5em;
    background-color:#${color=>color.bg};
    border-radius:50%;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-left:1em;
`

const Center=styled.div`
    flex:1;
    padding:2em;
    ${mobile({display:'none'})}
    `;
const Title=styled.h2`
padding-top:3px;`;

const List=styled.ul`
    list-style-type:none;
    margin:1.2em 0;
    padding:0;
    display:flex;
    flex-wrap:wrap;

    
`;
const ListItem=styled.li`
    width:50%;
    margin-bottom:0.6em;
    `;
const Right=styled.div`
flex:1;
padding:2em;
${mobile({backgroundColor:'#b0a6a6'})};

`;
const ContactContainer=styled.div`
margin-top:0.8em;
`;
const ContactItem=styled.div`
    display:flex;
    align-items:center;
    margin-bottom:1em;
`;




const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>ECOM.</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quas itaque cumque velit fugiat necessitatibus illo incidunt! Consequuntur magni totam minima, labore aliquam maxime excepturi earum accusantium nihil? Suscipit aliquam possimus, dolore molestiae unde fuga, nisi iure voluptatem adipisci optio sapiente maiores repudiandae saepe omnis natus libero voluptas? Voluptatum, iure?</Desc>
    
            <SocialContainer>
                <SocialIcon bg='3B5999'>
                    <Facebook/>

                </SocialIcon>
                <SocialIcon bg="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon bg="55ACEE">
                    <Twitter/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Terms</ListItem>
                <ListItem>Profile</ListItem>
            </List>

        </Center>
        <Right>
                <Title>Contact Us</Title>
                <ContactContainer>
                    <ContactItem>
                        <Room style={{marginRight:"10px"}}/> Peterson-bergers väg 55 Uppsala
                    </ContactItem>
                    <ContactItem>
                        <Phone style={{marginRight:"10px"}}/> +46739124404
                    </ContactItem>
                    <ContactItem>
                        <MailOutline style={{marginRight:"10px"}}/>Josiyoniug@gmail.com
                    </ContactItem>
                </ContactContainer>

        </Right>
    </Container>
  )
}

export default Footer