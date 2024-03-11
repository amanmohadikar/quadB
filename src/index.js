const express = require('express')
const mongoose = require('mongoose')
const app = express()
const router = require("./route/route")
const cors = require('cors'); 


app.use(cors());
app.use(express.json())
mongoose.connect('mongodb+srv://j_jivan:223521@cluster0.tbpicad.mongodb.net/group26Database')
.then(() => console.log('mongo is connected'))
.catch(err => console.log(err))
app.use('/', router)
app.listen(3000, function(){
    console.log('this app is running on port 3000')
})