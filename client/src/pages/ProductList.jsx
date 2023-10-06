import styled from "styled-components"
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { mobile } from "../responsive";

const Container = styled.div`

`
const Title = styled.h1`
margin: 10px;
${mobile({fontSize:"22px"})}
`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
margin: 20px;
display: flex;
justify-content: space-between;
align-items: center;
${mobile({margin:"0px 15px"  , display:"flex" , flexDirection :"column" ,alignItems:"center" , justifyContent:"start" })}
`

const FilterText = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-right: 13px;
  
  ${mobile({marginRight:"0px" , fontSize:"16px"})}
`

const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({margin:"7px 0px" , padding:"2px"})}

`

const Option = styled.option `


`

const ProductList = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter><FilterText>Filter Products:</FilterText>
        <Select>
          <Option disabled selected>Color</Option>
          <Option>Red</Option>
          <Option>Yellow</Option>
          <Option>Green</Option>
          <Option>Blue</Option>
          <Option>Purple</Option>
          <Option>Black</Option>

        </Select>

        <Select>
          <Option disabled selected>Size</Option>
          <Option>XS</Option>
          <Option>S</Option>
          <Option>M</Option>
          <Option>L</Option>
          <Option>XL</Option>
          <Option>XXL</Option>

        </Select>
        </Filter>
        <Filter><FilterText>Sort Products:</FilterText>
        <Select>
          <Option  selected>Newest</Option>
          <Option>Price (inc)</Option>
          <Option>Black (dec)</Option>

        </Select>
        </Filter> 
      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList