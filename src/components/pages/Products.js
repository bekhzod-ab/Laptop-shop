import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Productlist from "../pruductList.js"
import ProductsContext from "../../Context/ContextCreate.js"

export default function Products({loggedIn}) {
    const [inputSearch, setInput] = useState("");
    const history = useHistory();
    
    const {products, LoginHandler, RegisterHandler} = useContext(ProductsContext)
  
    function searchByName(e){
        e.preventDefault()
        
        const laptop = products.find(el => el.name === inputSearch)

        if (laptop) {
            console.log({laptop})
            return history.push(`/products/name/${laptop.name}`)
            // return <Redirect to={`/products/name/${inputSearch}`}/>
            
        }else {
            alert("This product not found")
        }
    };

    if(!loggedIn) {
        return(
            
                <div>
                    <h2> Your are not logged </h2>
                    <button onClick={LoginHandler}>Login</button> or <button onClick={RegisterHandler}>Sign Up</button>
                </div>
                
        )
        
    }    
    
      else {  
          return (
        <div>
            <nav >
                <form className="search">
                    <input type="search" className="form-control w-25" placeholder="Search by Name" aria-label="Search" value={inputSearch} onChange={(event)=>{setInput(event.target.value)}}></input><br/>
                    <button type="submit" onClick={searchByName}>Search</button>
                </form>
            </nav><br/>
            <Productlist products={products}/> 
        </div>
    )
          }
}
