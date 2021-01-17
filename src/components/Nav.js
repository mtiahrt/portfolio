import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {motion} from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Nav = () => {
  const {pathname} = useLocation();
  const lineAnimate = (pathName) => {
    const width = window.innerWidth < 1300 ? '100%' : '45%';
    return { width: pathname === pathName ? width : "0%" };
  }

  return (
    <StyledNav>
      <h1>
        <Link to="/" id="logo">
          Mark Tiahrt
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Me</Link>
          <Line 
            transition={{duration: .75}} 
            initial={{width: "0%"}} 
            animate={ lineAnimate('/') } />
        </li>
        <li>
          <Link to="/work">My Work</Link>
          <Line transition={{duration: .75}} 
            initial={{ width: "0%"}} 
            animate={ lineAnimate('/work') } />
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
          <Line transition={{duration: .75}} 
            initial={{ width: "0%"}} 
            animate={ lineAnimate('/contact') } />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;

  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  @media (max-width: 1300px){
    flex-direction: column;
    padding: 2rem 1rem;
    #logo{
      display: inline-block;
      margin: 1rem;
    }
    ul{
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li{
        padding: 0;
        list-style-type: none;
      }
    }
  }
`;
const Line = styled(motion.div) `
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;

export default Nav;