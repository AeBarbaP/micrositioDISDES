function queryEmpresas(){
    $.ajax({
        type: "POST",
        url: "query/query_empresas.php",
        dataType: "html",
        success: function(data) {
            $('#selectEmpresas').fadeIn(1000).html(data)
        }
    });
}

// modal abrir 
function abrirEmpresa(id){    
    $.ajax({
        type: "POST",
        url: "query/query_datos_empresas.php",
        data:{
            id:id
        },
        dataType: "json",
        success: function(data) {
            var jsonData = JSON.parse(JSON.stringify(data));
            var success = jsonData.success;
            var nombre = jsonData.nombre;
            var rfc = jsonData.rfc;
            var celular = jsonData.celular;
            var calle = jsonData.calle;
            var num_ext = jsonData.num_ext;
            var colonia = jsonData.colonia;
            var municipio = jsonData.municipio;
            var estado = jsonData.estado;
            var zip_code = jsonData.zip_code;
            var descuento = jsonData.descuento;
            var ubicacionMaps = jsonData.ubicacionMaps;
            var link = jsonData.link;

            if(success == 1){
                document.getElementById('nombre').innerText = nombre; 
                document.getElementById('rfc').innerText = rfc; 
                document.getElementById('celular').innerText = celular; 
                document.getElementById('wa').setAttribute('href','https://wa.me/52'+celular); 
                document.getElementById('calle').innerText = calle; 
                document.getElementById('num_ext').innerText = num_ext; 
                document.getElementById('colonia').innerText = colonia; 
                document.getElementById('municipio').innerText = municipio; 
                document.getElementById('estado').innerText = estado; 
                document.getElementById('zip_code').innerText = zip_code; 
                document.getElementById('descuento').innerText = descuento;
                document.getElementById('ubicacionMaps').innerHTML = ubicacionMaps; 
                document.getElementById('link').innerText = link;
                document.getElementById('link3').setAttribute('href',link);
                $('#datosEmpresa').modal('show'); 
            }
            else{
                console.log('No hay datos');
            }
        }
    });
    
}

// módulo para admin
function queryAdmin(){
    $.ajax({
        type: "POST",
        url: "query/query_admin_empresas.php",
        dataType: "html",
        success: function(data) {
            $('#selectEmpresas').fadeIn(1000).html(data)
        }
    });
}

// abrir modal eliminar
function modalEliminar(id){
    $('#modalEliminar').modal('show');
    document.getElementById('btnEliminar').setAttribute('onclick','queryEliminarEmpresa('+id+')');
}

// eliminar empresa
function queryEliminarEmpresa(id){
    $.ajax({
        type: "POST",
        url: "prcd/proceso_eliminar_empresa.php",
        data:{
            id:id
        },
        dataType: "json",
        success: function(data) {
            var jsonData = JSON.parse(JSON.stringify(data));
            var success = jsonData.success;
            if(success == 1){
                $('#modalEliminar').modal('hidde');
                alert("Empresa eliminada");
            }
            else{
                alert('Empresa no eliminada');
            }
        }
    });
}
// modal abrir 
function editarEmpresa(id){    
    $.ajax({
        type: "POST",
        url: "query/query_datos_empresas.php",
        data:{
            id:id
        },
        dataType: "json",
        success: function(data) {
            var jsonData = JSON.parse(JSON.stringify(data));
            var success = jsonData.success;
            var nombre = jsonData.nombre;
            var rfc = jsonData.rfc;
            var celular = jsonData.celular;
            var calle = jsonData.calle;
            var num_ext = jsonData.num_ext;
            var colonia = jsonData.colonia;
            var municipio = jsonData.municipio;
            var estado = jsonData.estado;
            var zip_code = jsonData.zip_code;
            var descuento = jsonData.descuento;
            var ubicacionMaps = jsonData.ubicacionMaps;
            var link = jsonData.link;

            if(success == 1){
                document.getElementById('nombre').value = nombre; 
                document.getElementById('rfc').value = rfc; 
                document.getElementById('celular').value = celular; 
                document.getElementById('calle').value = calle; 
                document.getElementById('num_ext').value = num_ext; 
                document.getElementById('colonia').value = colonia; 
                document.getElementById('municipio').value = municipio; 
                document.getElementById('estado').value = estado; 
                document.getElementById('zip_code').value = zip_code; 
                document.getElementById('descuento').value = descuento;
                document.getElementById('ubicacionMaps').value = ubicacionMaps; 
                document.getElementById('link').value = link;
                document.getElementById('btnEditar').setAttribute('onclick','edicionEmpresa('+id+')');
                $('#datosEmpresaEditar').modal('show'); 
            }
            else{
                console.log('No hay datos');
            }
        }
    });
    
}

function edicionEmpresa(id){
    var nombre = document.getElementById('nombre').value; 
    var rfc = document.getElementById('rfc').value; 
    var celular = document.getElementById('celular').value; 
    var calle = document.getElementById('calle').value; 
    var num_ext = document.getElementById('num_ext').value; 
    var colonia = document.getElementById('colonia').value; 
    var municipio = document.getElementById('municipio').value; 
    var estado = document.getElementById('estado').value; 
    var zip_code = document.getElementById('zip_code').value; 
    var descuento = document.getElementById('descuento').value;
    var ubicacionMaps = document.getElementById('ubicacionMaps').value; 
    var link = document.getElementById('link').value;

    $.ajax({
        type: "POST",
        url: "prcd/proceso_editar_empresa.php",
        data:{
            id:id,
            nombre:nombre,
            rfc:rfc,
            celular:celular,
            calle:calle,
            num_ext:num_ext,
            colonia:colonia,
            municipio:municipio,
            estado:estado,
            zip_code:zip_code,
            descuento:descuento,
            ubicacionMaps:ubicacionMaps,
            link:link
        },
        dataType: "json",
        success: function(data) {
            var jsonData = JSON.parse(JSON.stringify(data));
            var success = jsonData.success;
            if(success == 1){
                alert("Empresa editada");
                queryAdmin();
            }
            else{
                alert("No se editó la empresa");
            }
        }
    }); 
}

// query para empresas para agregar familiares
function queryUsers(){
    $.ajax({
        type: "POST",
        url: "query/query_usuarios.php",
        dataType: "html",
        success: function(data) {
            $('#selectEmpresas').fadeIn(1000).html(data)
        }
    });
}

function selectCategorias(){
    $.ajax({
        type:"POST",
        url:"query/query_cat_categorias.php",
        dataType: "html",
        success: function(data){
            $('#categoria').fadeIn(1000).html(data)
            
            }
        
        });
}
function fotosAsociados(){
    $.ajax({
        type:"POST",
        url:"query/query_fotos_empresas.php",
        dataType: "html",
        success: function(data){
            $('#galery').fadeIn(1000).html(data)
            
            }
        
        });
}