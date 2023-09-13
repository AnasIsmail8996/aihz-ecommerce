import HeroSection from "./conponents/HeroSection";
import { useContextGlobel } from "./context";
import { useEffect } from "react";
function About  ()  {

    // const data ={
    //     name:'Anas_Ismail',
    //    image:'https://media.istockphoto.com/id/1305268276/vector/registration-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=nfvUbHjcNDVIPdWkaxGx0z0WZaAEuBK9SyG-aIqg2-0=',
    //   }


const {updateAboutPage}= useContextGlobel();
        
useEffect(()=>   updateAboutPage(),[])

  
    return <HeroSection />

 
}

export default About;