import React, { useState } from "react";
//animation
import { motion } from "framer-motion";
import styled from "styled-components";
import logo from '../img/logo.svg'
import { fadeIn } from '../animation'
//redux and routes
import { fetchSearched } from '../actions/gamesAction'
import { useDispatch } from "react-redux";



const Nav = () => {
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState("");

    //func sets input state value to typed value
    const inputHandler = (e) => {
        setTextInput(e.target.value);
    };

    const submitSearch = (e) => {
        console.log(textInput)
        //to prevent form from refreshing as that is its default behavior
        e.preventDefault();
        dispatch(fetchSearched(textInput));
        //clears text field after search
        setTextInput("");
    };

    const clearSearched = () => {
        dispatch({ type: "CLEAR_SEARCHED" });
    }
    return (
        <StyledNav
            variants={fadeIn}
            initial="hidden"
            animate="show">
            <Logo onClick={clearSearched}>
                <img src={logo} alt="logo" />
                <h1>Ignite</h1>
            </Logo>
            <form className="search">
                <input value={textInput} onChange={inputHandler} type="text" />
                <button onClick={submitSearch} type="submit">Search</button>
            </form>
        </StyledNav>
    );
};

const StyledNav = styled(motion.nav)`
padding: 3rem 5rem;
text-align: center;
input{
    width: 30%;
    font-size: 1.5rem;
    padding: .5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0,0,0,.2);
}
button{
    font-size: 1.5rem;
    border: none;
    padding: .5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
}
`
const Logo = styled(motion.div)`
display: flex;
justify-content: center;
padding: 1rem;
cursor: pointer;
img{
    height: 2rem;
    width: 2rem;
}
`
export default Nav;