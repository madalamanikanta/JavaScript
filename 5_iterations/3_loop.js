// for of 
// array specific loop



// const arr =[ 1 ,2 ,3 ,4 ,5]
// for (const num of arr) {
//     console.log(num);
    
// }

// let name = "mani kanta"

// for (const ch of name) {
//     console.log(ch);
    
// }


// maps in Java script

const map = new Map()
map.set('IN' , 'India')
map.set('USA' , 'United states')
map.set('FRA' , 'Franch')

console.log(map);
for (const [key , value] of map) {
    console.log(key ," : " , value);
    
}
// object is not iterabal like maps
