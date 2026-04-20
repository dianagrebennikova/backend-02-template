const router = require('express').Router()
const {  getUsers,
    getUser,
    createUser,
    updateUsers,
    deleteUsers,} = require('../controllers/users')

router.get('/users', getUsers);
router.get('/users/:user_id', getUser);
router.post('/users', createUser);
router.patch('/users/:user_id', updateUsers);
router.delete('/users/:user_id', deleteUsers);


module.exports = router;