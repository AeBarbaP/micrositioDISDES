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

    var userName = document.getElementById("userName").value;
    var pdw = document.getElementById("pdw").value;

  
    if (nombre == "" || rfc == "" || regimen == "" || contacto == "" || celular == "" || telefono == "" || email == "" || calle == "" || numExt == "" || numInt == "" || colonia == "" || cp == "" || localidad == "" || municipio == "" || estado == "" || descuento == "" || userName == "" || pdw == "") {

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