function pinCodeValidator(pincode){
    let pinCodeRegex = RegExp("^[0-9]{3}[\\s]?[0-9]{3}$");
    if(pinCodeRegex.test(pincode))
        console.log("Valid");
    else throw 'Pincode is not valid';
}

let pinCodeArr = new Array();
pinCodeArr.push("577432");
pinCodeArr.push("56783");
pinCodeArr.push("B678123");
pinCodeArr.push("57743@");
pinCodeArr.push("577 432");
pinCodeArr.forEach(element => {
    try{
        pinCodeValidator(element);
    }catch(e){
        console.error(e);
    }
});