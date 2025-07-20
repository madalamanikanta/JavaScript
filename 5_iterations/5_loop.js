//  for each loop
// mainly for array

const coding = ['js' , 'py' , 'java' , 'cpp' , 'c']
// function with no name 
// coding.forEach ((i) => console.log(i))


// function printit(i) {
//     console.log(i);
// }
// coding.forEach(printit)

coding.forEach((val,index,arr) => console.log(val , index , arr))

const myprogram =[ 
    {
    lang : 'java script',
    langFile : 'js'
    },
    {
    lang : 'java ',
    langFile : 'java'
    },
    {
    lang : 'python',
    langFile : 'py',
}]
myprogram.forEach((item) =>console.log(item.langFile))