// in Java Script array can be resizeable
// Heap
// const arr = [0 ,1 ,2,3,4]
// console.log(arr[4]);
// arr.push(5)
// arr.pop()
// console.log(arr);

// arr.unshift(0.1)  // push from front
// arr.shift() //pop from front
// console.log(arr); 


//  *** slice and splice
// console.log(arr);
// const sli=arr.slice(1,3)
// console.log(`sli: ${sli} original : ${arr}`); // original don't change , op:1,2

// const spli=arr.splice(1,3)
// console.log(`sli: ${spli} original : ${arr}`); // original change : 0,4 , op:1,2,3


// ************************ part-2*************************//

const arr1=[1,2,3,4,5,6]
const arr2=[7,8,9,10]



// arr1.push(arr2)
// console.log(arr1); // 2-D arr
// arr1.pop()

// concate
// const Arr3 = arr1.concat(arr2)
// console.log(Arr3);

const arr4= [...arr1 , ...arr2]
console.log(arr4);

const arr5 = [1,2,[3,4],5,6,[7,[8,9]]]
const arr6 = arr5.flat(Infinity)
console.log(arr6);


console.log(Array.isArray('manikanta'));
console.log(Array.from('manikanta'));
console.log(Array.of(arr1,arr2));
