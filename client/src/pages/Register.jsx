import { WrapTextSharp } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"


const Container = styled.div`
width: 100w;
height: 100vh;
background: linear-gradient(rgba(255 , 255, 255,0.3) , rgba(255 , 255, 255,0.5)), url("https://static.zara.net/photos///contents/mkt/spots/aw23-north-woman-coats/subhome-xmedia-40//w/1920/IMAGE-landscape-fill-5df1e4a7-6767-48e1-86df-17fe2e9e2513-default_0.jpg?ts=1696239049410");
display: flex;
align-items: center;
justify-content: center;
background-size:cover;
${mobile({width:"75%"})}
`

const Wrapper = styled.div`
padding: 20px;
width: 40%;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
${mobile({width:"75%"})}
`
const Title = styled.h1`

font-size: 20px;
font-weight: 300;
` 

const Form = styled.form`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;

`
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`
const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
width: 40%;
border: none;
padding: 15px 20px;
background-color:teal;
color:white ;
cursor: pointer;
`
const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="Name" />
                <Input placeholder="Last name" />
                <Input placeholder="Username" />
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Input placeholder="Confirm password" />
                <Agreement>
                    By creating an account , I concent to the processing
                    of my person data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>Register</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register