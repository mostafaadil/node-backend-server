
const express = require('express')
const router = express.Router();
const { getAwards, getAwardsById, createAwards,
    updateAwards, deleteAwards,paginate,search} =require('../controllers/Api/AwardsController.js')
router.route('/').get(getAwards).post(createAwards)
router.route('/paginate').post(paginate)
router.route('/search').post(search)
router.route('/:id').get(getAwardsById).put(updateAwards).delete(deleteAwards);
module.exports = router;

