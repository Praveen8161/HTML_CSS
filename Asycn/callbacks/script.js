function insertCard(callback){
    console.log("Wait till we read card");
    callback(selectOptions);
}

function selectAccount(callback){
    console.log("select account");
    let acc = prompt("enter your account");
    if(acc){
        callback(enterCode);
    }
}

function selectOptions(callback){
    console.log("select options from below");
    let opt = prompt("selelct 1, 2 or 3");
    if(opt){
        callback(enterAmount);
    }
}

function enterCode(callback){
    let code = prompt("Enter your code");

    if(code){
        callback(collectCash);
    }
}

function enterAmount(callback){
    let amount = prompt("Enter Amount");
    if(amount){
        callback();
    }
}

function collectCash(){
    console.log("Please collect your cash");
}

insertCard(selectAccount);