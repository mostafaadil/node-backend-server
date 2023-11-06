
const { conn, sequelize } = require('../../db/conn')
const { Sequelize, Op, Model, DataTypes, JSON } = require("sequelize");
const bcrypt = require("bcrypt")


exports.createUsers = async (req, res, next) => {
  console.log("register", req.body)
  var isInserted
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(req.body.pass, salt, async (err, hash) => {
      var info = { name: req.body.name, email: req.body.email, pass: hash, type: req.body.type }
      console.log(info)
      isInserted = await conn.users.create(info)
      if (isInserted)
        res.status(200).json({ status: true, data: req.body })
      else {
        res.status(200).json({ status: false, message: "filed to save data" })
      }
    })
  })
}


exports.dashboard = async (req, res, next) => {
 const result=await sequelize.query(`SELECT count(awards.id) as awards,count(countries.id) as countries,count(recordes.id) as records,(SELECT count(users.id) FROM users where type="poster") as posters FROM awards,countries,recordes;`)
 if (result[0]) {
  res.status(200).json({ status: true, data: result[0][0], })
}
else {
  res.status(200).json({ status: false, message: "No data founded", })
}
}


exports.PosterDashboard = async (req, res, next) => {
  const result=await sequelize.query(`SELECT count(poster_awareds.id) as awards,  count(records_log.id) as records FROM poster_awareds,records_log where poster_awareds.poster_id=${req.body.id} and records_log.poster_id=${req.body.id};`)
  if (result[0]) {
   res.status(200).json({ status: true, data: result[0][0], })
 }
 else {
   res.status(200).json({ status: false, message: "No data founded", })
 }
 }
 
exports.login = async (req, res) => {

  data=req.body
  console.log("-------------------",data);

  var user = await conn.users.findOne({ where: { name: data.user.name }})
  if (user) {
    console.log("valied user")
    bcrypt.compare(data.user.pass, user.pass, async function (err, resp) {
    
      if (resp) {
        delete user.pass
        console.log("the user data is *********", user)
        res.header('x-auth', "token").send({ status: true, data: user })

      } else {
        res.send({ status: 0, msg: "Wrong Username or Password" });
      }
    })
  } else
    res.send({ status: 0, msg: "Wrong Username or Password" });
}




exports.selectUsersByFilter = async (req, res, next) => {
  var params = {
    limit: 10, page: 1, constrains: { name: "" },
    relations: [{ model: conn.poster_awareds }, { model: conn.unvarsecites },]
  }
  const result = await filter.filter("users", params)
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
  await conn.users.findAll({
    limit: req.body.limit,
    offset: offset,
    include: ['poster_awareds', 'unvarsecites',],
    where: {
      [searchCol]: {
        [Op.like]: '%' + search + '%'
      }
    }
  }).then(async function (assets) {
    var count = conn.users.findAll();
    res.status(200).json({ status: true, data: assets, tot: count.length })
  }).catch(function (error) {
    console.log(error);
  });
}

//@decs   Get All 
//@route  GET
//@access Public
exports.getUsers = async (req, res, next) => {
  try {
    const result = await conn.users.findAll()
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



exports.paginate = async (req, res, next) => {
  try {
    var offset = (req.body.page - 1) * req.body.limit
    console.log("the offset", offset, "the limit is ", req.body.limit);
    var result = await conn.users.findAll({
      order: [["id", "DESC"]],
      offset: offset,
      include:["country"],
      where: { "type": req.body.type.toString().toLowerCase() },
      limit: req.body.limit,
      subQuery: false,
    })
    console.log("the len is", result.length)
    if (result) {
      var count = await conn.users.findAll();
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
exports.getUsersById = async (req, res, next) => {
  try {
    const result = await conn.users.findOne({ where: { id: req.params.id } })
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
exports.updateUsers = async (req, res, next) => {
  try {
    const isUpdated = await conn.users.update(req.body, { where: { id: req.params.id } })
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
exports.deleteUsers = async (req, res, next) => {
  try {
    const isDeleted = await conn.users.destroy({ where: { id: req.params.id } })
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


