import ProductsContext from "./ContextCreate.js"
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";


export default function ProductsProvide({children}){
    const history = useHistory()
    const [products, setProducts] = useState([]);
    
    useEffect(()=>{
        axios.get("https://mongoshoper.herokuapp.com/products")
        .then(response => setProducts(response.data))
        .catch(()=> alert("user or pass incorrect"))
    },[])

    const LoginHandler = (event) => {
        event.preventDefault()
        history.push("/login")
    } 
    const RegisterHandler = (event) => {
        event.preventDefault()
        history.push("/signup")

    }
    return(
        
            <ProductsContext.Provider value ={{
                products,
                LoginHandler,
                RegisterHandler

            }}>
                {children}
            </ProductsContext.Provider>

        
    )
}