import {
    
    
    MailOutline,
    Phone,
    
    Room,
    Twitter,
    GitHub,
    LinkedIn
  } from "@material-ui/icons";
  import styled from "styled-components";
  import { Link } from "react-router-dom";
//   import { mobile } from "../responsive";
  
  const Container = styled.div`
    display: flex;
    border-top: 1px solid lightgray;
    bottom: 0;
    height: 10vh;
    font-size: 14px;
    @media (max-width: 768px){
      display: flex;
      flex-direction: column;
      font-size: 14px;
      margin: 2vw;
    }
    
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    @media (max-width: 768px){
      padding: 5px;
    }
  `;
  
  const Logo = styled.h1`
    font-size: 24px;
    @media (max-width: 768px){
      font-size: 18px;
    }
  `;
  
  const Desc = styled.p`
    margin: 20px 0px;
    @media (max-width: 768px){
      margin: 5px 0px;
    }

  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    /* color: white; */
    /* background-color: #${(props) => props.color}; */
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    text-decoration: none;
    border: 1px solid black;
    @media (max-width: 768px){
      margin-right: 10px;
    }
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    @media (max-width: 768px){
      padding: 10px;
    }
   
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
    font-size: 22px;
    @media (max-width: 768px){
      font-size: 16px;
    }
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    @media (max-width: 768px){
      margin-bottom: 4px;
    }
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    @media (max-width: 768px){
      padding: 5px;
    }
    
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    @media (max-width: 768px){
      margin-bottom: 8px;
    }
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>IndoKart</Logo>
          <Desc>
            IndoKart is India's finest home interior shopping company with 
            an aim to provide high quality products.
          </Desc>
          <SocialContainer>
            <SocialIcon style={{cursor:"pointer"}}  color="3B5999">
            <a href="https://github.com/bsourabhkumar" rel="noreferrer" target="_blank"><GitHub /></a>
            </SocialIcon>
            {/* <SocialIcon style={{cursor:"pointer"}} color="E4405F">
              <Instagram />
            </SocialIcon> */}
            <SocialIcon style={{cursor:"pointer"}} color="55ACEE">
            <a href="https://twitter.com/Sourabh6605286" rel="noreferrer" target="_blank"><Twitter /></a>
            </SocialIcon>
            <SocialIcon style={{cursor:"pointer"}} color="E60023">
              <a href="https://www.linkedin.com/in/sourabh-kumar-69bab8136/" rel="noreferrer" target="_blank"><LinkedIn /></a>
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem><Link to="/">Home</Link></ListItem>
            <ListItem><Link to="/cart">Cart</Link></ListItem>
            {/* <ListItem>Man Fashion</ListItem> */}
            {/* <ListItem>Woman Fashion</ListItem> */}
            {/* <ListItem>Accessories</ListItem> */}
            <ListItem><Link to="/profile"> My Account</Link></ListItem>
            {/* <ListItem>Order Tracking</ListItem> */}
            <ListItem><Link to="/wishlist">Wishlist</Link></ListItem>
            {/* <ListItem>Wishlist</ListItem> */}
            {/* <ListItem>Terms</ListItem> */}
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> India
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> 987654321
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> contact@indokart.in
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;