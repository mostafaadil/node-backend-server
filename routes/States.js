
const express = require('express')
const router = express.Router();
const { getStates, getStatesById, createStates,
    updateStates, deleteStates,paginate,search} =require('../controllers/Api/StatesController.js')
router.route('/').get(getStates).post(createStates)
router.route('/paginate').post(paginate)
router.route('/search').post(search)
router.route('/:id').get(getStatesById).put(updateStates).delete(deleteStates);
module.exports = router;

