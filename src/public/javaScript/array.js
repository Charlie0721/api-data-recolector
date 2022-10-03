

function arreglo(barras, cantidad) {
  this.barras = barras;
  this.cantidad = cantidad;

}

var textos = [];
function obtenerCantidad() {

  var obtenerC = document.getElementById("existenc").value;
  obtenerC = parseInt(obtenerC);

  return obtenerC;

}
function obtenerBarras() {

  var obtenerB = document.getElementById("barras").value;
  obtenerB = obtenerB.toString();
  return obtenerB;

}


function crearDatos() {

  if (obtenerCantidad() === "" || obtenerCantidad() === null || obtenerCantidad() === NaN || obtenerBarras() === "" ||
    obtenerBarras() === 0 || obtenerBarras() === null) {


    swal("Error!", "Los campos deben ser diligenciados ", "error");
    return false;

  } else {


    var dat = new arreglo(obtenerBarras(), obtenerCantidad());
    textos.push(dat);
    mostrarListado();
  }
}

function mostrarListado() {
  var lista = '';
  for (var i = 0; i < textos.length; i++) {
    lista += '' + textos[i].barras +
      ',' + textos[i].cantidad +
      '\n';

    document.getElementById("barras").value = '';
    document.getElementById("existenc").value = '';
  }
  document.getElementById('dataArr').value = lista;
 
 
  PonerFocus();
}

function PonerFocus() {
  document.getElementById("barras").focus();
  
}


