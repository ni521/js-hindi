function saymyname(){

    console.log("n");
    console.log("i");
    console.log("t");
    console.log("i");
    console.log("n");


}
//saymyname()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2){
    // let result = (number1 + number2);
    // return result
    return number1 + number2

}

 const result = addTwoNumbers(3,5)

 //console.log("Result:",result)

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please Enter A username");
        return
    }

    return `${username} just logged in`

}

// console.log(loginUserMessage("nitin"))

//console.log(loginUserMessage())

function calculateCartPrice(val1,val2,...num1){
    return num1

}
//console.log(calculateCartPrice(200,500,400))

const user = {
    username:"nitin",
    prices:199

}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
//handleObject(user)

handleObject({
    username:"sam",
    price:399

})
const myNewArray = [200,400,600,800]

function returnSecondValue(getArray){

    return getArray[1]

}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,600,800]));
