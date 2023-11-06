
const express = require('express')
const router = express.Router();
const { getPosterAwareds, getPosterAwaredsById, createPosterAwareds,
    updatePosterAwareds, deletePosterAwareds,paginate,search} =require('../controllers/Api/PosterAwaredsController.js')
router.route('/').get(getPosterAwareds).post(createPosterAwareds)
router.route('/paginate').post(paginate)
router.route('/search').post(search)
router.route('/:id').get(getPosterAwaredsById).put(updatePosterAwareds).delete(deletePosterAwareds);
module.exports = router;

