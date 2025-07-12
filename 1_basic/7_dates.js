//let date=new Date()
// console.log(date); // Gives all shit you don't want along with what you want!
// console.log(date.toString()); // Sat Jul 12 2025 16:33:36 GMT+0000 (Coordinated Universal Time)
// console.log(date.toDateString()); //Sat Jul 12 2025
// console.log(date.toLocaleString()); //7/12/2025, 4:33:36 PM
// console.log(typeof date); // Date is an object

// let random_date=new Date(2025 , 7 , 12)
// console.log(random_date.toLocaleString());
// let random_date_2 = new Date("12-7-2025")
// console.log(random_date_2.toLocaleString());


// let time=Date.now()
// console.log(time);  //1752339104598
// console.log(random_date.getTime()); //1754956800000
// console.log(Math.floor(Date.now())); //1752339104598

let date_3=new Date()
console.log(`${date_3.getMonth()} - ${date_3.getDay()} - ${date_3.getFullYear()}`);
