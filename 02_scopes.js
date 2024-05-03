//let a = 300

// if (true){
//     let a = 10
//     const b = 20
//     console.log("INNER:",a)
// }



//console.log(a);
// console.log(b);
//console.log(c);

function one(){
    const username = "nitin"

    function two(){
        const website = "youtube"
        console.log(username);

    }
    //console.log(website);
    //two()
}

//one()

if (true){
    const username = "nitin"
    if (username === "nitin") {
        const website = "youtube"
        //console.log(username + website);
    }
   // console.log(website);
}
//console.log(username);

//++++++++++++++++++++++++++++++++INTERESTING++++++++++++++++++++++++++++++++++

console.log(addOne(5))

function addOne(num){
    return num + 1

}

const addTow = function(){
    return num + 2
}
//addTow(5)