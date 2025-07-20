// immediately invoked function Exressions(IIFE)
// A function which execute imediately
// to remove Gobal variable pollution

(function func(){                 // named IIFE
    console.log('DB connected');
    
})();   // semicoloum is needed for sore to stop execution 

( (name) => {                     // unnamed IIFE
    console.log('db connected two',name);
    
} )('manikanta')