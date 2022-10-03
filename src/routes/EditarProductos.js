const { text } = require('body-parser');
const express = require('express');
const mysql = require('mysql');

const router = express.Router();

router.get('/obtener/obtener-productos',  async (req, res) => {

    await connection.query('SELECT productos.idproducto, productos.barcode, productos.costo, productos.ultcosto, productos.descripcion, productos.precioventa, productos.precioespecial1, productos.precioespecial2 FROM productos ', (err, rows, fields) => {



        if (!err) {

            if (rows.length > 0) {
                res.render('formulario/TraerProd', {

                    datos: rows,

                });

            } else {

                res.redirect('/obtener/obtener-productos');


            }

        } else {

            console.log(err);
        }
    });

});

router.get('/obtener/obtener-productos/:idproducto',  async (req, res) => {

    const id = req.params.idproducto

    await connection.query('SELECT productos.idproducto, productos.barcode, productos.costo, productos.ultcosto, productos.descripcion, productos.precioventa, productos.precioespecial1, productos.precioespecial2 ' +
        'FROM productos where idproducto=?', [id], (err, rows, fields) => {

            if (!err) {

                if (rows.length > 0) {
                    res.render('formulario/EditProductos', {

                        datos: rows,
                        data: rows[0]

                    });

                } else {

                    res.redirect('/obtener/obtener-productos');

                }

            } else {

                console.log(err);
            }
        });


});


router.post('/datos/edit-datos/:idproducto', async (req, res) => {
    const id = req.params.idproducto;

    const EditProducts = {

        descripcion,
        precioventa,
        precioespecial1,
        precioespecial2,
        costo
    } = req.body



    await connection.query('UPDATE productos set ? WHERE idproducto=?', [EditProducts, id], (err, rows, fields) => {


        res.redirect('/obtener/obtener-productos');

    });

});


module.exports = router;



