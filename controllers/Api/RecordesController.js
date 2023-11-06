
const { conn, sequelize } = require('../../db/conn')
const { Sequelize, Op, Model, DataTypes } = require("sequelize");




exports.selectRecordesByFilter = async (req, res, next) => {
  var params = {
    limit: 10, page: 1, constrains: { name: "" },
    relations: [{ model: conn.recored_studants }, { model: conn.recored_studants },]
  }
  const result = await filter.filter("recordes", params)
  if (result) {
    res.status(200).json({ status: true, data: result, })
  }
  else {
    res.status(200).json({ status: false, message: "No data founded", })
  }
}
exports.chartData = async (req, res, next) => {
  try {
    let regMonth = [];
    var tab = req.body.tab
    let type = req.body.type
    const sevenDaysAgo = new Date(new Date().setDate(new Date().getDate() - 7));
    if (type == 1) {//day
      sequelize.query(`select DATE_FORMAT(selected_date,"%Y-%m-%d") label,(SELECT COUNT(*) FROM ${tab} WHERE  date(${tab}.createdAt) =selected_date GROUP BY DATE_FORMAT(${tab}.createdAt,"%Y-%m-%d")) y from (select selected_date from (select adddate('1970-01-01',t4*10000 + t3*1000 + t2*100 + t1*10 + t0) selected_date from (select 0 t0 union select 1 union select 2 union select 3 union select 4 union select 5 union select 6 union select 7 union select 8 union select 9) t0, (select 0 t1 union select 1 union select 2 union select 3 union select 4 union select 5 union select 6 union select 7 union select 8 union select 9) t1, (select 0 t2 union select 1 union select 2 union select 3 union select 4 union select 5 union select 6 union select 7 union select 8 union select 9) t2, (select 0 t3 union select 1 union select 2 union select 3 union select 4 union select 5 union select 6 union select 7 union select 8 union select 9) t3, (select 0 t4 union select 1 union select 2 union select 3 union select 4 union select 5 union select 6 union select 7 union select 8 union select 9) t4) v where selected_date between date(date_sub(now(),INTERVAL 1 month)) and CURRENT_DATE()) tmp;
      `)
        .then(function (response) {
          res.status(200).json({ status: true, data: response[0] });
        }).error(function (err) {
          // res.json(err);
        });

    }
    if (type == 2) {//month
      sequelize
        .query(`select v label,(SELECT COUNT(*) FROM ${tab} WHERE  DATE_FORMAT(${tab}.createdAt,"%Y-%m") =v GROUP BY DATE_FORMAT(${tab}.createdAt,"%Y-%m")) y  from(select DISTINCT DATE_FORMAT(selected_date,"%Y-%m") v from (select adddate('1970-01-01',t4*10000 + t3*1000 + t2*100 + t1*10 + t0) selected_date from (select 0 t0 union select 1 union select 2 union select 3 union select 4 union select 5 union select 6 union select 7 union select 8 union select 9) t0, (select 0 t1 union select 1 union select 2 union select 3 union select 4 union select 5 union select 6 union select 7 union select 8 union select 9) t1, (select 0 t2 union select 1 union select 2 union select 3 union select 4 union select 5 union select 6 union select 7 union select 8 union select 9) t2, (select 0 t3 union select 1 union select 2 union select 3 union select 4 union select 5 union select 6 union select 7 union select 8 union select 9) t3, (select 0 t4 union select 1 union select 2 union select 3 union select 4 union select 5 union select 6 union select 7 union select 8 union select 9) t4) v where DATE_FORMAT(selected_date,"%Y-%m") between DATE_FORMAT((date_sub(now(),interval 1 year)),"%Y-%m") and DATE_FORMAT(now(),"%Y-%m")) tmp2;
        `)
        .then(function (response) {
          res.status(200).json({ status: true, data: response[0] });
        }).error(function (err) {
          res.json(err);
        });

    }
  } catch (error) {
    console.log(error)
  }
}

exports.search = async (req, res, next) => {
  var searchCol = req.body.col
  var offset = (req.body.page - 1) * req.body.limit
  var search = req.body.search
  await conn.recordes.findAll({
    limit: req.body.limit,
    offset: offset,
    include: ['recored_studants',],
    where: {
      [searchCol]: {
        [Op.like]: '%' + search + '%'
      }
    }
  }).then(async function (assets) {
    var count = conn.recordes.findAll();
    res.status(200).json({ status: true, data: assets, tot: count.length })
  }).catch(function (error) {
    console.log(error);
  });
}

