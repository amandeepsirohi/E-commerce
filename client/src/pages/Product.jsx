import styled from "styled-components"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import Announcement from '../components/Announcement';
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";


const Container = styled.div`

`

const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({flexDirection:"column" , padding:"10px"})}

`

const ImgContainer = styled.div`
flex:1;
`

const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({height:"50vh"})}
`

const InfoContainer = styled.div`
flex:1;
padding: 0px 50px;
${mobile({padding:"10px"})}
`
const Title = styled.h1`
font-weight: 200;

`
const Desc = styled.p`
margin: 20px 0px;
color: #909090;
`
const Price = styled.span`
font-weight: 100;;
font-size: 40px;
${mobile({fontSize:"30px"})}
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({width:"100%"})}
`
const Filter = styled.div`
display: flex;
align-self: start;
`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props =>props.color};
margin: 3px 6px;
cursor: pointer;
`
const FilterSize = styled.select`
margin: 10px;
padding: 5px;
margin-top: -1px;
`
const FilterSizeOption = styled.option`

`
const AddContainer = styled.div`
width: 50%;
display:flex;
align-items: center;
justify-content: space-between;
${mobile({width:"100%"})}
`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;


`
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border:1px solid teal;
display: flex;
justify-content: center;
align-items: center;
margin: 5px;

`
const Button = styled.button`

padding: 15px;
border: 1px solid teal;
cursor: pointer;
background-color: white;
font-weight: 5000;

&:hover{
    background-color: lightgray;
}
`

const Product = () => {
  return (
   <Container>
    <Navbar/>
    <Announcement/>
    <Wrapper>
        <ImgContainer>
            <Image src ="https://images.unsplash.com/photo-1625698457101-fec2f565a8f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80 " />
        </ImgContainer>
        <InfoContainer>
            <Title>Men's White Shirt</Title> 
            <Desc>The online encyclopedia project Wikipedia is the most popular wiki-based website, and is one of the most widely viewed sites in the world, having been ranked in the top twenty since 2007.[7] Wikipedia is not a single wiki but rather a collection of hundreds of wikis, with each one pertaining to a specific language. The English-language Wikipedia has the largest collection of articles: as of July 2023, it has over 6 million articles.</Desc>
            <Price>₹20</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black"/>
                    <FilterColor color="green"/>
                    <FilterColor color="red"/>
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>
                <Button>Add to cart</Button>
            </AddContainer>
        </InfoContainer>
    </Wrapper>

    <Newsletter/>
    <Footer/>
   </Container>
  )
}

export default Product
