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

    if(name.length < 5 ){
        alert("Name must be more than 5 characters!");
    }else if(AlphaOnlyAlert(name) == false){
        alert("Name must be alphabet only!")
    }else if(name.length < 5 && AlphaOnlyAlert(name) == false){
        alert("Name must be more than 5 characters and alphabet only!")
    }
    

    if(age < 18){
        alert("Age must over 18 to purchase a bike!")
    }

    if(postCode.length > 5){
        alert("Postal Code must be 5 Character!")
    }else if(postCode.length < 5){
        alert("Postal Code must be 5 Character!")
    }else if(NumOnlyAlert(postCode) == false){
        alert("Postal Code must be numeric only!")
    }

    if (!address.startsWith("Jalan")){
        alert("Address must start with 'Jalan'");
    }

    if(phNum.length < 11 || phNum.length > 12){
        alert("Phone number must contains 11 characters or 12 characters!")
    }else if(NumOnlyAlert(phNum) == false){
        alert("Phone number must be numeric only")
    }else if(!phNum.startsWith("08")){
        alert("Phone number must start with '08'. Ex: 081234567890")
    }

    if(qty < 1){
        alert("Must buy at least 1 bike!")
    }

    if($("#Brand-selection").val() == "Default"){
        alert("Must pick a bike brand!")
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