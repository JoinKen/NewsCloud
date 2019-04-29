"user strict";
var mysql = require("../dbconnection.js");
// const config = require("../dbconnection");

var Users = function(user) {
  this.idUser = user.idUser;
  this.fullname = user.fullname;
  this.email = user.email;
  this.username = user.username;
  this.password = user.password;

};
Users.getAlluser = function(result){
  mysql.query("Select * from news.user",function(err,res){
    if(err){
      console.log(err);
      result(null,err)
    }
    else{
      console.log(res);
      result(null,res);
    }
  })
}
Users.loginUser = function(req,res){
  var username = req.body.username;
  var password = req.body.password;
  mysql.query("SELECT * FROM user WHERE username = ?",[username], function (error, results, fields) {
  if (error) {
    // console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  }else{
    // console.log('The solution is: ', results);
    if(results.length >0){
      if(results[0].password == password){
        res.send({
          "code":200,
          "success":"login sucessfull"
            });
      }
      else{
        res.send({
          "code":204,
          "success":"Email and password does not match"
            });
      }
    }
    else{
      res.send({
        "code":204,
        "success":"Email does not exits"
          });
    }
  }
  });

}



// exports.list_all_users = function(req, res) {
//   Users.getAllUsers(function(err, users) {
//     console.log("controller");
//     if (err) res.send(err);
//     console.log("res", users);
//     res.send(users);
//   });
// };

// exports.create_a_user = function(req, res) {
//   var new_user = new Users(req.body);

//   //handles null error
//   if (!new_user.fullName || !new_user.email) {
//     res.status(400).send({
//       error: true,
//       message: "Please provide full name / email"
//     });
//   } else {
//     Users.createuser(new_user, function(err, user) {
//       if (err) res.send(err);
//       res.json(user);
//     });
//   }
// };

// exports.read_a_user = function(req, res) {
//   console.log("IT1006-req", req.query.idUser);
//   Users.getUserById(req.query.idUser, function(err, user) {
//     if (err) res.send(err);
//     res.json(user);
//   });
// };

// exports.update_a_user = function(req, res) {
//   Users.updateById(req.query.idUser, new Users(req.body), function(err, user) {
//     if (err) res.send(err);
//     res.json(user);
//   });
// };

// exports.delete_a_user = function(req, res) {
//   Users.remove(req.query.idUser, function(err, user) {
//     if (err) res.send(err);
//     res.json({ message: "DELETE successfully deleted" });
//   });
// };

module.exports = Users;