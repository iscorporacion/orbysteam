
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

router.get("/add_user",(req,res) => {
    res.render("add_user")
});

router.get("/add_employee",(req,res) => {
    res.render("add_employee")
});

router.get("/search",(req,res) => {
    res.render("search",{
        color:"danger",
        data:[
            {name:"diego cardona",cargo:"data base admin",id:1},
            {name:"ivan florez",cargo:"backend",id:2},
            {name:"marlon florez",cargo:"frontend",id:3},
        ]
    })
});

router.post("/add_employee",(req,res) => {
    console.log(req.body.file);
    res.render("add_employee")
});

module.exports = router;