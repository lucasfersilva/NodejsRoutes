const {Router} = require("express");
const UserController = require("./controller/UserController")

const routes= new Router();

routes.get("/user", UserController.index)
routes.get("/user/:id", UserController.show)
routes.post("/user", UserController.store )
routes.put("/user/:id", UserController.update)
routes.delete("/user/:id", UserController.delete)
module.exports= routes;