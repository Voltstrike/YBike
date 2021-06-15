$(document).ready(function () {
    $("#Brand-selection").change(function () {
        var val = $(this).val();
        if (val == "Kawasako") {
            $("#Type-selection").html("<option value='Kawasako1'>Kawasako Ninja ZX-6R   Price : Rp 317,000,000</option><option value='Kawasko2'>Kawasako Ninja H2    Price : Rp 760,000,000</option><option value='Kawasko3'>Kawasako Z1000  Price : Rp 31,630,000</option>");
        } else if (val == "Vixian") {
            $("#Type-selection").html("<option value='Vixian1'>Vixian R Price : Rp 31,630,000</option><option value='Vixian2'>Vixian Live The Legend    Price : Rp 27,945,000</option><option value='Vixian3'>Vixian Monster Energy MotoGP Edition  Price : Rp 31,630,000</option>");
        } else if (val == "Default") {
            $("#Type-selection").html("<option value=''>Select a Brand</option>");
        }
    });
});