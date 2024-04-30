// singleton


//object literals

const mySym = Symbol("key1") 

const Jsuser = {
    name :"nitin",
    "full name":"nitin sharma",
    [mySym]:"mykey1",
    age:21,
    location:"Pathankot",
    Email:"nitin@gmail.com",
    lastLoginDays:["Monday","Saturday"],
    isloggedIn:false
}

console.log(Jsuser.Email)
console.log(Jsuser["Email"])
console.log(Jsuser["full name"])
console.log(Jsuser[mySym])

Jsuser.Email = "nitin@chatgpt.com"
// Object.freeze(Jsuser)
Jsuser.Email = "nitin@microsoft.com"
console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello Js user")

}
Jsuser.greetingtwo = function(){
    console.log(`Hello Js user,${this.name}`)

}
console.log(Jsuser.greeting())
console.log(Jsuser.greetingtwo())
