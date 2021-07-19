const express = require ("express")
const app = express()
const mongoose= require ("mongoose")

app.use(express.json())

mongoose.connect(
    "mongodb://locahost:27017/Inventory",{
       useNewUrlParser:true,
       useFindAndModify:false,
       useUnifiedTopology:true,
       useCreateIndex:true
    }, ()=>console.log("connected to database")
)

app.listen(5000,()=>console.log("the server is running"))