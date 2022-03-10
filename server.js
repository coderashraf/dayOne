const express =require('express')
const app=express()

app.get("/user",function(req,res){
  const user={
    name:'ashraf',
    age:93
  }
  res.send("hi"+'<h1>hello</h1>'+ JSON.stringify(user) )
})

app.listen(8000)