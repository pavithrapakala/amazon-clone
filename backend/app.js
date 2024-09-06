const express=require("express");
const sqlite3=require("sqlite3")
const {open}=require("sqlite");
const path=require("path");
const cors = require("cors");
const app=express();

app.use(cors());
app.use(express.json())
const dbpath=path.join(__dirname,"amazonclone.db");

let db=null;

const initializeDbAndServer=async ()=>{
    try{
        db= await open({
            filename:dbpath,
            driver:sqlite3.Database
        })
        app.listen(4000,()=>{
            console.log("server is started at locahost 4000")
        })
    }
    catch(e){
        console.log(`db error ${e.message}`)
        process.exit(1)
    }
}
initializeDbAndServer();

app.post("/signup",async (request,response)=>{
    try{
        console.log(request.body)
    const {email,password}=request.body;
    const userquery=`select email from userdetails where email =?;`;
    const user=await db.run(userquery,[email]);
    if(user){
        console.log("entered if")
        response.send("email already existed")
    }
    else{
        console.log("entered else")
        const addUserQuery=`insert into userdetails(email,password) values (?,?);`
        await db.run(addUserQuery,[email,password]);
        response.send("email added successfully");
    }
    }catch(e){
        console.log(e.message);
        process.exit(1);
    }
})