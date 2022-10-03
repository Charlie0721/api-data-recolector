const express = require('express');
const router = express.Router();


//Traer almacenes 

router.get('/traslados/recolector-traslados/almacenes/:userId', async (req, res) => {

  try {

    let userId = req.params.userId
    var item = Conexiones_API.filter(function (r) {
      return r.userId == userId
    })[0];

    if (typeof item !== "undefined") {
      await item.connection.query(`SELECT idalmacen, nomalmacen
            FROM almacenes WHERE activo = 1;`,

        (err, rows, fields) => {

          if (err) throw err;
          res.status(200).json({
            status: 200,
            message: 'Almacenes encontrados',
            rows
          })

        });

    } else {
      console.log("Sin informacion")
    }

  } catch (error) {
    console.log(error)

  }

});


router.post('/api/busca-productos/recolector-traslados/:userId', async (req, res) => {
  try {

    let userId = req.params.userId
    let CodigoBarras= req.body.barcode
    var item = Conexiones_API.filter(function (r) {

      return r.userId == userId
    })[0];
    if (typeof item !== "undefined") {
    

      await item.connection.query(`SELECT descripcion, precioventa, barcode FROM productos WHERE barcode =${CodigoBarras}`, (err, rows, fields) => {
        if (err) throw err;
        if (rows.length > 0) {

          res.status(200).json({
            status: 200,
            message: 'Producto encontrados satisfactoriamente',
            rows,
            CodigoBarras
          })

        } else {
          res.status(401).json({
            status: 401,
            message: 'Producto no encontrado en la base de datos'

          })
        }

      })

    }

  } catch (error) {
    console.log(error)
    res.status(400).json({
      message: error
    })
  }


})


module.exports = router;