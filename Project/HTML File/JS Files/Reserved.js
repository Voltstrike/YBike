$(document).ready(function () {
    $("#Brand-selection").change(function () {
        var val = $(this).val();
        if (val == "Kawasako") {
            $("#Type-selection").html("<option value='Kawasako1'>Kawasako Ninja ZX-6R</option><option value='Kawasko2'>Kawasak0 Ninja H2</option><option value='Kawasko3'>Kawasako Z1000</option>");
        } else if (val == "Vixian") {
            $("#Type-selection").html("<option value='Vixian1'>Vixian R</option><option value='Vixian2'>Vixian Live The Legend</option><option value='Vixian3'>Vixian Monster Energy MotoGP Edition</option>");
        } else if (val == "Default") {
            $("#Type-selection").html("<option value=''>Select a Brand</option>");
        }
    });
});