const name="Dilip"
const age =22
//object property shorten
const user={
    name,//es6 shorten syntax
    userAge:age,
    location:'mumbai'
}
console.log(user)

//object destructing 
const product={
    label:"Notebooks",
    price:45,
    stock:201
} 

const {label,stock}=product
console.log(label)
console.log(stock)

const {label:productLabel}=product
console.log(productLabel)


const transaction=(type,{label,stock})=>{
    console.log(type,label,stock)
}
transaction('order',product)