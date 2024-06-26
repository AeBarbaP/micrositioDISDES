// agregar empresa

function agregarEmpresa(){
    var nombre = document.getElementById("razonSocial").value;
    var rfc = document.getElementById("rfc").value;
    var pFisica = document.getElementById("pFisica");
    var pMoral = document.getElementById("pMoral");
    if(pFisica.checked){
        var regimen = 1;
    }
    else if(pMoral.checked){
        var regimen = 2;
    }
    var contacto = document.getElementById("contacto").value;
    var celular = document.getElementById("celular").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var link = document.getElementById("link").value;
    var calle = document.getElementById("calle").value;
    var numExt = document.getElementById("numExt").value;
    var numInt = document.getElementById("numInt").value;
    var colonia = document.getElementById("colonia").value;
    var cp = document.getElementById("cp").value;
    var localidad = document.getElementById("localidad").value;
    var municipio = document.getElementById("municipio").value;
    var estado = document.getElementById("estado").value;
    var descuentoOp = document.getElementById("descuentoOp");
    var productoGratisOp = document.getElementById("productoGratisOp");
    var promoDiaOp = document.getElementById("promoDiaOp");
    var promoOtraOp = document.getElementById("promoOtraOp");
    var descuentoPorcentaje = document.getElementById("descuento").value;
    var descuentoProducto = document.getElementById("productoGratis").value;
    var descuentoPromocion = document.getElementById("promoDia").value;
    var descuentoOtro = document.getElementById("promoOtra").value;
    var categoria = document.getElementById("categoria").value;
    var userName = document.getElementById("userName").value;
    var pdw = document.getElementById("pdw").value;
    document.getElementById("progressBar").hidden = false;
    var dias = document.getElementById("concatenadoDias").value;

    if (descuentoOp.checked){
        var descuento = 1;
        var descuentoDescripcion = descuentoPorcentaje;
    } else if (productoGratisOp.checked) {
        var descuento = 2;
        var descuentoDescripcion = descuentoProducto;
    } else if (promoDiaOp.checked) {
        var descuento = 3;
        var descuentoDescripcion = descuentoPromocion;
    } else if (promoOtraOp.checked) {
        var descuento = 4;
        var descuentoDescripcion = descuentoOtro;
    } else {
        var descuento = 0;
        var descuentoDescripcion = "";
    }

    if (nombre == "" || rfc == "" || regimen == "" || contacto == "" || celular == "" || telefono == "" || email == "" || categoria == "" || calle == "" || numExt == "" || colonia == "" || cp == "" || localidad == "" || municipio == "" || estado == "" ||  dias == "" ||descuento == 0 || descuentoDescripcion == "" || userName == "" || pdw == "") {

        alert("Llena los campos faltantes");
        
    } else {

        $.ajax({
            type:"POST",
            url:"prcd/proceso_alta_empresa.php",
            data:{
                nombre:nombre,
                rfc:rfc,
                regimen:regimen,
                contacto:contacto,
                celular:celular,
                telefono:telefono,
                email:email,
                link:link,
                categoria:categoria,
                calle:calle,
                numExt:numExt,
                numInt:numInt,
                colonia:colonia,
                cp:cp,
                localidad:localidad,
                municipio:municipio,
                estado:estado,
                dias:dias,
                descuento:descuento,
                descuentoDescripcion:descuentoDescripcion,
                userName:userName,
                pdw:pdw
            },
            dataType: "json",
            success: function(data){
                var jsonData = JSON.parse(JSON.stringify(data));
                var success = jsonData.success;
                
                if (success = 1) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Empresa agregada',
                        text: 'Proceso exitoso',
                        confirmButtonColor: "#0d6efd",
                        footer: 'INCLUSIÓN'
                    }).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                            window.location.href= "registro-empresa.html";
                        }
                    });
                    $('#agregarUser').modal('hide'); 
                } else if (success = 0){
                    Swal.fire({
                        icon: 'warning',
                        title: 'Usuario no agregado',
                        text: 'Proceso no exitoso',
                        footer: 'INCLUSIÓN'
                    });
                }
            }
        });
    }
}

  // cambiar password
