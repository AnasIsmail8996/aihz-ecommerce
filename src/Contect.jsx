import  styled  from "styled-components";

function Contect  ()  {


  const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;

  .container {
    margin-top: 6rem;
    text-align: center;

    .contect-form {
      max-width: 45rem;
      margin: auto;

      .contect-inputs{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        input[type='submit'] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;









    return (
      <Wrapper>
        <h2 className="common-hrading">Contect US</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14478.06488722988!2d67.0391367!3d24.8803674!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e5beb3df9e9%3A0x38b012e0610c2ed2!2sGurumandar!5e0!3m2!1sen!2s!4v1694126802863!5m2!1sen!2s" 
        width="100%"
         height="450%"
          style={{border:0}}
          allowFullScreen="" loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"></iframe>


          <div className="container">
            <div  className="contect-form">
                <form action="https://formspree.io/f/mleynzkj" method="POST" className="contect-inputs" >
                  
                  <input type="text" name="username" placeholder="username"
                  autoComplete="off" 
                  required />

             <input type="email" name="Email" placeholder="Email"
                  autoComplete="off" 
                  required />

                      <textarea name="message" id="" cols="30" rows="10"  autoComplete="off" 
                  required ></textarea>

             <input type="submit" value='send'  />

                </form>
            </div>
          </div>
      </Wrapper>
    )
  }
  
  export default Contect;