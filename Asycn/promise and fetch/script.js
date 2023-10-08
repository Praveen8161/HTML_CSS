//Making a promise (produce)

let task = 75;
let placementPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        if(task>80){
            resolve("your placement is processed");
        }else{
            reject("please complete 80 task");
        }
    },3000);
});
console.log(placementPromise);

placementPromise
    .then((result) => console.log(result))
    .catch((result) => console.log(result)); //calling the promise

console.log(placementPromise);

const placed = new Promise((resolve,reject) => {
    setTimeout(() => {
        if (task >= 70 && task < 80){
            resolve(100);
        }else{
            reject("complete 80 task");
        }
    },1000);
});

placed
    .then((res) => {console.log(res); return res*2 })
    .then((res1) => console.log(res1))


//analysing a result of the promise (consumer)

//promise.all

//promiseFun1

let pro1 = new Promise((res,rej) => {
    setTimeout(()=>{
        console.log("pro1 called");
        res(10);
    },1000);
});

//promiseFun2

let pro2 = new Promise((res,rej) => {
    setTimeout(()=>{
        console.log("pro2 called");
        res(10);
    },1000);
});

//promiseFun3

let pro3 = new Promise((res,rej) => {
    setTimeout(()=>{
        console.log("pro3 called");
        res(10);
    },1000);
});


//in the given array of promise if any of them is reject then the promise all will execute catch
// if all of them is resolved then "then" will be called
Promise.all([pro1,pro2,pro3])
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

//chain promise
let chainPromise = new Promise((resolve, reject) => {
  let value = 0;
  setTimeout(() => {
    if (value > 0) {
      resolve(value);
    } else {
      reject("it's a negative value");
    }
  }, 1000);
});

chainPromise
  .then((data) => {
    console.log(data); // 15
    return data * 2; // 30
  })
  .then((data2) => {
    console.log(data2);
    return data2 * 2;
  })
  .then((data3) => {
    console.log(data3);
  })
  .catch((err) => console.log(err));

//*********************************************************************

//Fetch 
//fetch always returns a promise

fetch("https://restcountries.com/v3.1/all")
    .then((response) => console.log(response.json()))
    .then((data) => {
        console.log(data);
        countries(data);
        })
    .catch((err)=> console.log("Error: " + err))

function countries(data){
    
}
