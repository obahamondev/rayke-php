function consulta() {

    var nom = document.getElementById("name").value;
    var cor = document.getElementById("email").value;
    var sms = document.getElementById("message").value;

    dataCons = { 'name': nom, 'email': cor, 'message': sms };

    //ventana modal de cargando  

    if (nom == "" || cor == "" || sms == "") {
        swal("Ups..!", "Debes llenar todos los campos requeridos.", "error");
    } else {
        swal({ imageUrl: 'img/Logo_reyke.png', imageWidth: 350, imageHeight: 150, title: "Cargando...", allowEscapeKey: false, allowOutsideClick: false, text: "Espere unos segundos.", showConfirmButton: false });
        $.ajax({
            url: "contacto.php",
            type: "POST",
            data: dataCons,
            dataType: 'json',
            cache: false,
            success: function(arr) {
                swal.closeModal();
                var resp = arr[0];
                if (resp == "error") {
                    swal("Ups..!", "Parece que tenemos problemas de comunicación con Internet.", "error");
                } else if (resp == "regis") {
                    swal("Genial!", "Tu consulta fue enviada.", "success");
                    limpiar();
                }
            }
        });
    }

}
//limpiar campos
function limpiar() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}