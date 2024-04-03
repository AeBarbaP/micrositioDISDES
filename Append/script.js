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
    var calle = document.getElementById("calle").value;
    var numExt = document.getElementById("numExt").value;
    var numInt = document.getElementById("numInt").value;
    var colonia = document.getElementById("colonia").value;
    var cp = document.getElementById("cp").value;
    var localidad = document.getElementById("localidad").value;
    var municipio = document.getElementById("municipio").value;
    var estado = document.getElementById("estado").value;
    var descuento = document.getElementById("descuento").value;
    var categoria = document.getElementById("categoria").value;
    var userName = document.getElementById("userName").value;
    var pdw = document.getElementById("pdw").value;

    if (nombre == "" || rfc == "" || regimen == "" || contacto == "" || celular == "" || telefono == "" || email == "" || categoria == "" || calle == "" || numExt == "" || numInt == "" || colonia == "" || cp == "" || localidad == "" || municipio == "" || estado == "" || descuento == "" || userName == "" || pdw == "") {

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
            categoria:categoria,
            calle:calle,
            numExt:numExt,
            numInt:numInt,
            colonia:colonia,
            cp:cp,
            localidad:localidad,
            municipio:municipio,
            estado:estado,
            descuento:descuento,
            userName:userName,
            pdw:pdw
        },
        dataType: "json",
        success: function(data){
            var jsonData = JSON.parse(JSON.stringify(data));
            var success = jsonData.success;
            
            if (success == 1) {
                Swal.fire({
                    icon: 'success',
                    title: 'Empresa agregada',
                    text: 'Proceso exitoso',
                    confirmButtonColor: "#0d6efd",
                    footer: 'INCLUSIÓN'
                });
                colaboradoresDashboard();
                $('#agregarUser').modal('hide'); 
  
            } else if (success == 0){
                Swal.fire({
                    icon: 'success',
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

        _("loaded_n_total"+doc).innerHTML = "Cargado " + event.loaded + " bytes de " + event.total;
        var percent = (event.loaded / event.total) * 100;
        _("progressBar"+doc).value = Math.round(percent);
        _("status"+doc).innerHTML = Math.round(percent) + "% subido... espere un momento";
        document.getElementById('flagFoto').value = 1;
    }
    
    function completeHandler(event) {
        _("status"+doc).innerHTML = event.target.responseText;
        _("progressBar"+doc).value = 100; //wil clear progress bar after successful upload
        _("file"+doc).style.display='none';
        _("progressBar"+doc).style.display='none';
        // document.getElementById('registroDoc'+doc).disabled = true;
        // document.getElementById('registroDoc'+doc).setAttribute('style','color: #59c965');
        // document.getElementById('profile').setAttribute('src','assets/docs_expedientes/photos/photosarchivo_'+idUsr+'.*');
        // document.getElementById('btnModal'+doc).disabled = true;
        // $(".bloqueo"+doc).attr("disabled", true);
        buscarPhoto(idUsr);
    }
    
    function errorHandler(event) {
        _("status"+doc).innerHTML = "Fallo en la subida";
    }
    
    function abortHandler(event) {
        _("status"+doc).innerHTML = "Fallo en la subida";
    }
}

function fotoUpload() {
    var doc = "_photo";
    var idUsr = document.getElementById('curp_exp').value;
    var file = _("file"+doc).files[0];
    var documento = doc;
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

        _("loaded_n_total"+doc).innerHTML = "Cargado " + event.loaded + " bytes de " + event.total;
        var percent = (event.loaded / event.total) * 100;
        _("progressBar"+doc).value = Math.round(percent);
        _("status"+doc).innerHTML = Math.round(percent) + "% subido... espere un momento";
        document.getElementById('flagFoto').value = 3;
    }
    
    function completeHandler(event) {
        _("status"+doc).innerHTML = event.target.responseText;
        _("progressBar"+doc).value = 100; //wil clear progress bar after successful upload
        _("file"+doc).style.display='none';
        _("progressBar"+doc).style.display='none';
        // document.getElementById('registroDoc'+doc).disabled = true;
        // document.getElementById('registroDoc'+doc).setAttribute('style','color: #59c965');
        // document.getElementById('profile').setAttribute('src','assets/docs_expedientes/photos/photosarchivo_'+idUsr+'.*');
        // document.getElementById('btnModal'+doc).disabled = true;
        // $(".bloqueo"+doc).attr("disabled", true);
        buscarPhoto(idUsr);
    }
    
    function errorHandler(event) {
        _("status"+doc).innerHTML = "Fallo en la subida";
    }
    
    function abortHandler(event) {
        _("status"+doc).innerHTML = "Fallo en la subida";
    }
}