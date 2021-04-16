import axios from 'axios'
import { useContext} from "react";
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import UsersContext from "../../Context/UserContext"




export default function SignUp() {
    const {setLoggedIn} = useContext(UsersContext)
    const history = useHistory()
    const [bodyname, setbodyName] = useState("")
    const [bodyemail, setbodyEmail] = useState("")
    const [bodypass, setbodyPass] = useState("")
    const [repass, setrePass] = useState("")
    
    const handleSubmit = (event) => {
        event.preventDefault()
       
        axios.post("https://mongoshoper.herokuapp.com/register", {bodyname,bodyemail, bodypass})
        .then(() => {
            setLoggedIn(true)
            history.push("/login")
        })
        .then(()=> alert("Check your email to verify"))
        .catch((error) => console.log(error.message))
    }

    return (
        <div className="sign_container">
            <form className="w-25" onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>Your Name</label>
                    <input placeholder="Enter your login" className="form-control" required value={bodyname} onChange={(event) => setbodyName(event.target.value)}></input>
                </div><br/>

                <div class="form-group">
                    <label>Your Email</label>
                    <input placeholder="Enter your email" className="form-control" required type="email" value={bodyemail} onChange={(event) => setbodyEmail(event.target.value)}></input>
                </div><br/>

                <div class="form-group">
                    <label>Your password</label>
                    <input placeholder="create your password" className="form-control" required type="password" value={bodypass} onChange={(event) => setbodyPass(event.target.value)}></input>
                </div><br/>

                <div class="form-group">
                    <label>Confirm your password</label>
                    <input placeholder="confirm your password" className="form-control" required type="password" value={repass} onChange={(event) => setrePass(event.target.value)}></input>
                </div><br/>
                <input className="btn-light" type="submit" value="Register"/>
            </form>
        </div>
    )
}