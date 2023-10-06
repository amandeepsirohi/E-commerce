import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`

height: 60vh;
background-color: rgb(255, 245, 224);
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
${mobile({fontSize:"50px"})}
`

const Desc = styled.div`
font-size: 24px;

font-weight: 300;
margin-bottom: 20px ;
${mobile({textAlign:"center" , fontSize:"20px"})}
`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    border-radius: 10px;
    overflow: hidden;
    ${mobile({width:"80%"})}
`

const Input = styled.input`
border: none;
flex:8;
padding-left: 20px;
`

const Button = styled.button`
flex:1;
border: none;
background-color: rgb(255, 105, 105);
color: white;

`

const Newsletter = () => {
  return (
    <Container>
        <Title >NewsLetter</Title>
        <Desc>Get latest updates from your favorite brands</Desc>
        <InputContainer>
            <Input placeholder='Enter Your Email'/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter