module.exports = (req,res,next) => {
    console.log("Verifique si hay sesion");
    let permiso = true;
    if(permiso){
        next();
    }else{
        if (req.method == "GET") {
            res.render("error",{message:"No tines acceso a esta pagina"});            
        }else{
            res.json({error:401,message:"No has iniciado sesión"})
        }

    }
}