//for of

const arr= [1,2,3,4,5]

for (const num of arr) {
    console.log(num)
}

const greeting = "Hellow world!"
for (const greet of greeting) {
        console.log(`Each char is ${greet}`)
}

//MAP

const map= new Map()
map.set('IN',"India")
map.set('usa', "United states of Amrica")
map.set('fr',"france")
map.set('In',"India")

console.log(map);

for (const [key, value] of map) {
        console.log(key, ':-', value);
}

const myObject = {
        'game' : 'NFS',
        'game' : 'Spiderman'

}

// for (const [key,value] of myObject) {
//         console.log(key,':-',value);
// }

