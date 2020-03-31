
const router = require('express').Router();
const indexController = require("../controllers/indexController");
const adminController = require("../controllers/adminController");
const userController = require("../controllers/userController");
const employeeController = require("../controllers/employeeController");
const searchController = require("../controllers/searchController");
const sessionController = require("../controllers/sesionController"); 

// **** INDEX **** //
router.get("/",indexController.index);
// **** ADMIN **** //
router.get("/admin",sessionController,adminController.index);
// **** USER **** //
router.get("/user",sessionController,userController.index);
router.post("/add_user",sessionController,userController.add)
// **** EMPLOYEE **** //
router.get("/employee",sessionController,employeeController.index);
// **** SEARCH **** //
router.get("/search",sessionController,searchController.index);
// **** TESTING **** //
router.get("/pruebas",(req,res) => {
    res.render("pruebas")
});
// **** OTHER **** //
router.get("*",(req,res)=>{
    res.status(200).render("error",{message:"Archivo no encontrado"});
})

module.exports = router;