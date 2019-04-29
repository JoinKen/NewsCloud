"user strict";
var mysql = require("../dbconnection.js");

//Task object constructor
var Comments = function(comment) {
  this.tag = comment.tag;
  this.title = comment.title;
  this.describe = comment.describe;
  // if (!comment.tag) {
  //   this.tag = "";
  // }
  // if (!comment.title) {
  //   this.title = "";
  // }
  // if (!comment.describe) {
  //   this.describe = "";
  // }
};
Comments.getAllComment = function(result) {
  mysql.query("SELECT * FROM news.Comments;", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Comments : ", res);
      result(null, res);
    }
  });
};
Comments.createComment = function(newComment, result) {
  mysql.query("INSERT INTO Comments set ?;", newComment, function(err, res) {
    if (err) {
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
Comments.getCommentById = function(idComment, result) {
  mysql.query(
    "SELECT * FROM news.Comments WHERE idComment = ? ;",
    [idComment],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};
Comments.updateById = function(id, comment, result) {
  mysql.query(
    "UPDATE news.Comments SET ? WHERE (idComment = ?);",
    [comment, id],
    function(err, res) {
      console.log("IT1006", comment);
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
Comments.remove = function(idComment, result) {
  mysql.query(
    "DELETE FROM news.Comments WHERE idComment = ?",
    [idComment],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
module.exports = Comments;
