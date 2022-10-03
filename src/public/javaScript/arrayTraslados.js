
function arreglo(idAlm1,idAlm2, barcode,cantidad) {
    
    this.idAlm1=idAlm1
    this.idAlm2=idAlm2;
    this.barcode = barcode;
    this.cantidad= cantidad;
    
  
  }
  
  var textos = [];
  function obteneridAlm1() {
  
    var obteneridAlm1 = document.getElementById("alm1").value;
    obteneridAlm1 = parseInt(obteneridAlm1);
  
    return obteneridAlm1;
  
  }
  function obteneridAlm2() {
  
    var obteneridAlm2 = document.getElementById("alm2").value;
    obteneridAlm2 = parseInt(obteneridAlm2);
  
    return obteneridAlm2;
  
  }
 
  function obtenerBarras() {
  
    var obtenerB = document.getElementById("barras").value;
    obtenerB = obtenerB.toString();
    return obtenerB;
  
  }
  function obtenerCantidad() {
  
    var obtenerC = document.getElementById("cantidad").value;
    obtenerC = parseInt(obtenerC);
  
    return obtenerC;
  
  }
  function crearDatos() {
  
    if (obtenerCantidad() === "" || obtenerCantidad() === null || obtenerCantidad() === NaN || obtenerBarras() === "" ||
      obtenerBarras() === 0 || obtenerBarras() === null || obteneridAlm1()==="" || obteneridAlm2()==='') {
  
  
      swal("Error!", "Los campos deben ser diligenciados ", "error");
      return false;
  
    } if(obteneridAlm1()===obteneridAlm2()){
      swal("Atención!", "No puede enviar traslados al mismo almacén", "info");
      return false;
    } else {
  
  
      var dat = new arreglo(obteneridAlm1(), obteneridAlm2(), obtenerBarras(), obtenerCantidad());
      textos.push(dat);
      mostrarListado();
    }
  }
  
  function mostrarListado() {
    var lista = '';
    for (var i = 0; i < textos.length; i++) {
      lista += '' + textos[i].idAlm1 +
        ',' + textos[i].idAlm2 + 
        ',' + textos[i].barcode + ','+ textos[i].cantidad+ 
        '\n';
  
      document.getElementById("barras").value = '';
      document.getElementById("cantidad").value = '';
     
    }
    document.getElementById('dataArrTraslados').value = lista;
   
   
    PonerFocus();
  }
  
  function PonerFocus() {
    document.getElementById("barras").focus();
    
  }
  

  