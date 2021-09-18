import React, {useState} from "react";
import styled from "styled-components";
import IndoKart from "../assets/IndoKart.svg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import SearchIcon from '@material-ui/icons/Search';
import CartButtons from "./CartButtons";
import CloseIcon from '@material-ui/icons/Close';
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import FavoriteIcon from '@material-ui/icons/Favorite';

const Nav = () => {
    const [input, setInput] = useState(false)
    const [value, setValue]= useState("")
    
    const { openSidebar } = useProductsContext();
    const { myUser } = useUserContext();

    return (
    <NavContainer>
        <Wrapper>

            <Left>
            <Language>
                <Link to="/">
                <img src={IndoKart} alt="indokart" />
                </Link>
            </Language>
                <button type="button" className="nav-toggle" onClick={openSidebar}>
                    <FaBars />
                </button>
            </Left>
            <Center className="center">

                
                        <Link className="li-link" to="/about">About</Link>      
                        <Link className="li-link" to="/products">Products</Link>       
                        {myUser && (
                                
                                <Link className="li-link" to="/checkout">Checkout</Link>
                                
                            )}
                        {/* <SearchContainer>
                                    <div>

                                    <SearchIcon className="icon" />
                                    </div>
                                    <div>

                                    <input value={value} className="color" type="text" 
                                    placeholder="Search IndoKart" 
                                    onChange={(e)=>{setInput(true); 
                                    setValue(e.target.value) }} />
                                    </div>
                                    <div style={{marginRight: "1px"}}>

                                    {(input && value) && <CloseIcon className="icon" onClick={()=>setValue('')} />}
                                    </div>
                            
                        </SearchContainer> */}
                        
                
                </Center>
                <Right className="right">

                    <CartButtons />
        
                </Right>
        </Wrapper>
    </NavContainer>)
}

const SearchContainer = styled.div`
    
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    width: 20vw;
    justify-content: space-between ;
    .color{
        border: none;
        outline: none;
    }
    .icon{
        cursor: pointer;
        color: gray;
        font-size: 20px;
        margin: 2px;
    }

    `

const Language = styled.span`
    img{
        width: 10vw;
        height: 10vh;
    }
    cursor: pointer;
    img
    { @media (max-width: 768px){
        width: 40vw;
        height: 10vh;
    }
  }
    `
const Wrapper = styled.div`
/* position: absolute; */
        padding: 10px 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
/* position: sticky; */
   .center, .right{ 
        @media (max-width: 768px){
            display: none;
            }
   }
   @media (max-width: 768px){
            margin-top: 0.5vh;
            display: flex;
            justify-content: space-between;
            width: 95vw;
            padding: 5px 2px;
            }
`
const Left = styled.div`
.nav-toggle{
    display: none;
    @media (max-width: 768px){
        display: inline-block;
        background: transparent;
        border: transparent;
        color: var(--clr-primary-5);
        cursor: pointer;
        svg {
        font-size: 2rem;
        margin-left: 40vw;
        margin-right: 0;
        }
    }
}
    display: flex;
    align-items: center;
    flex: 1;
    `
const Center = styled.div`
    @media (max-width: 768px){
        display: none;

    }
    .li-link{
        font-weight: 600;
        color: black;
        font-size: 1rem;
        text-decoration: none;
        &:hover {
            border-bottom: 2px solid red;
            
        }
    }
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex: 1;
    `
const Right = styled.div`
    justify-content: flex-end;
    flex: 2;
    @media (max-width: 768px){
        display: none;
    }
    `

    const NavContainer = styled.div`
        height: 80px;
        /* position: absolute; */
        /* display: flex; */
       
        /* position: sticky; */
        /* border-style: none none solid none; */
        position: sticky;
        top: 0;
        background-color:white;
        z-index: 100;
        width: 100%;
        @media (max-width: 768px){
            overflow: hidden;
            width: 95vw;
            
        }
        
    
    `;
export default Nav;