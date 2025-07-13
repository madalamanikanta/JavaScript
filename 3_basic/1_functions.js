function say_hello() {
    console.log('Hello mister!');
    
}
// say_hello()

function addtwonumbers(num1 , num2) { // num1,num2 parameters
    console.log(num1+num2);
    return num1+num2
}

// addtwonumbers(4,7) // 4,7 arguments
// console.log(addtwonumbers(5,8));
function return_it(...num1) {    // ... is rest operator same like python **
    return num1
} 
// console.log(return_it(120 , 130, 140)); // use rest or sperad operator

const user = {
    username :"manikanta",
    age : 390000000
}
function object_handle(anyobject) {
    console.log(`user is ${anyobject.username} and age is ${anyobject.age}`);
    
}

// object_handle(user)


