const express = require('express')
const app = express()
 
const port =3005
const connectdb = require('./config/connectdb')
const contactRoute = require('./routes/contactRoute')

connectdb()

app.use(express.json())



app.use('/contact',contactRoute)


app.listen(port,err=>{
    err?console.log(err): console.log('go to the port =>$(port)')
    
})