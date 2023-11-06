
const express = require('express')
const router = express.Router();
const { getUsers, getUsersById, createUsers,
    updateUsers, deleteUsers,paginate,search, login, dashboard, PosterDashboard} =require('../controllers/Api/UsersController.js')
router.route('/').get(getUsers).post(createUsers)
router.route('/paginate').post(paginate)
router.route('/search').post(search)
router.route('/login').post(login)
router.route('/dashboard').post(dashboard)
router.route('/poster-dashboard').post(PosterDashboard)
router.route('/:id').get(getUsersById).put(updateUsers).delete(deleteUsers);
module.exports = router;


