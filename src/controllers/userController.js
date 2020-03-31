const userController = {};

userController.index = (req,res) => {
    res.render("user");
}

userController.add = (req,res) => {
    res.render("user addeted");
}

module.exports = userController;