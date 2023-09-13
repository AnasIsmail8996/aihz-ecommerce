import  styled  from "styled-components";
import { Button } from "./conponents/styles/Button";
import { NavLink } from "react-router-dom";

 function Erorr()  {
  return (
<Wrapper>
<img src='https://img.lovepik.com/photo/45007/3927.jpg_wh860.jpg' className="img-erorr" alt="Erprr_image" />

<NavLink to='/'>

<Button className="btn">Go Back</Button>

</NavLink>
</Wrapper>
  )
}

const Wrapper =styled.section`

padding:1.5rem 0;

display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .img-erorr{
    max-width:50rem;
      }

  .btn{
background-color: rgba(0, 0, 0, 0);
    margin: 1.5rem auto;
    border: 0.1rem solid rgb(98, 84, 243);
   
    color: rgba(98 84 243);
    font-size: 1.4rem;
  
    &:hover {
      background-color: rgba(98 84 243 );
      color: #fff;
  }
 
`;


export default Erorr;