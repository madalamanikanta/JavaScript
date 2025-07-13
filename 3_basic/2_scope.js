if (true) {
    let a=10
    const b=20
    var c=30
}
// console.log(a); // error
// console.log(b); // error
// console.log(c); // no error print(30)


let i = 200
for (let i=0 ; i<5 ; i++) {
    console.log(i);
    
}

console.log('outer',i);


function one(){
    const user='manikanta'
    function two() {
        const user2 = 'madala'
        console.log(user);
         
    }
    two()
    // console.log(user2); //error
    
}
one()


// ************************important********************

console.log(addone(5));  // no error
function addone(num) {
    return num+1
}

 add_it(5)// error 

const add_it = function(num) {
    return num+2
}
