//  loop for object 

// forin loop
const object = {
    js : 'JavaScript' ,
    cpp : 'C++' ,
    rb : 'Ruby'
}
for (const key in object) {
    console.log(key , ":" , object[key] );
    
}

//  work with array

const programs = ['JS' ,'Cpp' , 'Java' , 'py' , 'c']
for (const key in programs) {
    console.log(programs[key]);  // keys : indexs
    
}

// //  map
// const map = new Map()
// map.set('IN' , 'India')
// map.set('USA' , 'United states')
// map.set('FRA' , 'Franch')

// for (const key in map) {  // map is not iteratable 
//    console.log(key);
   
// }
