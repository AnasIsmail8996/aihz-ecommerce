import { useEffect } from "react";
import HeroSection from "./conponents/HeroSection";
import { useContextGlobel } from "./context";
import Services from './Services'
import Contect from './Contect'

function Home  ()  {

  // const data ={
  //   name:'Aihz_Developer',
  //  image:'https://www.bayleafdigital.com/wp-content/uploads/2022/07/undraw_mobile_development_re_wwsn.svg',
  // }

  const {updateHomePage}= useContextGlobel();
        
useEffect(()=>updateHomePage(),[])

  
    return <>
    <HeroSection  />
    <Services/>
    <Contect/>
    </>
}

export default Home;
