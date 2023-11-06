
const express = require('express')
const router = express.Router();
const { getRecoredStudants, getRecoredStudantsById, createRecoredStudants,
    updateRecoredStudants, deleteRecoredStudants,paginate,search} =require('../controllers/Api/RecoredStudantsController.js')
router.route('/').get(getRecoredStudants).post(createRecoredStudants)
router.route('/paginate').post(paginate)
router.route('/search').post(search)
router.route('/:id').get(getRecoredStudantsById).put(updateRecoredStudants).delete(deleteRecoredStudants);
module.exports = router;

