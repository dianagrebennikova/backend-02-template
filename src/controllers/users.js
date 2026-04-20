const User = require('../models/user')

const getUsers = (request, response) => {
  return User.find({}).then(
    (data) =>  {
        response.status(200);
        response.send(data);     
    }
  ).catch(e => response.status(500).send(e.message))
};

const getUser = (request, response) => {
  const { user_id } = request.params;
  return User.findById(user_id).then(
    (user) =>  {
        response.status(200);
        response.send(user);     
    }
  )
};
const createUser = (request, response) => {
    return User.create({...request.body }).then(
        (user) => { response.status(201).send(user)}
    )
};
const updateUsers = (request, response) => {
    const { user_id } = request.params;
  return User.findByIdAndUpdate(user_id, {...request.body }).then(
    (user) =>  {
        response.status(200);
        response.send(user);     
    })
};
const deleteUsers = (request, response) => {
    const { user_id } = request.params;
  return User.findByIdAndDelete(user_id).then(
    (user) =>  {
        response.status(200);
        response.send("Success");     
    })
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUsers,
  deleteUsers,
};
