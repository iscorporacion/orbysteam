
const router = require('express').Router();

router.get("/",(req,res) => {
    res.render("index")
});


router.get("/team",(req,res) => {
    res.render("team");
});


router.get("/registroUsuario",(req,res) => {
    res.render("registroUsuario");
});

module.exports = router;