const myObject ={
    hs:'javascript',
    cpp:'c++',
    rb:"ruby",
    swift:"swift by apple"

}

for (const key in myObject) {
        console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming= ["js","rb","py","java","cpp"]

for (const key in programming) {
    console.log(programming[key]);
        
}

// const map= new Map()
// map.set('IN',"India")
// map.set('usa', "United states of Amrica")
// map.set('fr',"france")
// map.set('In',"India")

// for (const key in object) {
//   console.log(key);
// }

