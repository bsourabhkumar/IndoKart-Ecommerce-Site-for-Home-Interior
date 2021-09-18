import React, {useState} from 'react'
import styled from "styled-components";
// import { Link } from "react-router-dom";
import { useUserContext } from "../context/user_context";
import { useAddressContext } from '../context/address_context';
// import {useForm} from 'react-hook-form'

const ProfilePage = () => {
    let flag1 = false, flag2=false, flag3=false, flag4=false, flag5=false, flag6=false, flag7=false;
    // let pin1 = false, pin2=false, pin3=false, pin4=false, pin5=false, pin6=false, pin7=false;
    const {address, addToAddress, removeAddress} = useAddressContext();
    // react-hook-form
    // const { register, handleSubmit, errors } = useForm();

    const [name, setName] = useState(address.name);
    const [street, setStreet] = useState(address.street);
    const [city, setCity] = useState(address.city);
    const [state, setState] = useState(address.state);
    const [country, setCountry] = useState(address.country);
    const [pincode, setPincode] = useState(address.pincode);
    const [phone, setPhone] = useState(address.phone);

    // const [userInfo, setUserInfo] = useState();

    const {myUser} = useUserContext();
    const [index, setIndex] = useState(0);

    // const Phoneref = useRef();
    // const Pincoderef = useRef();
    // const Countryref = useRef();
    // const Stateref = useRef();
    // const Cityref = useRef();
    // const Nameref = useRef();
    
    const [inputadd, setInputAdd] = useState(false);
    // const handleSubmit = (e)=>{
    //     e.preventDefault();
    // }

    // const onSubmit = (data) => {
    //     setUserInfo(data);
    //     console.log(data);
    //   };

    console.log(address)
    // const handlePhone = ()=>{
    //     Phoneref.current.addEventListener("blur", ()=>{
    //         // console.log("phone is blurred");
    //         // Validate phone here
    //         let regex = /^([0-9]){10}$/
    //         let str = phone;
    //         // console.log(str, regex) 
    //         if(regex.test(str)){
    //             // console.log("Your phone is valid");
    //             Phoneref.current.classList.remove("is-invalid");
    //             flag7 = true;
    //         }
    //         else {
    //             // console.log("Your phone is not valid")
    //             pin7=true;
    //             Phoneref.current.classList.add("is-invalid");
    //             flag7 = false;
    //         }
        
    //     })
    // }
    // const handlePincode = ()=>{
    //     Pincoderef.current.addEventListener("blur", ()=>{
    //         // console.log("pincode is blurred");
    //         // Validate phone here
    //         let regex = /^([0-9]){6}$/
    //         let str = pincode;
    //         // console.log(str, regex) 
    //         if(regex.test(str)){
    //             // console.log("Your pincode is valid");
    //             Pincoderef.current.classList.remove("is-invalid");
    //             flag6 = true;
    //         }
    //         else {
    //             pin6=true;
    //             // console.log("Your pincode is not valid")
    //             Pincoderef.current.classList.add("is-invalid");
    //             flag6 = false;
    //         }
        
    //     })
    // }
    // const handleCountry = () => {
    //     Countryref.current.addEventListener("blur", ()=>{
    //         // console.log("country is blurred");
    //         // Validate phone here
    //         let regex = /^([a-zA-Z]){2,50}/
    //         let str = country;
    //         // console.log(str, regex) 
    //         if(regex.test(str)){
    //             // console.log("Your country is valid");
    //             Countryref.current.classList.remove("is-invalid");
    //             flag5 = true;
    //         }
    //         else {
    //             pin5=true;
    //             // console.log("Your pincode is not valid")
    //             Countryref.current.classList.add("is-invalid");
    //             flag5 = false;
    //         }
        
    //     })
    // }
    // const handleState = () => {
    //     Stateref.current.addEventListener("blur", ()=>{
    //         // console.log("country is blurred");
    //         // Validate phone here
    //         let regex = /^([a-zA-Z]){2,50}/
    //         let str = state;
    //         // console.log(str, regex) 
    //         if(regex.test(str)){
    //             // console.log("Your country is valid");
    //             Stateref.current.classList.remove("is-invalid");
    //             flag4 = true;
    //         }
    //         else {
    //             pin4=true;
    //             // console.log("Your pincode is not valid")
    //             Stateref.current.classList.add("is-invalid");
    //             flag4 = false;
    //         }
        
    //     })
    // }
    // const handleCity = () => {
    //     Cityref.current.addEventListener("blur", ()=>{
    //         // console.log("country is blurred");
    //         // Validate phone here
    //         let regex = /^([a-zA-Z]){2,50}/
    //         let str = city;
    //         // console.log(str, regex) 
    //         if(regex.test(str)){
    //             // console.log("Your country is valid");
    //             Cityref.current.classList.remove("is-invalid");
    //             flag3 = true;
    //         }
    //         else {
    //             pin3=true;
    //             // console.log("Your pincode is not valid")
    //             Cityref.current.classList.add("is-invalid");
    //             flag3 = false;
    //         }
        
    //     })
    // }

    // const handleName = () => {
    //     Nameref.current.addEventListener("blur", ()=>{
    //         // console.log("country is blurred");
    //         // Validate phone here
    //         let regex = /^([a-zA-Z]){2,50}/
    //         let str = name;
    //         // console.log(str, regex) 
    //         if(regex.test(str)){
    //             // console.log("Your country is valid");
    //             Nameref.current.classList.remove("is-invalid");
    //             flag1 = true;
    //         }
    //         else {
    //             pin1=true;
    //             // console.log("Your pincode is not valid")
    //             Nameref.current.classList.add("is-invalid");
    //             flag1 = false;
    //         }
        
    //     })
    // }
    if(street) {
        flag2 = true;
    }
    if(name){
        flag1 = true;
    }
    if(city){
        flag3 = true;
    }
    if(state){
        flag4 = true;
    }
    if(country){
        flag5 = true;
    }
    if(pincode){
        flag6 = true;
    }if(phone){
        flag7 = true;
    }
    
    return (
        <Container>

            <h4 style={{margin:"2vw 40vw"}}>Your Account</h4>
            <hr/>
            {myUser ? <Wrapper>

                <AccountPara>
                <div><Button onClick={()=>setIndex(0)}>Profile</Button>
                <hr/>
                </div>
                
                {/* <div><Button onClick={()=>setIndex(1)}>Orders</Button>
                <hr/>
                </div> */}
                
                <div><Button onClick={()=>setIndex(2)}>Address</Button>
                <hr/>
                </div>
               
                </AccountPara>
                
                <AccountDetails>
                
                {index === 0 && <div>
                            <h4>Profile Details</h4>
                            <h5>Full Name:   {myUser.name}</h5>
                            <h5 style={{textTransform:"none"}}>Email ID:    {myUser.email}</h5>
                            </div>}
                {/* {index === 1 && <div>
                            <h4>Your Orders</h4>
                            <h5>{myUser.name}</h5>
                            <h5>{myUser.email}</h5>
                            </div>} */}
                {index === 2 && <div>
                            {address.name && !inputadd ? <div>
                                <h4>Your address</h4>
                                <p><strong>Name:</strong> {address.name}</p>
                                <p><strong>Street:</strong> {address.street}, <strong>City:</strong> {address.city}</p>
                                <p><strong>State:</strong> {address.state}, <strong>Country:</strong> {address.country}</p>
                                                    
                                <p><strong>Pincode:</strong> {address.pincode}, <strong>Phone:</strong> {address.phone}</p>
                                <button type="button" className="btn custom"
                                onClick={()=>{removeAddress();
                                    setName(''); setStreet('');  setCity(''); setState(''); setCountry(''); setPincode('');
                                    setPhone('');
                                            }}>Remove Address</button>
                                <button type="button" className="btn custom" onClick={()=>{setInputAdd(true)}}>Edit Address</button>
                            </div>:
                            <div className="address-input">
                            {/* <pre>{JSON.stringify(userInfo, undefined, 2)}</pre> */}
                                <h4>Enter your address</h4>
                                <form >
                                <label>Name</label><br/>
                                <input style={{width: "20vw"}} name="name" id="name" rows="3" type="text" value={name} 
                                // {...register('name', { required: "Name is required"})} 
                                onChange={(e)=>{setName(e.target.value); }} 
                                placeholder="Enter your name"/><br/>
                                         {/* <small id="emailvalid" class="form-text text-muted invalid-feedback">
                                        Name must contain only letters(max 50 letters allowed)
                                        </small> */}
                                <br/>
                                <label>Street</label><br/>
                                <input id="street" type="text" 
                                value={street} 
                                name="street" style={{width: "20vw"}} rows="3" 
                                onChange={(e) => setStreet(e.target.value) }
                                // {...register('street', { required: "Street is required"})}  
                                placeholder="Enter your street"/>

                                <br/>
                                <br />
                                <label>City</label><br/>
                                <input  name="city" id="city" rows="3" type="text" value={city} style={{width: "20vw"}}
                                // {...register('city', { required: "City is required"})} 
                                onChange={(e)=>{setCity(e.target.value);}} 
                                placeholder="Enter your city"/><br/>
                                         {/* <small id="emailvalid" class="form-text text-muted invalid-feedback">
                                        Name of city must contain only letters(max 50 letters allowed)
                                        </small> */}
                                <br/>
                                <label>State</label><br/>
                                <input  name="state" id="state" rows="3" type="text" value={state} style={{width: "20vw"}}
                                // {...register('state', { required: "State is required"})} 
                                onChange={(e)=>{setState(e.target.value); }} 
                                placeholder="Enter your state"/><br/>
                                        {/* <small id="emailvalid" class="form-text text-muted invalid-feedback">
                                        Name of state must contain only letters(max 50 letters allowed)
                                        </small> */}
                                <br/>
                                <label>Country</label><br/>
                                <input  name="country" id="country" rows="3" type="text" value={country} style={{width: "20vw"}}
                                // {...register('country', { required: "Country is required"})} 
                                onChange={(e)=>{setCountry(e.target.value); }} 
                                placeholder="Enter your country"/><br/>
                                         {/* <small id="emailvalid" class="form-text text-muted invalid-feedback">
                                        Name of country must contain only letters(max 50 letters allowed)
                                        </small> */}
                                <br/>
                                <label>Pincode</label><br/>
                                <input  name="pincode" id="pincode" rows="3" type="text" value={pincode} style={{width: "20vw"}}
                                // {...register('pincode', { required: "Pincode is required"})} 
                                onChange={(e)=>{setPincode(e.target.value); }} 
                                placeholder="Enter your pincode"/><br/>
                                         {/* <small id="emailvalid" class="form-text text-muted invalid-feedback">
                                        Your pincode must be 6 digit long
                                        </small> */}
                                <br/>
                                <label>Phone</label><br/>
                                <input  name="phone" id="phone" rows="3" type="text" value={phone} style={{width: "20vw"}}
                                // {...register('phone', { required: "Phone is required"})} 
                                onChange={(e)=>{setPhone(e.target.value); } } 
                                placeholder="Enter your phone"/><br/>
                                     {/* <small id="emailvalid" class="form-text text-muted invalid-feedback">
                                    Your phone number must be 10 digit long
                                    </small> */}
                                <br/>
                                <button type="submit" className="btn custom" onClick={(e)=>{
                                    e.preventDefault();
                                    if(flag1 && flag2 && flag3 && flag4 && flag5 && flag6 && flag7){
                                    setInputAdd(false)                       
                                    addToAddress({
                                        name: name,
                                        street: street,
                                        city: city,
                                        state: state,
                                        country: country,
                                        pincode: pincode,
                                        phone: phone
                                    })}}
                                 } >Submit Address</button>
                                </form>
                            </div>}
                            </div>}
                </AccountDetails>
            </Wrapper> : <h3 style={{margin: "10%", marginLeft: "30vw"}}>Please Login to view your Account</h3>}
        </Container>
    )
}

const Wrapper = styled.div`
.address-input{
    /* border: 0.5px solid gray; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* position: relative; */
    input{
        margin: 0.5vw;
        padding: 0.5vw;
        border-radius: 5%;
        margin-left: 1%;
        border: 0.5px solid gray;
    }
}
    .custom{
        margin: 1%;
        text-transform: capitalize;
        font-weight: 700;
    }   
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 10vw;
`
const Container = styled.div`
   

`
const AccountPara= styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`
const AccountDetails = styled.div`
    flex: 2;
    margin: 1vw;
    /* margin-top: 2%; */
    margin-left: 10vw;
`
const Button = styled.button`
    border: none;
    background-color: white;
    color: black;
    font-size: 20px;
    cursor: pointer;
    margin: 1vw;
    padding: 1vw;
    :hover{
        color: red;
    }
`

export default ProfilePage
