import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa6";

import React, { useState, useEffect } from 'react';

 function GoToTop () {
  const [isVisible, setVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  const listenToScroll = () => {
    const hideToHidden = 250;
    const winScroll = window.scrollY;

    if (winScroll > hideToHidden) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);

 
    return () => {
      window.removeEventListener('scroll', listenToScroll);
    }
  }, []);


  return (
    <Wrapper>

   {isVisible && (<div className="top-btn" onClick={goToBtn}>
        <FaArrowUp className="top-btn--icon"/>
    </div> )}
    
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .top-btn {
    font-size: 2.4rem;
    height: 6rem;
    width: 6rem;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.btn};
    box-shadow: ${({ theme }) => theme.colors.shadow};
    border-radius: 50%; /* Corrected the typo here */
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem); /* Updated translateY value to make it animate properly */
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}){
    .top-btn{
      right:0;
      left:40%;
    }
  }
`;




export default GoToTop;
