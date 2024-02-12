let name1 = {
    fname:"kishore",
    lname:"kumar",
    fullname:function(fname,lname){
        console.log(this.fname,this.lname);
    }
}

let name2 = {
    fname:"ram",
    lname:"batista"
}

let wholeName = function(city,state){
    console.log(this.fname, this.lname, city, state)
}

//Call 
// The Call method is useful when we want to execute a function with a different values it let us borrow a properties from another object and can take number of arguments
console.group('Call function start');
name1.fullname();
name1.fullname.call(name2)
wholeName.call(name1,"salem","tamil nadu");
console.groupEnd();

//Apply 
// The Apply method is useful when we want to execute a function with a different values it let us borrow a properties from another object and can take number of arguments as a array
console.group('Apply function start');
name1.fullname.apply(name2);
wholeName.apply(name1,["salem","tamil nadu"])
console.groupEnd();

//Bind 
// The Bind method is useful when we want to borrow a properties from another object but it will not execute the function immediately and returns a new function, so it can be reused
console.group('Bind function start');
let result1 = name1.fullname.bind(name2);
result1();
let result = wholeName.bind(name1,"chennai","karala")
result();
console.groupEnd();

