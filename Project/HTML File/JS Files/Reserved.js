$(document).ready(function () {
    $("#Brand-selection").change(function () {
        var val = $(this).val();
        if (val == "Kawasako") {
            $("#Type-selection").html("<option value='Kawasako1'>Kawasako Ninja ZX-6R  Price : Rp 317,000,000</option><option value='Kawasko2'>Kawasako Ninja H2    Price : Rp 760,000,000</option><option value='Kawasko3'>Kawasako Z1000  Price : Rp 31,630,000</option>");
        } else if (val == "Vixian") {
            $("#Type-selection").html("<option value='Vixian1'>Vixian R Price : Rp 31,630,000</option><option value='Vixian2'>Vixian Live The Legend    Price : Rp 27,945,000</option><option value='Vixian3'>Vixian Monster Energy MotoGP Edition  Price : Rp 31,630,000</option>");
        } else if (val == "Default") {
            $("#Type-selection").html("<option value=''>Select a Brand</option>");
        }
    });
});


function Validate(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var phNum = document.getElementById("phoneNum").value;
    var address = document.getElementById("address").value;
    var postCode = document.getElementById("postCode").value;
    var qty = document.getElementById("qty").value;
    var trueName;
    var trueAge;
    var trueAddress;
    var truePhNum;
    var trueMotorBrand;
    var trueqty;
    var truePosCode;

    if(name.length < 5 ){
        alert("Name must be more than 5 characters!");
        trueName = false
    }else if(AlphaOnlyAlert(name) == false){
        alert("Name must be alphabet only!")
        trueName = false
    }else if(name.length < 5 && AlphaOnlyAlert(name) == false){
        alert("Name must be more than 5 characters and alphabet only!")
        trueName = false
    }else{
        trueName = true
    }
    

    if(age < 18){
        alert("Age must over 18 to purchase a bike!")
        trueAge = false
    }else{
        trueAge = true
    }

    if(postCode.length > 5){
        alert("Postal Code must be 5 Character!")
        truePosCode = false
    }else if(postCode.length < 5){
        alert("Postal Code must be 5 Character!")
        truePosCode = false
    }else if(NumOnlyAlert(postCode) == false){
        alert("Postal Code must be numeric only!")
        truePosCode = false
    }else{
        truePosCode = true
    }

    if (!address.startsWith("Jalan")){
        alert("Address must start with 'Jalan'");
        trueAddress = false
    }else{
        trueAddress = true
    }

    if(phNum.length < 11 || phNum.length > 12){
        alert("Phone number must contains 11 characters or 12 characters!")
        truePhNum = false
    }else if(NumOnlyAlert(phNum) == false){
        alert("Phone number must be numeric only")
        truePhNum = false
    }else if(!phNum.startsWith("08")){
        alert("Phone number must start with '08'. Ex: 081234567890")
        truePhNum = false
    }else{
        truePhNum = true
    }

    if(qty < 1){
        alert("Must buy at least 1 bike!")
        trueqty = false
    }else{
        trueqty = true
    }

    if($("#Brand-selection").val() == "Default"){
        alert("Must pick a bike brand!")
        trueMotorBrand = false
    }else{
        trueMotorBrand = true
    }

    if(trueMotorBrand == true && trueAddress == true && trueAge == true && trueName == true && truePhNum == true && truePosCode == true && trueqty == true){
        alert("Reserved Has Been Made for " + name)
    }

}


function AlphaOnlyAlert(string){
    var lenght = string.length
    for(var i = 0; i < string.length; i++){
        if(string.charAt(i).charCodeAt(0) >= 65 && string.charAt(i).charCodeAt(0) <= 90 || string.charAt(i).charCodeAt(0) >= 97 && string.charAt(i).charCodeAt(0) <= 122 || string.charAt(i).charCodeAt(0) == 32){
            return true
        }else{
            return false
        }
    }
}
function NumOnlyAlert(string){
    var lenght = string.length
    for(var i = 0; i < string.length; i++){
        if(string.charAt(i).charCodeAt(0) >= 48 && string.charAt(i).charCodeAt(0) <= 57){
            return true
        }else{
            return false
        }
    }
}