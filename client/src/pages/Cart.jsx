import styled from "styled-components"
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`

`

const Wrapper = styled.div`

padding: 20px;
${mobile({padding:"10px"})}
`
const Title = styled.h1`
font-weight: 300;
text-align: center;
`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

padding: 20px;
`
const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border : ${props=>props.type === "filled" && "none"};
background-color : ${props=>props.type === "filled" ? "black" : "transparent"};
color : ${props=>props.type === "filled" &&"white" }
`
const TopTexts = styled.div`
${mobile({display:"none"})}

`
const TopText = styled.span`
text-decoration: underline;
margin: 0px 10px;
cursor: pointer;

`


const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection:"column"})}
`

const Info = styled.div`
flex:3;

`
const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection:"column"})}
`
const ProductDetail = styled.div`
flex:2;
display: flex;
`
const Image = styled.img`
width: 160px; 
`
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const ProductName = styled.span`

`
const ProductId = styled.span`

`
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props)=>props.color};
`
const ProductSize = styled.span`

`
const PriceDetail = styled.div`
flex:1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`

const ProductAmount= styled.div`
font-size: 24px;
margin: 5px;
${mobile({margin:"8px 15px " , fontSize:"20px"})}
`

const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
${mobile({marginBottom:"17px" , fontSize:"25px"})}

`
const Hr = styled.hr`
background-color: #eee;
border:none;
height: 1px;
`

const Summary = styled.div`
flex:1;
border:0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`

const SummaryTitle = styled.h1`
font-weight: 200;
${mobile({marginLeft:"35px"})}
`
const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${(props) => props.type === "total" && "500"};
font-size: ${(props) => props.type === "total" && "500"};
`
const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`

`
const Button = styled.h1`
width: 100%;
padding: 5px;
background-color: black;
font-weight: 600;
color: white;
display: flex;
align-items: center;
justify-content: center;
${mobile({width:"60%" , padding:"2px" , fontSize:"23px" , marginLeft:"44px"})}
`


const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>Your Bag</Title>
            <Top>
                <TopButton>Continue Shopping</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Our WishList(0)</TopText>
                </TopTexts>
                <TopButton type="filled">CheckOut Now</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://static.zara.net/photos///2023/I/0/2/p/4090/306/800/2/w/850/4090306800_6_2_1.jpg?ts=1695295465844"/>
                            <Details>
                                <ProductName><b>Product:</b>Latest Fashion Shoes</ProductName>
                                <ProductId><b>Id:</b>123456</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size:</b>11</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                    <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>₹3000</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <br/>
                    <Hr/>
                    <br/>
                    <Product>
                        <ProductDetail>
                            <Image src="https://static.zara.net/photos///2023/I/0/2/p/0993/300/500/2/w/563/0993300500_6_1_1.jpg?ts=1694676320447"/>
                            <Details>
                                <ProductName><b>Product:</b>Latest Fashion Shoes</ProductName>
                                <ProductId><b>Id:</b>123456</ProductId>
                                <ProductColor color="green"/>
                                <ProductSize><b>Size:</b>11</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                    <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>₹3000</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>₹3000</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>₹30</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>₹300</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice>₹2730</SummaryItemPrice>
                    </SummaryItem>
                    <Button>Checkout Now</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart