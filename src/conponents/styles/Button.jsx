import styled from "styled-components";

export const Button = styled.button`
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s ease;
  max-width: auto;
  background-color: rgb(98, 84, 246); 
  color: rgb(98, 84, 246); 
  border: none; 
  padding: 1.4rem 2.4rem;
  text-align: center; 
  cursor: pointer;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s; 

  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132, 144, 255, 30%); 
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: scale(0.96);
  }

  a {
    text-decoration: none;
    color: rgb(255, 255, 255); /* Added missing semicolon */
    font-size: 1.8rem;
  }
`;
