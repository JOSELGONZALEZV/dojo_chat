const { Router } = require('express');
const { User, Message } = require('../db');
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

router.get("/", [checkLogin ] , async (req,res) => {


    const errors = req.flash("errors");
    const mensajes = req.flash("mensajes");



    res.render("usuariopro.ejs",{ errors, mensajes})
});

// ruta para guardar los mensaje en la base de dato por id de user en session
router.post('/guardarmensajeOut', [checkLogin ], async (req,res) => {
    const user = await User.findOne({id: req.session.user.id});
    user.createMessage({messageOut:req.body.mensajeOut})
    res.json();

 });


module.exports = router;
