const express = require('express');
const router = express.Router();

router.get('/recolectordeCompras/:userId', async (req, res) => {

  try {
    let userId = req.params.userId
    var item = Conexiones_API.filter(function (r) {


      return r.userId == userId
    })[0];

    if (typeof item !== "undefined") {
      await item.connection.query(`SELECT iva.codiva, iva.nombre, iva.porcentaje
      FROM iva`, (err, rows, fields) => {
        if (err) throw err;
        if (rows.length > 0) {

          if (err) throw err;
          res.status(200).json({
            status: 200,
            message: 'Datos de Iva encontrados',
            rows
          })

        }

      })

    }

  } catch (error) {
    console.log(error)
  }

});


module.exports = router;