function cambiarPassword(){
    document.getElementById('pdw').setAttribute('type','text');
    document.getElementById('btnPwd').setAttribute('class','bi bi-eye-slash-fill');
    document.getElementById('btnVer').setAttribute('onclick','ocultarPassword()');
}
function ocultarPassword(){
    document.getElementById('pdw').setAttribute('type','password');
    document.getElementById('btnPwd').setAttribute('class','bi bi-eye-fill');
    document.getElementById('btnVer').setAttribute('onclick','cambiarPassword()');
}

function _(el) {
    return document.getElementById(el);
}

function foto() {
    var idUsr = document.getElementById('rfc').value;
    var file = _("file").files[0];
    //var documento = doc;
    var idUsuario = idUsr;
    var formdata = new FormData();
    // variable del name file
    formdata.append("file", file);
    // variables post
    // formdata.append("documento", documento);
    formdata.append("idUsuario", idUsuario);
    var ajax = new XMLHttpRequest();
    ajax.upload.addEventListener("progress", progressHandler, false);
    ajax.addEventListener("load", completeHandler, false);
    ajax.addEventListener("error", errorHandler, false);
    ajax.addEventListener("abort", abortHandler, false);
    ajax.open("POST", "prcd/upload_photo.php"); 
    
    ajax.send(formdata);
    
    function progressHandler(event) {

        _("loaded_n_total").innerHTML = "Cargado " + event.loaded + " bytes de " + event.total;
        var percent = (event.loaded / event.total) * 100;
        _("progressBar").value = Math.round(percent);
        _("status").innerHTML = Math.round(percent) + "% subido... espere un momento";
        //document.getElementById('flagFoto').value = 1;
    }
    
    function completeHandler(event) {
        _("status").innerHTML = event.target.responseText;
        _("progressBar").value = 100; //wil clear progress bar after successful upload
        _("file").style.display='none';
        _("progressBar").style.display='none';
        // document.getElementById('registroDoc'+doc).disabled = true;
        // document.getElementById('registroDoc'+doc).setAttribute('style','color: #59c965');
        // document.getElementById('profile').setAttribute('src','assets/docs_expedientes/photos/photosarchivo_'+idUsr+'.*');
        // document.getElementById('btnModal'+doc).disabled = true;
        // $(".bloqueo"+doc).attr("disabled", true);
        //buscarPhoto(idUsr);
    }
    
    function errorHandler(event) {
        _("status").innerHTML = "Fallo en la subida";
    }
    
    function abortHandler(event) {
        _("status").innerHTML = "Fallo en la subida";
    }
}

function fotoUpload() {
    var idUsr = document.getElementById('curp_exp').value;
    var file = _("file").files[0];
    var idUsuario = idUsr;
    var formdata = new FormData();
    // variable del name file
    formdata.append("file", file);
    // variables post
    // formdata.append("documento", documento);
    formdata.append("idUsuario", idUsuario);
    var ajax = new XMLHttpRequest();
    ajax.upload.addEventListener("progress", progressHandler, false);
    ajax.addEventListener("load", completeHandler, false);
    ajax.addEventListener("error", errorHandler, false);
    ajax.addEventListener("abort", abortHandler, false);
    ajax.open("POST", "prcd/upload_photo.php"); 
    
    ajax.send(formdata);
    
    function progressHandler(event) {

        _("loaded_n_total").innerHTML = "Cargado " + event.loaded + " bytes de " + event.total;
        var percent = (event.loaded / event.total) * 100;
        _("progressBar").value = Math.round(percent);
        _("status").innerHTML = Math.round(percent) + "% subido... espere un momento";
        //document.getElementById('flagFoto').value = 3;
    }
    
    function completeHandler(event) {
        _("status").innerHTML = event.target.responseText;
        _("progressBar").value = 100; //wil clear progress bar after successful upload
        _("file").style.display='none';
        _("progressBar").style.display='none';
        // document.getElementById('registroDoc'+doc).disabled = true;
        // document.getElementById('registroDoc'+doc).setAttribute('style','color: #59c965');
        // document.getElementById('profile').setAttribute('src','assets/docs_expedientes/photos/photosarchivo_'+idUsr+'.*');
        // document.getElementById('btnModal'+doc).disabled = true;
        // $(".bloqueo"+doc).attr("disabled", true);
        
    }
    
    function errorHandler(event) {
        _("status").innerHTML = "Fallo en la subida";
    }
    
    function abortHandler(event) {
        _("status").innerHTML = "Fallo en la subida";
    }
}

