
const express = require('express')
const router = express.Router();
const { getUnvarsecites, getUnvarsecitesById, createUnvarsecites,
    updateUnvarsecites, deleteUnvarsecites,paginate,search} =require('../controllers/Api/UnvarsecitesController.js')
router.route('/').get(getUnvarsecites).post(createUnvarsecites)
router.route('/paginate').post(paginate)
router.route('/search').post(search)
router.route('/:id').get(getUnvarsecitesById).put(updateUnvarsecites).delete(deleteUnvarsecites);
module.exports = router;

