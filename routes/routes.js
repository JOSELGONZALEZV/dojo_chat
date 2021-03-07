const { Router } = require('express');
const router = Router();

// aca configuramos las rutas.
function checkLogin(req, res, next) {

    
    if (req.session.user == null){
        req.flash('errors', "Tienes que estar registrado para ingresar al sistema.");
        return res.redirect('/login');
    }

    res.locals.user = req.session.user;

    next();
}




router.get("/", [checkLogin ] , (req,res) => {


    const errors = req.flash("errors");
    const mensajes = req.flash("mensajes");



    res.render("usuariopro.ejs",{ errors, mensajes})
});




module.exports = router;
