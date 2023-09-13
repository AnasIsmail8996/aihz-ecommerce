
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./conponents/Header";
import Footer from "./conponents/Footer";
import Home from "./Home";
import About from "./About";
import Contect from './Contect'
import Services from "./Services";
import  Erorr  from "./Erorr";
import GoToTop from "./conponents/GoToTop";

function App() {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgb(98 84 243 0.5)",
      hr: "#ffff",
      gradient: "linear-gradient(45deg, #ff5733, #33ff57)",
      shadow:
        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
      shadowSupport: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    },
    media: { mobile: "768px", tab: "998px" },
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
       
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contect />} />
            <Route path="/Services" element={<Services />} />
            <Route path="*" element={<Erorr/>} />
          </Routes>
          <GoToTop/>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
