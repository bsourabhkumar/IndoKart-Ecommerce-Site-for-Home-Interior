import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
// import { useFilterContext } from "../context/filter_context";

const CategoryItem = ({item}) => {
    // const {
    //     filters: {
    //       category,
    //       company,
    //     },
    //     updateFilters,
    //     filtersFromCategories,
       
    //     all_products
    //   } = useFilterContext();
    return (
        <Container>
            <Image src={item.image} alt="category-img" />
            <Info>
                {/* <Title>{item.title}</Title> */}
                <Link to="/products">
                    <Button
                    name="category"
                    textContent={item.title}
                    // onClick={updateFilters}
                    type="button"
                    >{item.title}</Button>
                </Link>
            </Info>
            
        </Container>
    )
}

const Container = styled.div`
     /* flex: 1.5; */
     /* margin: 3px; */
     /* height: 50vh; */
     margin-bottom: 20vh;
     width: 30vw;
     /* position: relative; */
     margin: 10px;
     height: 50vh;
     display: flex;
     flex-direction: column;
   
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 6px 18px -9px rgba(0, 0, 0, 0.75);
    transition: transform 100ms ease-in;
    cursor: pointer;
    img:hover{
        
        transform: scale(1.04);

    }

    @media (max-width: 768px){
        width: 80vw;
        margin:  0;
        margin-left: 0;
        padding: 0;
        margin-bottom: 10vh;
        margin-right:0;
        padding-right: 0;

    }
`
const Image = styled.img`
     /* width: 33.33%; */
     /* height: 100%; */
     /* object-fit: cover; */
        object-fit: fill;
        width: 100%;
        height: 90%;
        /* width:100%; */
        @media (max-width: 768px){
            width: 80vw;
            margin-left: 0px;
            margin-right: 0px;
            
        }
`
const Info = styled.div`
     /* position: absolute; */
     /* top:0; */
     /* left:0; */
     /* width: 100%; */
     /* height: 100%; */
     /* display: flex; */
     /* flex-direction: column; */
     align-items: center;
     justify-content: center;
     /* margin-top: -9px; */
    /* border-radius: 10px; */
    /* padding: 20px; */
    /* padding-top: 20px; */
    border: 1;
    @media (max-width: 768px){
        margin-left: 0;
        margin-right: 0;
    }

`
// const Title = styled.h1`
//      color: white;
//      margin-bottom: 20px;
//      @media (max-width: 768px){
//          margin-bottom: 5px;
//          margin-right: 0;
//          margin-left: 0;
//      }
// `
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: black;
    cursor: pointer;
    font-weight: 700;
    @media (max-width: 768px){
        font-size: 16px;
        padding: 5px;
    }
`

export default CategoryItem
