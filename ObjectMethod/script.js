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
    console.log(this.fname, this.lname, city, state);
}

//Call
name1.fullname.call(name2)

wholeName.call(name1,"salem","tamil nadu")

//Apply
wholeName.apply(name1,["salem","tamil nadu"])

//Bind
let result = wholeName.bind(name1,"chennai","karala")
result();

