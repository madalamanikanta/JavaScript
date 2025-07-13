// const tenderuser = new Object()   // singleton user  |
const tenderuser = {}          // not a singleton user  | -> both are same (gives same output)

tenderuser.id = "obj_id"
tenderuser.name = 'Manikanta'
// console.log(tenderuser);


const regularuser = {
    email : 'madalamanikanta@gmai.com' ,
    fullname : {
        first : 'madala' ,
        second : 'Manikanta'
    }
}
// console.log(regularuser.fullname.second);

// const obj3 = {tenderuser , regularuser}  // not proper like array 
const obj3 = Object.assign({},regularuser,tenderuser)  // {} is target all will copy into it 
// {} === obj3
// Object.assign(tenderuser,regularuser)  tenderuser === return object 
console.log(obj3);
