/**
 * Acá dejamos las rutas internas (rutas que asumen que el usuario ya se logueo a nuestra App)
 */
const { Router } = require('express');
const { Keeper } = require('../db');
const router = Router();

// Middleware: Verifica si el usuario está logueado.
// en caso de que no, lo mandamos al login
function checkLogin(req, res, next) {
  console.log('verificando que el usuario está logueado');
  next();
}


router.get('/', checkLogin, async (req, res) => {
  res.render('index.ejs');
});


router.get('/dos', checkLogin, async (req, res) => {
  res.render('dos.ejs');
});


router.post('/', checkLogin, async (req, res) => {
  try {
    // acá coloco lo que intento hacer
    await Keeper.create(req.body);

  } catch (err) {
    // acá coloco lo que haré si ocurre algún error
    req.flash('errors', err.errors[key].message);
  }
  res.redirect('/');
});


module.exports = router;