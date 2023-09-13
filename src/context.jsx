import  { createContext ,useContext, useEffect, useReducer} from "react";
import  reducer  from "./reducer";
const AppContext = createContext();


const API ='https://fakestoreapi.com/products';  

const initianlState ={
    name:'',
    image:'',
    services:[],
}




 



const AppProvider = ({ children }) => {
const [state, dispatch]=useReducer(reducer, initianlState)


const updateHomePage=()=>{

    return dispatch({
        type:"Home_Update",
        payload:{

            name:'Aihz',
            image:'https://www.bayleafdigital.com/wp-content/uploads/2022/07/undraw_mobile_development_re_wwsn.svg',
        }
    })
}



const updateAboutPage=()=>{

    return dispatch({
        type:"About_Update",
        payload:{

            name:'Anas',
            image:'https://media.istockphoto.com/id/1305268276/vector/registration-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=nfvUbHjcNDVIPdWkaxGx0z0WZaAEuBK9SyG-aIqg2-0='
        }
    })
}


// api daat
const getServices = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: 'GET_SERVICES', payload: data });
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getServices(API);
  }, []);



  return (
    <AppContext.Provider value={{...state,updateAboutPage,updateHomePage}}>{children }</AppContext.Provider>
  );
}


const useContextGlobel =()=>{
    return  useContext(AppContext);
}

export { AppContext, AppProvider ,useContextGlobel };
