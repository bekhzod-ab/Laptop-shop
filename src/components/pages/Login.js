
import { useState, useContext } from "react";

import UsersContext from "../../Context/UserContext.js"



export default function Login(props) {
    
    const [userName, setUsername] = useState("");
    const [passName, setPass] = useState("");
    const {login} = useContext(UsersContext);

    const handleLogin = (event) => {
        event.preventDefault()
        login(userName,passName)
    };



    // const validator = (event) => {
    //     event.preventDefault()
    //     const SingleUser = users.find(el => el.username === userName && el.password === passName)
    //     if (SingleUser) {
    //         props.setLoggedIn(true)
    //         history.push("/products")
            
    //     }
    //     else {
    //         props.setLoggedIn(false)
    //         alert("name or pass is incorrect")
    //     }
    // } 
    
    return (
        <form onSubmit={handleLogin} className="w-25">
            <label>User Name</label>
            <input id="login" typex="text" placeholder="Login" required className="form-control" value={userName} onChange={(event)=>{setUsername(event.target.value)}}/><br/>
            
            <label>Password</label>
            <input id="password" placeholder="Password" type="password" className="form-control" required value={passName} onChange={(event)=>{setPass(event.target.value)}}/><br/>

            <input type="submit" value="Log in"/>
            {props.loggedIn ? <p className="text-success">Logged in</p> : <p>Not logged in</p>}
        </form>
    )
}
