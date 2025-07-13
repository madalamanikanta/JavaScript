const user = {
    username : 'manikanta',
    pay : 1000,
    welcome_message : function(){
        console.log(`${this.username} , welcome to my world`);
        console.log(this);
        
    }
}
// user.welcome_message()
// user.username = "madala mani"
// user.welcome_message()



// console.log(this); // op : {}
// if you do this in brouser then ooutput is different windows object is shown


function func() {
    let user_name = 'mani'
    // console.log(this); // op:- lot content that i don't know    
    console.log(this.user_name);// op: undefined
}
// func()


const funct = () => { 
    let user_name = "manikanta"
    console.log(this);    // op :- {}    
}
// funct()



// ************************* arrow function in java Script works same as lambda function in python *****************


const add_it = (num1,num2) => (num1+num2)  // {} is used return is needed , () not needed
// implisite return 
console.log(add_it(12,43));
