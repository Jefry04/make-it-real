let users = require("./../../models/users");
const bcrypt = require("bcrypt");
const config = require("./../../../config");
const response = require ("./../../lib/response")



const getUsers = (req, res) => {
    res.json(response (true, users));
};

const newUser = (req, res) => {
    const saltRounds = bcrypt.genSaltSync(config.SALT);
    const password = bcrypt.hashSync(req.body.password, saltRounds);
    let user = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: password
    };
    const findUser = users.find(u => u.username === user.username);
    if (findUser === undefined) {
        users.push(user);
        res.json (response(true, users));
    } else {
        res.json (response(false, undefined, "el usuario ya existe" ));
     
    }

};

const deleteUser = (req, res) => {
    const username = req.params.username;
    const findUser = users.find(u => u.username === username);
    if (findUser === undefined) {
        res.status(500).send("El usuario no existe");
    } else {
        const result = users.filter(u => u.username !== username);
        users = result;
        res.status(200).send(users);


    }
};

const updateUser = (req, res) => {
    const username1 = req.params.username;
    let findUser = users.find(u => u.username === username1);
    if (findUser === undefined) {
        res.status(500).send("Elusuario no existe");
    } else {
        let user = {
            name: req.body.name,
            email: req.body.email,
            username: username1,
            password: req.body.password
        };
        let posicion = users.findIndex(x => x.username === username1);
        users.splice(posicion, 1, user);

        res.status(200).send(users);
    }
};

const getUser = (req, res) => {
    const username = req.params.username;
    const findUser = users.find(u => u.username === username);
    if (findUser === undefined) {
        res.status(500).send("El usuario consultado no existe");
    } else {
        res.status(200).send(findUser);
    }
};

module.exports = { getUsers, newUser, deleteUser, updateUser, getUser}