const { getAll, create, remove } = require('../controllers/userCrud.controllers');
const express = require('express');

const userCrudRouter = express.Router();

userCrudRouter.route("/users")
		.get(getAll)
        .post(create);

userCrudRouter.route("/users/:id")
        .delete(remove)

module.exports = userCrudRouter;