"user strict";
var mysql = require("../dbconnection.js");

//Task object constructor
var ContentsPost = function(contentsPost) {
  this.tag = contentsPost.tag;
  this.title = contentsPost.title;
  this.describe = contentsPost.describe;
  // if (!contentsPost.tag) {
  //   this.tag = "";
  // }
  // if (!contentsPost.title) {
  //   this.title = "";
  // }
  // if (!contentsPost.describe) {
  //   this.describe = "";
  // }
};
ContentsPost.getAllContentsPost = function(result) {
  mysql.query("SELECT * FROM news.ContentsPost;", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("ContentsPost : ", res);
      result(null, res);
    }
  });
};
ContentsPost.createContentsPost = function(newContentsPost, result) {
  mysql.query("INSERT INTO ContentsPost set ?;", newContentsPost, function(
    err,
    res
  ) {
    if (err) {
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
ContentsPost.getContentsPostById = function(idContentsPost, result) {
  mysql.query(
    "SELECT * FROM news.ContentsPost WHERE idContentsPost = ? ;",
    [idContentsPost],
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
ContentsPost.updateById = function(id, contentsPost, result) {
  mysql.query(
    "UPDATE news.ContentsPost SET ? WHERE (idContentsPost = ?);",
    [contentsPost, id],
    function(err, res) {
      console.log("IT1006", contentsPost);
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
ContentsPost.remove = function(idContentsPost, result) {
  mysql.query(
    "DELETE FROM news.ContentsPost WHERE idContentsPost = ?",
    [idContentsPost],
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
module.exports = ContentsPost;
