import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Work Sans', sans-serif;
}

html {
  font-size: 62.5%;
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
}

/* Scrollbar width */
::-webkit-scrollbar {
  width: 1.1rem;
}

/* Scrollbar track background color */
::-webkit-scrollbar-track {
  background-color: rgb(24, 24, 29);
}

/* Scrollbar thumb style */
::-webkit-scrollbar-thumb {
  background: #fff;
  border: 3px solid transparent;
  border-radius: 9px; /* Corrected the typo here */
  background-clip: content-box;
}

h1 {
  color: #333; /* Your heading color here */
  font-size: 6rem;
  font-weight: 900;
}

h2 {
  color: #555; /* Your heading color here */
  font-size: 4.4rem;
  font-weight: 300;
  white-space: normal;
  text-align: center;
}

h3 {
  font-size: 1.5rem;
  font-weight: 400;
}

p {
  color: #777; /* Your text color here */
  font-size: 1.65rem;
  font-weight: 400;
  margin-top: 1rem;
  opacity: 0.7;
  line-height: 1.5;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

.container {
  margin: 0 auto;
  max-width: 68rem;
}

.grid {
  display: grid;
  gap: 9rem;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column {
  grid-template-columns: 1fr 1.2fr 0.5fr 0.8fr;
}

.common-heading {
  font-size: 3.8rem;
  font-weight: 600;
  margin-bottom: 6rem;
  text-transform: capitalize;
}

input,
textarea {
  max-width: 50rem;
  color: ${({ theme }) => theme.colors.black};
  padding: 1.6rem 2.4rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  text-transform: uppercase;
  box-shadow: ${({ theme }) => theme.colors.shadowSupport}; /* Define shadow appropriately */
}

input[type="submit"] {
  max-width: 16rem;
  margin-top: 4rem;
  background-color: ${({ theme }) => theme.colors.btn};
  color: ${({ theme }) => theme.colors.white};
  padding: 1.6rem 2.4rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.border}; /* Specify border style */
  text-transform: uppercase;
  font-size: 1.8rem;
  cursor: pointer;
}

/* Media Queries */

@media (max-width: ${({ theme }) => theme.media.tab}) {
  .container {
    padding: 0 3.2rem;
  }
  .grid-three-column {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  
  html{
    font-size:50%;
  }
  
  .grid {
    gap: 0.5rem;
  }
  .grid-two-column,
  .grid-three-column,
  .grid-four-column {
    grid-template-columns: 1fr;
  }
}


  `;
  
