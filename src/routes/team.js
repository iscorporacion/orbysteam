
const router = require('express').Router();

router.get("/",(req,res) => {
    res.render("index")
});

router.get("/admin",(req,res) => {
    res.render("admin",{
        name:"Luis fernando",
        botones:{
            usuario:"Add User",
            empleado:"Add Employee",
            buscar:"Search"
        }
    })
});

module.exports = router;