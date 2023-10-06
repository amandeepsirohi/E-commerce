import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: 400;
    height: 25px;
    background-color: rgb(199, 0, 57);
    color: white;
    ${mobile({width:"99.9%"})}
`

const Announcement = () => {
  return (
    <Container>
        
       <span> Big Billion days sale is finally here!!</span><img width="20" height="20" src="https://img.icons8.com/papercut/60/discount.png" alt="discount"/>
    </Container>
  )
}

export default Announcement