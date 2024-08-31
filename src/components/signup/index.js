import {Component} from "react"
import classes from "./index.module.css"

class Signup extends  Component{
    state={password:"",rePassword:"",message:""}

    onChangePassword=event=>{
        this.setState((prevState)=>{
            return {...prevState,password:event.target.value}
        })
    }

    onReEnterPassword=event=>{
        this.setState((prevState)=>{
            return {...prevState,rePassword:event.target.value}
        })
    }

    onSubmitButton=event=>{
        console.log("clicked")
        event.preventDefault();
        const {password,rePassword}=this.state
        if(password===rePassword){
            this.setState((prevState)=>{
                return {...prevState,message:"SignUp successfull"}

            })
        }else{
            this.setState((prevState)=>{
                return {...prevState,message:"Password Doesn't match"}
            }) 
        }
        this.setState(prevState=>{
            return {...prevState,password:"",rePassword:""}
        })
    }
    handleEmail=()=>{

    }


    render(){
        const{password,rePassword,message}=this.state;
        return(
            <>
            <div className={classes.formContainer}>
                <p>SignUp</p>
                <form className={classes.inputFieldsContainer}  onSubmit={this.onSubmitButton}>
                    <label htmlFor="email">Email</label>
                    <input type="mail" placeholder="enter your email" id="email" onChange={this.handleEmail} required/>
                    <label htmlFor="password">Password</label>
                    <input value={password} id="password" type="password" placeholder="enter password" onChange={this.onChangePassword} maxLength={16} minLength={6} required/>
                    <label htmlFor="rePassword">Re-Enter Password</label>
                    <input value={rePassword} id="rePassword" type="password" placeholder="re-enter password" onChange={this.onReEnterPassword} maxLength={16} minLength={6} required/>
                    <button type="submit">Submit</button>
                    <p>{message}</p>    
                </form>
                </div>
            </>
        )
    }
}

export default Signup