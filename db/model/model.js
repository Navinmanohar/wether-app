const mongoose=require("mongoose");
const {Schema}=require("mongoose");
// const {v4:uuid}=require("uuid");
const userSchema=new Schema({
    type:{
        type:String,
        required:"true"
    },
    uid:{
        type:String, 
        // required:true
    },
    nam:{
        tpye:String,
        // required:true
    },
    tagline:{
        type:String,
        // required:true
    },
    schedule:{
        type:String,
        // required:true
    },
    description:{
        type:String
    },
    file:{
        data:Buffer,
        type:String
    },
    moderator:{
        type:String
    },
    category:{
        type:String
    },
    sub_category:{
        type:String
    },
    rigor_rank:{
        type:Number
    },
    attendees:String
    

})
// user is always capital
module.exports=mongoose.model('Api',userSchema);