const obj = {

    
        Global:{
            name:'nepal',
            age:'50'

        },
        Countries: [{
            name:"USA",
            age:"100"

        },
        {
            name:"UK",
            age:"200"

        }

        ]
    
}
console.log(obj)


 var array = Object.values(obj)


 console.log(array[1][0].name)