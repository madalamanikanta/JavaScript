const email = []
if (email) {  //true- [] , false ='',true ='something'
    console.log('got user');
    
} else {
    console.log('not got user');
    
}




// falsy values = false , 0 ,-0 , BigInt 0n , "" , null ,undefined ,NaN
// remaining all true 

// truthy values = "0" , 'false' , " " , [] ,{} ,function() {}
if (Object.keys({}).length === 0) {
    console.log('object is empty');
    
}


// '' == 0 == false



//  Nullish Coalescing Operator (??) :null undefined  is different from terniary 

let val ;
// val = null ?? 10  // 10

// val = undefined ?? 10 //10

val = 5 ?? 10
console.log(val); // op-:5




// terniary operator:


const ice = 100
ice >=80 ? console.log('more than 80') : console.log('less than 80');

