//Primitive

//7types : String, Number, Boolearn, Null, Undefined, Symbol, BigInt

// const score= 100
//  const scoreValue = 100.3

// const isLoggedIn = false
//  const outsideTemp = null
//  let useEmail;

//  const id = Symbol ('123')
//  const anotherId = Symbol('123')

//  console.log(id === anotherId) 

//  const BigInt = 346816843189n


//Reference(Non Primitive)

//Array, Object, Function

// const heors = ["shaktiman", "naagraj", "doga"]
// let myobj = {
//     name:"nitin" ,
//     age:21,
// }

// const myFunction = function(){
// console.log ("hello wold")

// }
// console.log(typeof scoreValue)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)

let myYoutubename = "nitinsharmadotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename)
console.log (anothername);

let userOne = {
    email:"user@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "nitin@google.com"

console.log(userOne.email);
console.log(userTwo.email);

