
import { NavLink } from "react-router-dom";
import Navbar from './Navbar';
import '../App.css';
import styled from "styled-components";

function Header() {
  return (
    <div>
      <MainHeader>
        <NavLink to='/'>
       <img  className="logo" src='https://www.anasgfx.com/wp-content/uploads/2016/02/Anasgfx_Logo_retina.png' alt="logo"/>
        </NavLink>
        <Navbar />
      </MainHeader>
     
    </div>
  );
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

.logo{
height:auto;
max-width:50%;
}
  `;


export default Header;
