const express=require ("express");
const app=express();
const dotenv=require("dotenv");
dotenv.config({path:'./config.env'})
const {router,login,update,deleteUser}=require("./router/auth-router")



require('./db/connection');

const port=process.env.PORT;
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("hello user")  //api/v3/app
})

app.use("/",router)
app.use("/",login)
app.use("/",update)
app.use("/",deleteUser)

app.listen(port,()=>{
    console.log("listening on port 3000")
})