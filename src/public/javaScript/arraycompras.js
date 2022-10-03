
function arreglo(nit, docprov,fecha,barcode,cantidad,codiva,costo,precio) {
    this.nit= nit;
    this.docprov = docprov;
    this.fecha= fecha;
    this.barcode = barcode;
    this.cantidad= cantidad;
    this.codiva = codiva;
    this.costo= costo;
    this.precio = precio;
  
  }
  
  var textos = [];
  function obtenerNit() {
  
    var obtenerN = document.getElementById("nit").value;
    obtenerN = parseInt(obtenerN);
  
    return obtenerN;
  
  }
  function obtenerDocProv() {
  
    var obtenerDP = document.getElementById("documentoProvee").value;
    obtenerDP = parseInt(obtenerDP);
    return obtenerDP;
  
  }
  
  function obtenerFecha() {
  
    var obtenerF = document.getElementById("fecha").value;
    obtenerF = obtenerF.toString()
  
    return obtenerF;
  
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
  function obtenerCodiva() {
  
    var obtenerCI = document.getElementById("codIva").value;
    obtenerCI = obtenerCI.toString();
    return obtenerCI;
  
  }
  function obtenerCosto() {
  
    var obtenerCos = document.getElementById("costo").value;
    obtenerCos = parseFloat(obtenerCos);
  
    return obtenerCos;
  
  }
  function obtenerPrecio() {
  
    var obtenerP = document.getElementById("precio").value;
    obtenerP = parseFloat(obtenerP);
  
    return obtenerP;
  
  }


  
  function crearDatos() {
  
    if (obtenerCantidad() === "" || obtenerCantidad() === null || obtenerCantidad() === NaN || obtenerBarras() === "" ||
      obtenerBarras() === 0 || obtenerBarras() === null || obtenerNit()==="" || obtenerPrecio()==='') {
  
  
      swal("Error!", "Los campos deben ser diligenciados ", "error");
      return false;
  
    } else {
  
  
      var dat = new arreglo(obtenerNit(), obtenerDocProv(), obtenerFecha(), obtenerBarras(), obtenerCantidad(), obtenerCodiva(), obtenerCosto(), obtenerPrecio());
      textos.push(dat);
      mostrarListado();
    }
  }
  
  function mostrarListado() {
    var lista = '';
    for (var i = 0; i < textos.length; i++) {
      lista += '' + textos[i].nit +
        ',' + textos[i].docprov +  ',' + textos[i].fecha + 
        ',' + textos[i].barcode + ','+ textos[i].cantidad+ 
        ','+ textos[i].codiva + ','+ textos[i].costo +
        ','+ textos[i].precio+
        '\n';
  
      document.getElementById("barras").value = '';
      document.getElementById("cantidad").value = '';
      document.getElementById("codIva").value = '';
      document.getElementById("costo").value = '';
      document.getElementById("precio").value = '';
    }
    document.getElementById('dataArrCompra').value = lista;
   
   
    PonerFocus();
  }
  
  function PonerFocus() {
    document.getElementById("barras").focus();
    
  }
  
  
  