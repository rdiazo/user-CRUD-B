const { getAll, create } = require('../controllers/userCrud.controllers');
const express = require('express');

const userCrudRouter = express.Router();

userCrudRouter.route("/users")
		.get(getAll)
        .post(create);

module.exports = userCrudRouter;