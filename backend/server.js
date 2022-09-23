require('dotenv').config()
const express =require("express")

const app=express()
const workoutRoutes=require('./routes/workouts')
const mongoose=require('mongoose')

app.use(express.json())//to help decode the json when request is made
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
app.use('/api/workouts',workoutRoutes)

mongoose.connect(process.env.MONGO_URI).then(()=>{

    app.listen(process.env.PORT,()=>{console.log("listening port http://localhost:4000")})

}).catch((error)=>{
    console.log(error)
    

})

//so basically all the route paths are from the router workout.js file, the
//paths become relative to /api/workouts when request is made e.g if the router path is /:id then
//the final path will be /api/workouts/:id
//this enables modularizing