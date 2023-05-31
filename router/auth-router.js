const express = require("express");
const router = express.Router();
const login=express.Router();
const update=express.Router();
const deleteUser=express.Router();
const Api = require("../db/model/model.js");
// const mongoose=require("mongoose")
const {v4:uuid}=require("uuid");

router.post("/register", async (req, res) => {
  console.log(req.body);
  const { type,uid,tagline,schedule,description,file,moderator,category,sub_category,rigor_rank ,attendees} = req.body;
  const user = new Api({
   
    type,
    uid,
    
    
    tagline,
    schedule,
    description,
    file,moderator,category,sub_category,rigor_rank,attendees
  });
  try {
    const result = await user.save();
    if (!result) return res.status(404).json({ message: "not created" });
    else return res.status(200).json({ message: "success" });
  } catch (err) {
    console.log(err);
  }

  res.json({ message: req.body });
});
login.post("/login",async(req,res)=>{
      const uid=req.body.type;;
      await Api.findOne({type:uid}).then((uid)=>
      {
           if(uid)
           {
            return res.status(200).json({message:`congratulation${re.body.id}`})
           }
           else
           return res.status(400).json({message:`you have to register first `})
      }).catch((e)=>{
        console.log(e);
      })
})
update.post("/login/update",async(req,res)=>{
    const id=req.body.type;
    const { type,uid,tagline,schedule,description,file,moderator,category,sub_category,rigor_rank ,attendees} = req.body;
    await Api.findByIdAndUpdate({id:id}).then(data=>{
         if(data)
          return res.status(200).json({message:`data updated ${id}`})
          else
          return  res.status(200).json({message:`data not  updated` })
           
    })
})
deleteUser.post("/login/delete",async(req,res)=>{
    const type=req.body.type
    await Api.findByIdAndDelete({type:type}).then(data=>{
         if(data)
          return res.status(200).json({message:`data delete ${type}`})
          else
          return  res.status(200).json({message:`data not  updated` })
         
    })
})
//this for exporting our router
module.exports ={ router,login,update,deleteUser}
