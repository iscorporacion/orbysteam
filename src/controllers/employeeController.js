const employeeController = {};

employeeController.index = (req,res) => {
    res.render("employee");
}

module.exports = employeeController;