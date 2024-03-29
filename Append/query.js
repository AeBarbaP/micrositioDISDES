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