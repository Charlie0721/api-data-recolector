var fechaActual = new Date();

if(fechaActual.getMonth()+1 <10){
    var ActualFecha =  fechaActual.getFullYear() +'-'+ '0'+''+ (fechaActual.getMonth() + 1)+'-' +  fechaActual.getDate();
}else{

    var ActualFecha =  fechaActual.getFullYear() +'-'+ (fechaActual.getMonth() + 1)+'-' +  fechaActual.getDate();


}


document.getElementById('fechaact').value = ActualFecha;
