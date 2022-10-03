const { text } = require('body-parser');
const express = require('express');
const mysql = require('mysql');

const router = express.Router();

router.get('/informes/precios-modificados-compras', async (req, res) => {

  res.render('compras/preciosModificados')


});


router.post('/compras/preciosModificados', async (req, res) => {

  let fecha1 = req.body.fechaIni;
  let fecha2 = req.body.fechaFin;

  let fechaNueva1 = fecha1;
  let fechaNueva2 = fecha2;

  fechaNueva1 = fechaNueva1.replace(/-/ig, '');
  fechaNueva2 = fechaNueva2.replace(/-/ig, '');


  await connection.query('SELECT a.idproducto, c.descripcion, c.codigo, c.barcode, precioalm(c.idproducto, 1, 1) AS precioventa, precioalm(c.idproducto, 1, 2) AS precioespecial1, c.referencia ' +
    'FROM detcompras a ' +
    'LEFT JOIN compras b ON (a.idcompra = b.idcompra) ' +
    'LEFT JOIN productos c ON (a.idproducto = c.idproducto) ' +
    'WHERE b.estado = 0 AND b.aprobada = 1 AND b.tipocompra = 1 AND b.fecha BETWEEN ' + fechaNueva1 + ' AND ' + fechaNueva2 + ' AND a.modiprecio = 1 ' +
    'GROUP BY a.idproducto ', (err, rows, fields) => {


      if (!err) {
        if (rows.length > 0) {
          res.render('compras/NewVistaPreciosEditados', {
            data: rows



          });

        } else {

          req.flash('success', 'el rango de fechas no coincide', 'verifique');

          res.redirect('/informes/precios-modificados-compras');

        }

      } else {

        console.log(err);
      }
    });

});





module.exports = router;


