// //Curring function

//Nested function to the Sequence of the function where each can take only one arguments
// It it take more than one then it is 'Partial Application'

function mul(a){
    return function(b){
        if(b){
            return mul(a*b);
        }else{
            return a;
        }
    }
}

console.log(mul(2)(3)(10)()); // Curring Function

mul(2)(5,6) // Partial Applications
