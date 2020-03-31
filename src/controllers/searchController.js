const searchController = {};

searchController.index = (req,res) => {
    res.render("search",{
        color:"danger",
        data:[
            {name:"diego cardona",cargo:"data base admin",id:1},
            {name:"ivan florez",cargo:"backend",id:2},
            {name:"marlon florez",cargo:"frontend",id:3},
            {name:"alexander jaramillo",cargo:"innovación",id:3},
        ]
    })
}

module.exports = searchController;