exports.advanceSearch = async (req, res, next) => {
  var search = req.body.col
  const result=await sequelize.query(`SELECT *,unvarsecites.name as un FROM recordes,unvarsecites where title like '%${search}%' and unvarsecites.id=recordes.unvrecity_id;;`)
  if (result)
      res.status(200).json({ status: true, data: result[0] })
    else {
      res.status(200).json({ status: false, message: `No data founded` })
    }
}
//@decs   Get All 
//@route  GET
//@access Public
exports.getRecordes = async (req, res, next) => {
  try {
    const result = await conn.recordes.findAll()
    if (result.length != 0)
      res.status(200).json({ status: true, data: result })
    else {
      res.status(200).json({ status: false, message: `No data founded` })
    }
  }
  catch (e) {
    res.status(200).json({ status: false, message: `server side error` })
  }

}
exports.updateRecordStatus = async (req, res, next) => {
  try {
    var data = await conn.recordes.findOne({ where: { id: req.body.id } })
    var status = null
    if (data.status == 1) {
      status = 0
    }
    if (data.status == 0) {
      status = 1
    }
    var result = await conn.recordes.update( {status:status} , { where: { id: req.body.id } })
    if (result) {
      res.status(200).json({ status: true, data: status })
    }
    else {
      res.status(200).json({ status: false, message: `No data founded` })
    }
  }
  catch (e) {
    console.log(e)
    res.status(200).json({ status: false, message: `server side error` })
  }
}
exports.createRecordes = async (req, res, next) => {
  try {
    const result = await conn.recordes.create(req.body)
    if (result) {
      await conn.records_log.create({record_id:result.id,poster_id:req.body.user_id})
      res.status(200).json({ status: true, data: req.body })
    }
    else {
      res.status(200).json({ status: false, message: `No data founded` })
    }
  }
  catch (e) {
    res.status(200).json({ status: false, message: `server side error` })
  }


}

exports.paginate = async (req, res, next) => {
  try {
    var offset = (req.body.page - 1) * req.body.limit
    console.log("the offset", offset, "the limit is ", req.body.limit);
    var result = await conn.recordes.findAll({
      order: [["id", "DESC"]],
      include: ['recored_studants', 'recored_studants',"unvrecity"],
      offset: offset,
      limit: req.body.limit,
      subQuery: false,
    })
    console.log("the len is", result.length)
    if (result) {
      var count = await conn.recordes.findAll();
      res.status(200).json({ status: true, data: result, tot: count.length })
    }
    else {
      res.status(200).json({ status: false, message: `No data founded` })
    }
  }
  catch (e) {
    console.log(e)
    res.status(200).json({ status: false, message: `server side error` })
  }
}
//@decs   Get All 
//@route  GET
//@access Public
exports.getRecordesById = async (req, res, next) => {
  try {
    const result = await conn.recordes.findOne({ where: { id: req.params.id } })
    if (result.length != 0)
      res.status(200).json({ status: true, data: result })
    else {
      res.status(200).json({ status: false, message: `No data founded` })
    }
  }
  catch (e) {
    res.status(200).json({ status: false, message: `server side error` })
  }


}

//@decs   Get All 
//@route  Put
//@access Public
exports.updateRecordes = async (req, res, next) => {
  try {
    const isUpdated = await conn.recordes.update(req.body, { where: { id: req.params.id } })
    if (isUpdated)
      res.status(200).json({ status: true, data: req.body })
    else {
      res.status(200).json({ status: true, message: "filed to update data" })
    }
  }
  catch (e) {
    res.status(200).json({ status: false, message: `server side error` })

  }

}


//@decs   Get All 
//@route  Delete
//@access Public
exports.deleteRecordes = async (req, res, next) => {
  try {
    const isDeleted = await conn.recordes.destroy({ where: { id: req.params.id } })
    if (isDeleted)
      res.status(200).json({ status: true, message: `data deleted successfully` })
    else {
      res.status(200).json({ status: false, message: `filed to delete data` })
    }
  }
  catch (e) {
    res.status(200).json({ status: false, message: `server side error` })
  }

}


