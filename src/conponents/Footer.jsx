import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";

import {  FaGithub,  FaLinkedin, FaImage} from "react-icons/fa";

function Footer  ()  {
    return (<Wrapper>


      <section className="contect-sort">
        <div className="grid grid-two-column">
          
            <div>
            <h3>Ready to Get Started</h3> 
            <h3>Contact Us</h3>
          </div>

          <div className="contact-sort-btn">
          <NavLink to='/'>
            <Button className="btn-sec">Get Started</Button>
          </NavLink>
        </div>
        </div>
        
       
      </section>

      {/* footer */}
      <footer>

        <div className="container grid grid-four-column">
          <div className="footer-about">
            {/*    */}
                 
          </div>

          {/* second colomn */}
          <div className="footer-subscribe">
            <h3>To Get More Updates</h3>
                 <form action="#">

                  <input type="email" required 
                  autoComplete="off"
                   placeholder="Email" />
                   <input type="submit" value='subscribe' />
                 </form>
          </div>
          
{/* 3rd column */}
<div className="footer-social">
  <h3>Follow US</h3>
  <div className="footer-social--icons">
    <div>
      <a href="https://www.linkedin.com/in/anas-ismail-h-z-1b007a234/" target="_blank" rel="noopener noreferrer" >
        <FaLinkedin className='icons' />
      </a>
    </div>
    <div>
      <a href="https://github.com/AnasIsmail8996" target="_blank" rel="noopener noreferrer">
        <FaGithub className='icons' />
      </a>
    </div>
    <div>
      <a href="https://aihz-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
        <FaImage className='icons' />
      </a>
    </div>
  </div>
</div>

<div className="footer-contact">
  <h3>Call US</h3>
  <h3>+923218996191</h3>
</div>
</div>

{/* botton */}

<div className="footer-bottom-section">
  <hr/>
  <div className="container grid grid-two-column">
    <p>
      @{new Date().getFullYear()}AIHZ_developer
    </p>
    <div>
      <p>Privacy & Policy</p>
      <p>TERMS & CONDITION</p>
    </div>
  </div>
</div>
      </footer>
    </Wrapper>

    )
  }

  const Wrapper = styled.section`

  

  .contect-sort {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.hr};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
     transform: translateY(-8%);
    
     
  }
  

   .contact-sort-btn {
    justify-self: end;
    align-self: center;
  
  }
  
  .btn-sec{
    color:#fff;
  }


  footer{
    paddding:14rem 0  9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
  
  }
h3{
color: ${({ theme }) => theme.colors.btn};
  margin-bottom:2.4rem;
}
  p{
   color: ${({ theme }) => theme.colors.white};  
  }
  
.footer-social--icons {
  display: flex;
  gap: 2rem;
}


.footer-social--icons div {
  padding: 1rem;
  border-radius: 50%; /* Corrected the typo here */
  border: 2px solid ${({ theme }) => theme.colors.white};
}


.icons {
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.4rem;
  position: relative;
  cursor: pointer;
}


@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .contect-sort {
    max-width: 95vw;
    padding: 2rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .contact-sort-btn {
    text-align: center;
    justify-self: flex-start;
  }
}
}
`;

  
  export default Footer;
  