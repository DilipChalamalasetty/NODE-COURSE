// setTimeout(()=>{
//     console.log("Function called")
// },2000)


// const geocode =(address,callback)=>{
//     setTimeout(()=>{
//         const data={
//             latitude:0,
//             longitude:0
    
//         }
//         callback(data) //call back function
//     },2000)
// }

// geocode("philadelphia",(data)=>{
// console.log(data)
// })



const add=(a,b,sum)=>{
    setTimeout(()=>{
        sum(a+b)
    },2000
    )
}

add(1,2,(c)=>{
    console.log("sum is "+c)
})