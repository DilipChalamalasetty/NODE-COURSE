

// const square = function(x){
//     return x*x
// }

// const square=(x)=>{
//     return x*x
// }

// const square =(x)=>x*x


// console.log(square(5))

// const event ={
//     name:'Birthday Party',
//     printGuestList: function(){
//         console.log("Guest list for "+this.name)
//     }
// }

// const event ={
//     name:'Birthday Party',
//     guestLists:['Dilip','Durga','sai'],
//     printGuestList(){
//         const that = this
//         console.log("Guest list for "+this.name)
//         this.guestLists.forEach(function(guest){
//             console.log(guest+" is attending "+that.name)
//         })
//     }
// }

const event ={
    name:'Birthday Party',
    guestLists:['Dilip','Durga','sai'],
    printGuestList(){  //ES6 method definition syntax
        console.log("Guest list for "+this.name)
        this.guestLists.forEach((guest)=>{
            console.log(guest+" is attending "+this.name)
        })
    }
}
event.printGuestList()