import { Face, Facebook, Instagram, MailOutline, Phone, Reddit, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`

    display: flex;
    ${mobile({flexDirection:"column"})}
`

const Left = styled.div`

    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.div`

font-weight: 700;

`
const Desc = styled.div`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;

`
const SocialIcon = styled.div`

    width: 40px;
    height: 40px;
    border-radius: 50%;  
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #${props=>props.color};
    color:white;

    margin-right: 20px;
`


const Center = styled.div`
    flex:1;
    padding:20px;
    ${mobile({display:"none"})}

`

const Title = styled.h3`
margin-bottom: 30px;

`

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display:flex;
flex-wrap: wrap;
`

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;


`

const Right = styled.div`
    flex:1;
    padding:20px;

`

const ContactItem = styled.div`
 margin-bottom: 15px;
 display: flex;
 align-items: flex-start;

`
const Payments = styled.img`
width: 60%;

`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>SwiftCart</Logo>
            <Desc>Welcome to ShopMaster! Your Ultimate Online Shopping DestinationAt ShopMaster,<br/> we've curated an exceptional shopping experience designed with you in mind. Explore a vast array of products from leading brands, handpicked for quality, style, and affordability. </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="1DA1F2">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="FF4500">
                    <Reddit/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men's Section</ListItem>
                <ListItem>Women's Section</ListItem>
                <ListItem>Kids Section</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>

            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
               <Room style={{marginRight:"10px"}}/> 422 Subway Street, South Carolina 2121
            </ContactItem>
            <ContactItem>
               <Phone style={{marginRight:"10px"}}/> +1 123-458-535
            </ContactItem>
            <ContactItem>
               <MailOutline style={{marginRight:"10px" , marginBottom:"0px"}}/> peter_griffin@web.com
            </ContactItem>
            <Payments style={{marginTop:"-15px"}} src="https://content.invisioncic.com/p289038/monthly_2022_10/Payment-methods.png.2b9ba23475aaa15189f555f77ec3a549.png"/>
        </Right>

    </Container>
  )
}

export default Footer