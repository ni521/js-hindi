const user = {
    username:"nitin",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);

        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// function three(){
//     console.log(this)

// }
// three()

// const tea = function(){
//     let username = "nitin"
//     console.log(this.username);

// }

const tea =() => {
    let username = "nitin"
    console.log(this);

}
//tea()

// const addtwo = (num1,num2) => {
//     return num1+num2

// }


// const addtwo = (num1,num2) =>  num1+num2

//const addtwo = (num1,num2) =>  (num1+num2)

const addtwo = (num1,num2) => ({username:"nitin"})


console.log(addtwo(3,4))