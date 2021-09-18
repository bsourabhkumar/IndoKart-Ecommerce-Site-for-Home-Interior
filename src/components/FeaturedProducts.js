import React, {useState, useEffect} from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
// import Product from "./Product";
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowLeftOutlinedIcon from '@material-ui/icons/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';
// import { FaSearch } from "react-icons/fa";



const FeaturedProducts = () => {
  
  
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured
   
  } = useProductsContext();

    // const [products, setProducts] = useState([...featured]);
    const [index, setIndex] = useState(0)

    const product = featured[index];
  // const {name, price, description, image} = product;
  
  const checkNumber = (num) => {
    if (num > featured.length - 1) return 0;
      if (num < 0) return featured.length - 1;
      else {
        return num;
      }
    };

    const fetchNext = () => {
      setIndex(checkNumber(index + 1));
      // clearInterval(interval);
    };
    const fetchPrev = () => {
      setIndex(checkNumber(index - 1));
      // clearInterval(interval);
    };
    useEffect(() => {
      let interval = setInterval(fetchNext, 4000);
      return () => clearInterval(interval);
    }, [index]);

    if (loading) {
      return <Loading />;
    }
    if (error) {
      return <Error />;
    }

  // const handleClick = (direction) => {
  //   if(direction==="right"){
  //     if(index<featured.length-1) setIndex(index+1)
  //     else setIndex(featured.length-1)
  //   }
  //   else if(direction==="left"){
  //     if(index>0){
  //       setIndex(index-1)
  //     }
  //     else setIndex(0);
  //   }
  // }

  return (  <Container>
          <Arrow style={{left: "2%"}}>
            <ArrowLeftOutlinedIcon onClick={()=>fetchPrev()} />
          </Arrow>
          <Wrapper>
          <Slide>

            <ImgContainer>
              <Image src={product.image} alt="product-image" />
            </ImgContainer>
            <InfoContainer>
              <Title>{product.name}</Title>
              <Desc>{product.description.slice(0,100)}</Desc>
              <Desc>₹{(product.price / 10).toFixed(0)}</Desc>
              <Button >
              <Link to={`/products/${product.id}`} className="link">
                  Buy Now
              </Link>
              </Button>
              
            </InfoContainer>
          </Slide>
          </Wrapper>
          <Arrow style={{right: "2%"}}>
            <ArrowRightOutlinedIcon onClick={()=>fetchNext()} />
          </Arrow>

        </Container>
    
  )
}

const Wrapper = styled.div`
    height: 100%;
    overflow: hidden;
    margin-top: 5vh;
    @media (max-width: 768px){
        margin-left: 5vw;
        margin-bottom: 20vh;
    padding-bottom: 20vh;
    }


` 
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  justify-content: space-between;
  @media (max-width: 768px){
    flex-direction: column;
    margin-right: 0;
  }
`
const ImgContainer = styled.div`
  height: 100%;
  /* flex: 2; */
  margin-left: 3vw;
  width: 150vw;

  object-fit: contain ;
  @media (max-width: 768px){
    width: 90%;
    margin-bottom: 0;
    padding-bottom: 0;
    
  }
`
const InfoContainer = styled.div`
  /* flex: 1; */
  padding-top: 10px;
  margin-right: 7vw;
  margin-top: 0;
  @media (max-width: 768px){
    margin-left: 10vw;
    width: 90vw;
    justify-content: center;
    align-items: center;
    margin-top: -5vh;
    padding-top: -2vh;
    margin-bottom: 5vh;
    padding-bottom: 5vh;
    margin-right: 0;
  }
`
const Image = styled.img`
  height: 80%;
  width: 70%;
  margin-left: 5vw;
  @media (max-width: 768px){
    width: 60vw;
  }

`
const Title = styled.h1`
   text-transform: capitalize;
   /* object-fit:  */
   font-size: 40px;
   @media (max-width: 768px){
     font-size: 18px;
   }
`
const Desc = styled.p`
  margin: 20px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
  @media (max-width: 768px){
     font-size: 14px;
     /* margin-bottom: 20vh;
    padding-bottom: 20vh; */
   }
`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  color: black;
  background-color: transparent;
  cursor: pointer;
  .link{
    text-transform: capitalize;
    text-decoration: none;
    list-style-type: none;
    font-weight: bold;
  }
  button:hover{
    color: black;
    background-color: white;
  }
  @media (max-width: 768px){
     font-size: 12px;
     padding: 5px;
   }
`
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  /* background-color: lightblue; */
  position: relative;
  transition: all 1.5s ease;

  @media (max-width: 768px){
    width: 90vw;
    height: 80vh;
    /* margin-bottom: 10vh; */
    margin-bottom: 20vh;
    padding-bottom: 20vh;
    margin-right: 0;
  }
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: whitesmoke;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top:0;
  bottom:0;
  margin: auto;
  /* left:${props => props.direction === "left" && "10px"}
  right:${props => props.direction === "right" && "10px"} */
  cursor: pointer;
  opacity: 0.5;
  @media (max-width: 768px){
     width: 10px;
     height: 10px;
     margin-left: 3vw;
     margin-right: 1vw;
   }
  
`

export default FeaturedProducts;