var loadFile = function(event) {
    var output = document.getElementById('profile');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
};

function ValidaSoloNumeros() {
    if ((event.keyCode < 48) || (event.keyCode > 57)) 
        event.returnValue = false;
}

function semana(){
    var semanaFull = document.getElementById("semanaCheck");

    if (semanaFull.checked){
        document.getElementById("Lunes").checked = true;
        document.getElementById("Martes").checked = true;
        document.getElementById("Miercoles").checked = true;
        document.getElementById("Jueves").checked = true;
        document.getElementById("Viernes").checked = true;
        document.getElementById("Sabado").checked = true;
        document.getElementById("Domingo").checked = true;
    } else {
        document.getElementById("Lunes").checked = false;
        document.getElementById("Martes").checked = false;
        document.getElementById("Miercoles").checked = false;
        document.getElementById("Jueves").checked = false;
        document.getElementById("Viernes").checked = false;
        document.getElementById("Sabado").checked = false;
        document.getElementById("Domingo").checked = false;
    }
}

function semanaCheck(){
    var lunes = document.getElementById("Lunes");
    var martes = document.getElementById("Martes");
    var miercoles = document.getElementById("Miercoles");
    var jueves = document.getElementById("Jueves");
    var viernes = document.getElementById("Viernes");
    var sabado = document.getElementById("Sabado");
    var domingo = document.getElementById("Domingo");

    if (lunes.checked && martes.checked && miercoles.checked && jueves.checked && viernes.checked && sabado.checked && domingo.checked){
        document.getElementById("semanaCheck").checked = true;
    } else {
        document.getElementById("semanaCheck").checked = false;
    }
}

function habilitaInputs(){
    var descuentoOp = document.getElementById("descuentoOp");
    var productoGratisOp = document.getElementById("productoGratisOp");
    var promoDiaOp = document.getElementById("promoDiaOp");
    var promoOtraOp = document.getElementById("promoOtraOp");

    if (descuentoOp.checked){
        document.getElementById("descuento").disabled = false;
    } else {
        document.getElementById("descuento").disabled = true;
    }
    
    if (productoGratisOp.checked) {
        document.getElementById("productoGratis").disabled = false;
    } else {
        document.getElementById("productoGratis").disabled = true;
    }
    
    if (promoDiaOp.checked) {
        document.getElementById("promoDia").disabled = false;
    } else {
        document.getElementById("promoDia").disabled = true;
    }

    if (promoOtraOp.checked) {
        document.getElementById("promoOtra").disabled = false;
    } else {
        document.getElementById("promoOtra").disabled = true;
    }
}

function concatenadoDias(){
    var lunes = document.getElementById("Lunes");
    var martes = document.getElementById("Martes");
    var miercoles = document.getElementById("Miercoles");
    var jueves = document.getElementById("Jueves");
    var viernes = document.getElementById("Viernes");
    var sabado = document.getElementById("Sabado");
    var domingo = document.getElementById("Domingo");
    var dias = "";

    if (lunes.checked){
        var lunes = "Lunes, ";
    } else{
        var lunes = "";
    }
    
    if (martes.checked){
        var martes = "Martes, ";
    } else {
        var martes = "";
    } 

    if (miercoles.checked){
        var miercoles = "Miercoles, ";
    } else {
        var miercoles = "";
    }
    
    if (jueves.checked){
        var jueves = "Jueves, ";
    } else {
        var jueves = "";
    }
    
    if (viernes.checked){
        var viernes = "Viernes, ";
    } else {
        var viernes = "";
    }
    
    if (sabado.checked){
        var sabado = "Sabado, ";
    } else {
        var sabado = "";
    }
    
    if (domingo.checked){
        var domingo = "Domingo, ";
    } else {
        var domingo = "";
    }

    dias = lunes + martes + miercoles + jueves + viernes + sabado + domingo;
    dias = dias.slice(0, -2);
    document.getElementById("concatenadoDias").value = dias;
}