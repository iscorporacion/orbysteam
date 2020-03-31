const adminController = {};

adminController.index = (req, res) => {
    res.render("admin", {
        name: "Luis fernando",
        botones: {
            usuario: "Add User",
            empleado: "Add Employee",
            buscar: "Search"
        }
    })
}

module.exports = adminController;