// singleton           // Object.create

// object literals

const my_symb = Symbol('Key1')
const jsuser = {
    name : 'Manikanta' ,
    [my_symb] : 'key' ,                  // to put symbol use [] 
    "age" : 19 ,
    location : 'Hyberabad' ,
    isLoggedIn : false 
}

console.log(jsuser.name);  // Not proper way to use
console.log(jsuser['name']);  // proper 
console.log(jsuser [my_symb]);


// Object.freeze(jsuser)  // freeze object

// jsuser.name='madala' // no error but does not change 
// console.log(jsuser);


// make a function in object (method)

jsuser.my_method = function () {
    console.log('hello js  my name is manikanta ');
    console.log(`hello user name of the object is ${this.name}`);
    
}
jsuser.my_method()
console.log();
