const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let User = require("./../../models/users");
const config = require("./../../../config");
const response = require ("./../../lib/response");


const login = (req, res) => {
    const { username, password } =  req.body;
    User.find ({username: username}, ["password"])
    .then((user) => {
      
            const findUser = bcrypt.compareSync(password, user[0].password);
            if (findUser) {
                const token = jwt.sign({ username }, config.jwtKey);                
                res.json(response(true, [{token}]));
            }else{
                res.json(response(false, undefined, "Datos no válidos"));
            }    
    })
    .catch((err)=> {
        res.json(response (false, undefined, err))
    });

};

// consultar TODOS los usuarios
const getUsers = (req, res) => {
    User.find({}, ["name", "username"])
    .then ((users)=> {
        res.json(response (true, users));
    })
    .catch((err)=> {
        res.json(response (false, undefined, [{ message: err}] ));
    });
};


const newUser = (req, res)=>{
    const { name, username, password, passwordConfirmation, email } = req.body;

    const saltRounds = bcrypt.genSaltSync(config.SALT);
    const passwordHashed = bcrypt.hashSync(password, saltRounds);

    const user = {
        name,
        username,
        email,
        password: passwordHashed
    };
  
    User.find({username: user.username})
    .then ((users)=>{
        if (users.length>  0 ){
            res.json(response (false, undefined,"Ya existe el  nombre de usuario"));
        }else {
            const obj = new User (user);
            obj.save()
            .then((user)=>{
                res.json(response (true, [user]))
            })
            .catch((err)=> {
                res.json(response (false, undefined, err))
            });
        }
    })
    .catch((err)=> {
        res.json(response (false, undefined, err))
    });
};


const deleteUser = (req, res) => {
    const username = req.params.username;

    User.remove ({username: username})
    .then((user) =>{
        res.json(response (true, [{message:"el usuario ha sido borrado"}] ));
    })
    .catch((err)=> {
        res.json(response (false, undefined, err));
    });
};

const updateUser = (req, res) => {
    const username = req.params.username;
      let user = {
            name: req.body.name,
            email: req.body.email,
      };
  User.findOneAndUpdate ({username: username}, user)
  .then((user)=> {
    res.json(response (true, [user]));
  })
  .catch((err) =>{
    res.json(response (false, undefined, err));
  });

};

// consultar un usuario especifico
const getUser = (req, res) => {
    const username = req.params.username;
    User.find({username: username}, ["name", "username"])
    .then ((users)=> {
        res.json(response (true, users));
    })
    .catch((err)=> {
        res.json(response (false, undefined, err))
    });

};

module.exports = { getUsers, newUser, deleteUser, updateUser, getUser, login};