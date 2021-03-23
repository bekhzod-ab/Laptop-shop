import { useHistory} from 'react-router-dom'
import UsersContext from "./UserContext.js"
import React, { useState } from 'react'
import axios from "axios";
import Cookies from "universal-cookie"
const cookie = new Cookies()



export default function UsersProvider({children}){
    const history = useHistory();
    const [loggedIn, setLoggedIn] = useState(false);
    const Timer = 120000;
    



    const login = (userName,passName) => {
        
        axios.post("https://mongoshoper.herokuapp.com/login", {userName,passName,Timer})
        .then( () => {
            cookie.set("expires in ", Timer + " msec")
            setLoggedIn(true)
            history.push("/products")
            
            
        })
        .catch(error => console.log(error.message))

    };
   
    


    return (
        <UsersContext.Provider value={{login, loggedIn, setLoggedIn}}>
            {children}
        </UsersContext.Provider>

    )
}