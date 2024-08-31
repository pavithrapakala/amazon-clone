import { useState } from "react"
import classes from "./index.module.css"

const Signin = () =>{
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const handleEmailChange = (event) =>{
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) =>{
        setPassword(event.target.value)
    }

    const handleSignin = (event) =>{
        event.preventDefault()

    }

    return(
        <div className={classes.signinContainer}>
            <form onSubmit={handleSignin} className={classes.signinForm}>
                <label className={classes.label} htmlFor="email">Email</label>
                <input className={classes.input} id="email" type="mail" placeholder="Please Enter your mail" required onChange={handleEmailChange} value={email}/>
                <label className={classes.label} htmlFor="password">Password</label>
                <input className={classes.input} id="password" type="password" placeholder="Please enter your password" required value={password}/>
                <button type="submit">Signin</button>
            </form>
        </div>
    )
}

export default Signin