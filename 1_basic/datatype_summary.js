// primative :7  String , Number , Boolearn , null , undefined , Symbol, BingInt  Memory(Stack)

//Reference (non-primitive) : Array , object , Function   memory:(Heap)
let userone ={
    email: " madalamanikanta@gmail.com"

}
let userTwo=userone
userTwo.email="mmmmmmmmmmmm"
console.log(userTwo);
console.log(userone); // both chamges!
