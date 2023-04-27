const express = require('express');

const contactschema =require('../model/contact')

const contactRoute = express.Router()

//route get all contacts
//==> http://localhost/:3005/contact/getAll

contactRoute.get('/getAll' ,async(req,res)=> {
try {

const contact =await contactschema.find()

res.status(200).json({msg:'this is all users', contact})


}catch(err) {
console.log(err)
res.send("you have a problem")

}
})


//route post or add contact
//==> http://localhost:3005/contact/addContact

contactRoute.post('/addContact' ,async(req,res)=> {
try {
const newContact =new contactschema (req.body)

await newContact.save()

res.status(200).json({msg:'you added the user', newContact})
}catch(err) {
console.log(err)
res.send("you have a problem")

}
})


//route update contact
//==> http://localhost:3005/contact/update/:id

contactRoute.put('/update/:id',async (req,res)=>{
try{

const {id} = req.params

const updateuser = await contactschema.findByIdAndUpdate(id,{$set:{...req.body}})

res.status(200).json({msg:"you updated the contact" , updateuser})

}catch(err) {
    console.log(err)
res.send("you have a problem")
}

})





//route delete contact
//===> http://localhost:3005/contact/delete/:id

contactRoute.delete('/delete/:id',async (req,res)=>{
try{

const {id} = req.params


res.status(200).json({msg:"you delete the contact" , })

}catch(err) {
    console.log(err)
res.send("you have a problem")
}

})




//route get unique contact
//==> http://localhost:3005/contact/getunique/:id



contactRoute.get('/getunique/:id',async (req,res)=>{
try{

const {id} = req.params

const getuser = await contactschema.findById(id)

res.status(200).json({msg:"find the contact" , getuser})

}catch(err) {
    console.log(err)
res.send("you have a problem")
}

})













module.exports = contactRoute