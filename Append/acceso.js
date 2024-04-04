function login() {

    var username = document.getElementById("user").value;
    var pwd = document.getElementById("pwd").value;

    $.ajax({
        type:"POST",
        url:"query/query_acceso.php",
        data:{
            username: username,
            pwd:pwd
        },
        dataType: "json",
        success: function(data){
            var jsonData = JSON.parse(JSON.stringify(data));
            var perfil = jsonData.perfil;
            
            if (perfil == 1) {
                Swal.fire({
                    icon: 'success',
                    title: 'Acceso correcto',
                    text: 'Bienvenido Superadmin',
                    confirmButtonColor: "#0d6efd",
                    footer: 'INCLUSIÓN'
                });
                colaboradoresDashboard();
                $('#agregarUser').modal('hide'); 
  
            }
            if (perfil == 2) {
                Swal.fire({
                    icon: 'success',
                    title: 'Acceso correcto',
                    text: 'Bienvenido Editor',
                    confirmButtonColor: "#0d6efd",
                    footer: 'INCLUSIÓN'
                });
                colaboradoresDashboard();
                $('#agregarUser').modal('hide'); 
  
            }
            if (success == 3) {
                Swal.fire({
                    icon: 'success',
                    title: 'Acceso correcto',
                    text: 'Bienvenido Perfil Empresa',
                    confirmButtonColor: "#0d6efd",
                    footer: 'INCLUSIÓN'
                });
                colaboradoresDashboard();
                $('#agregarUser').modal('hide'); 
  
            }
            else if (success == 0){
                Swal.fire({
                    icon: 'success',
                    title: 'Usuario incorrecto',
                    text: 'Proceso no exitoso',
                    footer: 'INCLUSIÓN'
                });
            }
        }

    });
}