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