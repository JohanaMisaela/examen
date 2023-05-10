const express = require('express')
const app = express()
const port =  3002 

 
app.get('/', (req,res)=>{
     res.send('hello')
})

//1


app.listen(port,()=>{
      console.log(`Server is runing on ${port}`)
} )