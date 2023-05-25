
// const express = require('express')
// const path = require('path')
// const app = express()
// const port=6788
  
// // Static Middleware
// app.use(express.static(path.join(__dirname, 'public')))
  
// // View Engine Setup
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'ejs')
  
// app.get('/', function(req, res){
//     res.render('Demo')
// })
  
// app.listen(port, function(error){
//     if(error) throw error
//     console.log(`Server created Successfully : ${port}`)
// })



const express= require('express') //it returns functon refernce and express is a function that provide broad features, require is used to import function,
const path = require('path') //provides a way of working with directories and file paths.
const app= express()
const port=6788

//__dirname -  tells you the absolute path of the directory containing the currently executing file.
//app.use() loads a function to be used as middleware. 
//express.static() is a function that takes a path, and returns a middleware
//path.join(--dirname,'public') abs path deta h current working dir m jo public folder h
//middleware is used to comuunicate bw os and app

//static middleware

app.use(express.static(path.join(__dirname,'public')))

//app.set('name','value') -- 
// View engines allow us to render web pages 
// '/' http req kahi s bhi kr sakte h and res.render user ko provide karta h

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.get('/',function(req, res){
    res.render('Demo')
})

app.listen(port, function(error){
    if(error) throw error
    console.log(`server created successfully on port: ${port}`)
})