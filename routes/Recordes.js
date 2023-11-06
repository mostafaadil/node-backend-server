
const express = require('express')
const router = express.Router();
const { getRecordes, getRecordesById, createRecordes,
    updateRecordes, deleteRecordes,paginate,search,advanceSearch, updateRecordStatus} =require('../controllers/Api/RecordesController.js')
router.route('/').get(getRecordes).post(createRecordes)
router.route('/paginate').post(paginate)
router.route('/search').post(search)
router.route('/advance-search').post(advanceSearch)
router.route('/update-record').post(updateRecordStatus)
router.route('/:id').get(getRecordesById).put(updateRecordes).delete(deleteRecordes);
module.exports = router;

