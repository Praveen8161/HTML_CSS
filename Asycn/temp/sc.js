// //Curring function
// function first(a){
//     return function second(b){
//         console.log(a,b);
//     }
// }

// first(5)(10);

function mul(a){
    return function(b){
        if(b){
            return mul(a*b);
        }else{
            return a;
        }
    }
}

console.log(mul(2)(3)(10)());
