import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { style } from '@material-ui/system'
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"


const Container = styled.div`

    height : 60px;
    ${mobile({height:"50px"})}

`
const Wrapper = styled.div`

    padding: 10px 20px; 
    display:flex;
    justify-content : space-between;
    align-items: center;
    ${mobile({padding:"10px 0px"})}
`
const Left = styled.div`
     flex:1;
    display:flex;
    align-items :center;
`

const Language = styled.div`

    font-size:14px;
    cursor: pointer;
    ${mobile({display:"none"})}
`

const SearchContainer = styled.div`

    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({padding:"1px" , marginRight:"20px" , marginLeft:"4px"})}
`

const Input = styled.input`
    border: none;
    ${mobile({width:"50px"})}
`

const Center = styled.div`

    flex:1;
    text-align: center;

`

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize:"22px"})}
`

const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex:2,justifyContent:"center"})}
`

const MenuItem = styled.div`
    font-size : 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize:"11px" , marginLeft:"5px"})}
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left><Language>EN</Language>
            <SearchContainer>
                <Input placeholder='Search'/>
                <Search style={{color :"gray" , fontSize:"16px"}}/>
            </SearchContainer>
            </Left>
            <Center><Logo>SwiftCart</Logo></Center>
            
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN-IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={2} color='primary'>
                    <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar