//primera tabla

$(document).ready(function () {
    $('#tabla1').DataTable({



        "language": {

            "url": "https://cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
        },


    });
});



//Segunda tabla
$(document).ready(function () {
    $('#tabla2').DataTable({
        "lengthMenu": [
            [3, 5, 10, 25, 50, -1],
            [3, 5, 10, 25, 50, "All"]
        ],
        responsive: true,
        "language": {

            "url": "https://cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
        },


    });
});

//Tercera editar productos
$(document).ready(function () {
    $('#tabla3').DataTable({
        "lengthMenu": [
            [20, 50, 100, -1],
            [20, 50, 100, "All"]
        ],
        responsive: true,
        "language": {

            "url": "https://cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
        },


    });

});

//Cuarta tabla
$(document).ready(function () {
    $('#tabla4').DataTable({
        "lengthMenu": [
            [10, 25, 50, 100, -1],
            [10, 25, 50, 100, "All"]
        ],
        responsive: true,
        "language": {

            "url": "https://cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
        },


    });
});

//Quinta tabla



$(document).ready(function () {
    $('#tabla5').DataTable({
        "lengthMenu": [
            [3, 5, 10, 25, 50, -1],
            [3, 5, 10, 25, 50, "All"]
        ],
        responsive: true,
        "language": {

            "url": "https://cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
        },


    });
});


//Sexta tabla



$(document).ready(function () {
    $('#tabla6').DataTable({
        "lengthMenu": [
            [10, 25, 50, -1],
            [10, 25, 50, "All"]
        ],
        responsive: true,
        "language": {

            "url": "https://cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
        },


    });
});





//Septima tabla facturas 

$(document).ready(function () {
    $('#tabla7').DataTable({
        "lengthMenu": [
            [10, 25, 50, -1],
            [10, 25, 50, "All"]
        ],
        responsive: true,
        "language": {

            "url": "https://cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
        },


    });
});


//Octava tabla detalle de facturas



$(document).ready(function () {
    // Creamos la DataTable
    var table = $('#tabla8').DataTable({
        "lengthMenu": [
            [50, -1],
            [50, "All"]
        ],
        responsive: true,
        "language": {

            "url": "https://cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
        },
    });

    // Creamos el gráfico con los datos iniciales    
    var container = $('#contenedor');
    var chart = Highcharts.chart(container[0], {
        chart: {
            type: 'pie',
        },
        title: {
            text: 'Productos Vendidos',
        },
        series: [
            {
                data: chartData(table),
            },
        ],
    });

    // En cada seleccion de filtro, actualiza los datos en el gráfico.
    table.on('draw', function () {
        chart.series[0].setData(chartData(table));
    });
    //funcion chartData
    function chartData(table) {
        var filasAfectadas = {};
        // Contamos el número de entradas para cada puesto (Puesto) 
        // columna 1 = [0=nombre, 1=puesto, 2=pais]
        table.column(4, { search: 'applied' }).data().each(function (val) {
            if (filasAfectadas[val]) {
                filasAfectadas[val] += 1;
            } else {
                filasAfectadas[val] = 1;
            }
        });

        // Y mapeamos al formato que usa highcharts
        //usamos la funcion $map de jquery 
        //$.map(array, function(value, index){});

        return $.map(filasAfectadas, function (cantidad, clave) {
            console.log(filasAfectadas); //nos muestra la cantidad filas seleccionadas
            //console.log("clave: "+clave+" cantidad: "+cantidad);
            return {
                name: clave,
                y: cantidad,
            };

        });
    }
});



// 9 tabla de arqueos caja 

$(document).ready(function () {
    $('#tabla9').DataTable({
        "lengthMenu": [
            [3, 5, 10, 25, 50, -1],
            [3, 5, 10, 25, 50, "All"]
        ],
        responsive: true,
        "language": {

            "url": "https://cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
        },


    });
});

// 10 tabla de pedidos comerciales 

$(document).ready(function () {
    $('#tabla10').DataTable({
        "lengthMenu": [
            [15, 25, 50, -1],
            [15, 25, 50, "All"]
        ],
        responsive: true,
        "language": {

            "url": "https://cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
        },


    });
});




$(document).ready(function () {
    // Creamos la DataTable
    var table = $('#tabla11').DataTable({

        responsive: true,
        "language": {

            "url": "https://cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
        },
    });

    // Creamos el gráfico con los datos iniciales    
    var container = $('#contenedor');
    var chart = Highcharts.chart(container[0], {
        chart: {
            type: 'pie',
        },
        title: {
            text: 'Productos Vendidos',
        },
        series: [
            {
                data: chartData(table),
            },
        ],
    });

    // En cada seleccion de filtro, actualiza los datos en el gráfico.
    table.on('draw', function () {
        chart.series[0].setData(chartData(table));
    });
    //funcion chartData
    function chartData(table) {
        var filasAfectadas = {};
        // Contamos el número de entradas para cada puesto (Puesto) 
        // columna 1 = [0=nombre, 1=puesto, 2=pais]
        table.column(4, { search: 'applied' }).data().each(function (val) {
            if (filasAfectadas[val]) {
                filasAfectadas[val] += 1;
            } else {
                filasAfectadas[val] = 1;
            }
        });

        // Y mapeamos al formato que usa highcharts
        //usamos la funcion $map de jquery 
        //$.map(array, function(value, index){});

        return $.map(filasAfectadas, function (cantidad, clave) {
            console.log(filasAfectadas); //nos muestra la cantidad filas seleccionadas
            //console.log("clave: "+clave+" cantidad: "+cantidad);
            return {
                name: clave,
                y: cantidad,
            };

        });
    }
});


// tabla 12 
$(document).ready(function () {
    $('#tabla12').DataTable({
        "lengthMenu": [
            [3, 5, 10, 25, 50, -1],
            [3, 5, 10, 25, 50, "All"]
        ],
        responsive: true,
        "language": {

            "url": "https://cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
        },


    });
});


// TABLA 13
$(document).ready(function () {
    $('#tabla13').DataTable({
        "lengthMenu": [
            [5, 10, 25, 50, -1],
            [5, 10, 25, 50, "All"]
        ],
        responsive: true,
        "language": {

            "url": "https://cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
        },


    });
});

//kardex resumido
$(document).ready(function () {
    $('#tabla18').DataTable({
        "lengthMenu": [
            [50, 100, -1],
            [50, 100, "All"]
        ],
        responsive: true,
        "language": {

            "url": "https://cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
        },


    });

});



//TABLA 14 TODAS LAS COMPRAS

$(document).ready(function () {
    $('#tabla14').DataTable({
        "lengthMenu": [
            [10, 25, 50, -1],
            [10, 25, 50, "All"]
        ],
        responsive: true,
        "language": {

            "url": "https://cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
        },


    });
});


$(document).ready(function () {
    // Creamos la DataTable
    var table = $('#tabla15').DataTable({
        "lengthMenu": [
            [50, -1],
            [50, "All"]
        ],
        responsive: true,
        "language": {

            "url": "https://cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
        },
    });

    // Creamos el gráfico con los datos iniciales    
    var container = $('#contenedor');
    var chart = Highcharts.chart(container[0], {
        chart: {
            type: 'pie',
        },
        title: {
            text: 'Productos Comprados',
        },
        series: [
            {
                data: chartData(table),
            },
        ],
    });


    table.on('draw', function () {
        chart.series[0].setData(chartData(table));
    });

    function chartData(table) {
        var filasAfectadas = {};

        table.column(4, { search: 'applied' }).data().each(function (val) {
            if (filasAfectadas[val]) {
                filasAfectadas[val] += 1;
            } else {
                filasAfectadas[val] = 1;
            }
        });



        return $.map(filasAfectadas, function (cantidad, clave) {
            console.log(filasAfectadas);
            return {
                name: clave,
                y: cantidad,
            };

        });
    }
});





//Tabla 16 info ventas acumulado


$(document).ready(function () {
    $('#tabla16').DataTable({
        "lengthMenu": [
            [31, 50, -1],
            [31, 50, "All"]
        ],
        responsive: true,
        "language": {

            "url": "https://cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
        },


    });
});



//Edit products

$(document).ready(function () {
    $('#tabla19').DataTable({
        "lengthMenu": [
            [10, 25, 50, -1],
            [10, 25, 50, "All"]
        ],
        responsive: true,
        "language": {

            "url": "https://cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
        },


    });
});


//Tabla Usuarios


$(document).ready(function () {
    $('#tabla20').DataTable({
        "lengthMenu": [
            [10, 25, 50, -1],
            [10, 25, 50, "All"]
        ],
        responsive: true,
        "language": {

            "url": "https://cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
        },


    });
});
