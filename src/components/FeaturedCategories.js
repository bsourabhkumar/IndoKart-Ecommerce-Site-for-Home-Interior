import React from 'react'
import styled from "styled-components";
// import { useFilterContext } from "../context/filter_context";
// import { getUniqueValues } from "../utils/helpers";
import CategoryItem from "./CategoryItem"
import {categories} from "../utils/constants"

const FeaturedCategories = () => {
    // const {
    //     filters: {
    //       category,
    //       company,
    //     },
    //     updateFilters,
       
    //     all_products
    //   } = useFilterContext();
    
    //   const categories = getUniqueValues(all_products, "category");
    //   const companies = getUniqueValues(all_products, "company");
     
    return (
        <Wrapper>
            <h1>Featured Categories</h1>
        <Container>
        
            {categories.map((item)=>
                 <CategoryItem key={item.id} item={item} />
            
            )}
        </Container>
            
        </Wrapper>
        
    )
}
const Wrapper = styled.div`
   h1{ margin: auto  5vw 5vw 20vw;
    @media (max-width: 768px){
        font-size: 18px;
    }
   }
   width: 80vw;
   margin-left: 15vw;
   @media (max-width: 768px){
       margin-left: 6vw;
       margin-right: 0;
       width: 70vw;
       margin-top: 5vh;
   }
   @media (max-width: 400px){
       margin-left: 8vw;
       margin-right: 0;
       width: 70vw;
       margin-top: 5vh;
       
   }
`
const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
    /* justify-content: space-between;
    flex-direction: row; */
    flex-wrap: wrap;
    @media (max-width: 768px){
        flex-direction: column;
        padding: 0;
        margin-left: 0;
        margin-right: 0;
    }
`



export default FeaturedCategories
