import { NavLink } from "react-router-dom";
import  styled  from "styled-components";
import { Button } from "./styles/Button";

import {  useContextGlobel } from "../context";


function HeroSection ()  {
    const { name, image}= useContextGlobel();

    return (
   <Wrapper>
<div className="container grid grid-two-column">

    <div className="section-hero-data">
        <p className="hero-top-data">AIHZ-Developer</p>
        <h1 className="hero-heading">{name}</h1>
        <p className="hero-para">Hi Im Anas_Ismail  , IT Student An saylani mass It Training Programme </p>
        <Button className='btn hireme-btn'>
        <NavLink to='/Contact'>Info</NavLink>
    </Button>
    </div>
    
    <div className="section-hero-img">
        <picture>
            <img className="hero-img" src={image} alt="front-logo"/>
        </picture>
    </div>
</div>
   </Wrapper>
  )
}



const Wrapper = styled.section`

/* Common styles */
padding: 9rem 0;

/* Styles for .section-hero-data class */
.section-hero-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Styles for buttons */
.btn {
    max-width: 16rem;
    
   

}


/* Styles for .hero-top-data class */
.hero-top-data {
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.helper};
}

/* Styles for .hero-heading class */
.hero-heading {
  text-transform: uppercase;
  font-size: 6.5rem;
}

/* Styles for .hero-para class */
.hero-para {
  margin-top: 1.5rem;
  margin-bottom: 3.4rem;
  max-width: 60rem;
}

/* Styles for .section-hero-img class */
.section-hero-img {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Styles for .picture class */
.picture {
  text-align: center;
}

/* Styles for .hero-img class */
.hero-img {
  max-width: 80%;
}


@media (max-width: ${({ theme }) => theme.media.mobile}){
  .grid{
    gap:7.2rem;
  }
}

  
`;

export default  HeroSection;