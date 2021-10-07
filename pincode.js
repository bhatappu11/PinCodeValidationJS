function pinCodeValidator(pincode){
    let pinCodeRegex = RegExp("[0-9]{6}");
    if(pinCodeRegex.test(pincode))
        console.log("Valid");
    else throw 'Pincode is not valid';
}
try{
    pinCodeValidator(500231);
}catch(e){
    console.error(e);
}