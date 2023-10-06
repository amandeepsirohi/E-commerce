import styled from "styled-components"

import { mobile } from '../responsive';


const Container = styled.div`

flex:1;
height: 70vh;
position: relative;
`
const Image = styled.img`

width: 100%;
margin: 3px;
height: 100%;
object-fit: contain;//changed
${mobile({height:"62vh" , margin:"0px"})}
`
const Info = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
const Title = styled.h1`
color: white;
margin-bottom: 20px;
`

const Button = styled.button`
border: none;
padding: 10px;
background-color: white;
color: gray;
cursor: pointer;
font-weight: 600;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src ={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem