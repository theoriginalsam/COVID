const bodyParser = require('body-parser')
const express = require('express')
const app = express()
app.use(express.static('public'))

app.use(express.json());


// app.post('/',(req,res)=>{
// console.log(req.body)
// })


 var obj;


const request = require('request');

app.get('/',(req,res)=>{

    const covid = (callback)=>{
        request({url:'https://api.covid19api.com/summary',json: true},(error, response, body)=> {
        
        
           callback({
               gd:body.Global,
               cou:body.Countries
               }) 
           
        });
        
        
        }
        
        
        covid(({gd,cou})=>{
        
        res.send({

            "Global":gd,

            "Countries":cou
        
        })
        })

        console.log("Connected")

})


app.listen(3000,()=>{
    console.log("conneceted")
})
