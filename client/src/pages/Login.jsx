
import { WrapTextSharp } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
width: 100w;
height: 100vh;
background: linear-gradient(rgba(255 , 255, 255,0.3) , rgba(255 , 255, 255,0.5)), url("https://static.zara.net/photos///contents/mkt/spots/aw23-north-woman-new/subhome-xmedia-40//w/1920/IMAGE-landscape-fill-9d6010ce-7daa-464a-a329-ba26cf369a4a-default_0.jpg?ts=1696238037443");
display: flex;
align-items: center;
justify-content: center;
background-size:cover;

`

const Wrapper = styled.div`
padding: 20px;
width: 25%;
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
flex-direction: column;

`

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0px;
padding: 10px;
margin-bottom:10px
`

const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
width: 40%;
border: none;
padding: 10px 15px;
background-color:teal;
color:white ;
cursor: pointer;
`
const Link = styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`



const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Login</Title>
            <Form>

                <Input placeholder="Username" />

                <Input placeholder="Password" />

                <Button>Login</Button>
                <Link>Forgot Password?</Link>
                <Link>Create Account</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login