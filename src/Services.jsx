





import { useContextGlobel } from "./context";
import { NavLink } from "react-router-dom";
import  styled  from "styled-components";
import { Button } from "./conponents/styles/Button";




function Services ()  {
  const {services} = useContextGlobel();
  console.log(services);
    
  
  return (
     <Wrapper className='section'>
<h2 className="common-hrading">Our Services</h2>
<div className="container grid grid-three-column">
  {services.map((currEle)=>{
    const {id, image , title, description,category ,  }= currEle;
    return (<div className="card" key={id}>
        <figure>
      <img src={image} alt={category} />
    </figure>

     <div className="card-data">
        <h3>{title}</h3>
        <p>{description.slice(0, 50)}</p>
       
        <NavLink to='/Services'>
  <Button  className='btn'>Read More</Button>
</NavLink>

    </div>
      </div>
    
  )})

  }
</div>


     </Wrapper>
    )
  }

  
  
  const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }




  .card {
    border: 0.1rem solid rgba(170, 170, 170, 0.4);
  
    .card-data {
      padding: 0 2rem;
    }
  }
  
  .btn {
    background-color: rgba(0, 0, 0, 0);
    margin: 1.5rem auto;
    border: 0.1rem solid rgb(98, 84, 243);
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(98 84 243);
    font-size: 1.4rem;
  
    &:hover {
      background-color: rgba(98 84 243 );
      color: #fff;
    }
  
    &:hover a {
      color: #fff;
    }
  
    
  }
  









  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    

    




    &:hover::after {
      width: 100%;
    }

    &:hover img {
      transform: scale(1.2);
    }

    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
  
  
`;


  
  export default Services;