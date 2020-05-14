
console.log("Hi Client")
var countryCode;
var i ;
var co="Afghanistan";



fetch('https://api.covid19api.com/summary').then((response)=>{

response.json().then((data)=>{

    console.log("Got Data")

const array=Object.values(data)


const covid19 = document.querySelector('form')
const country = document.querySelector('select')



document.getElementById("cases").innerHTML = data.Global.TotalConfirmed;
document.getElementById("death").innerHTML = data.Global.TotalDeaths;
document.getElementById("recover").innerHTML = data.Global.TotalRecovered;
document.getElementById("newCases").innerHTML = data.Global.NewConfirmed;
document.getElementById("newDeath").innerHTML = data.Global.NewDeaths;


covid19.addEventListener('submit',(e)=>{
    e.preventDefault()

  
    console.log("Works")
    co= country.value
    console.log(co)




  try{    
    
for( i=0 ;i<200;i++){
   // console.log("Inside")
    if(co===array[1][i].Country){
    countryCode=i
    console.log(countryCode)





    }

   
  
    
    }
}catch(error){

    console.log("EDIT THE HTML")
}

console.log(countryCode+" th")
console.log(data.Countries[countryCode])



document.getElementById("cou").innerHTML = co
console.log("Fukc"+co)

document.getElementById("cases").innerHTML = data.Countries[countryCode].TotalConfirmed;
document.getElementById("death").innerHTML = data.Countries[countryCode].TotalDeaths;
document.getElementById("recover").innerHTML = data.Countries[countryCode].TotalRecovered;
document.getElementById("newCases").innerHTML = data.Countries[countryCode].NewConfirmed;
document.getElementById("newDeath").innerHTML = data.Countries[countryCode].NewDeaths;



})











   
   
    


})

}).catch((error)=>{
   console.log("Reload Server")

})




