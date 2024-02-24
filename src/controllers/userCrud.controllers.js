const catchError = require('../utils/catchError');
const UserCrud = require('../models/UserCrud');

const getAll = catchError(async(req, res) => {
    const usersCrud = await UserCrud.findAll()
    return res.json(usersCrud)
});

const create = catchError(async(req, res) => {
    const { first_name, last_name, email, password, birthday } = req.body;
    const userCrud = await UserCrud.create({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        birthday: birthday,
    });
    return res.status(201).jaon(userCrud)
});

module.exports = {
    getAll,
    create,
}