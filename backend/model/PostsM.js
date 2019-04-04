"user strict";
var mysql = require("../dbconnection.js");

//Task object constructor
var Posts = function(post) {
  this.tag = post.tag;
  this.title = post.title;
  this.describe = post.describe;
  // if (!post.tag) {
  //   this.tag = "";
  // }
  // if (!post.title) {
  //   this.title = "";
  // }
  // if (!post.describe) {
  //   this.describe = "";
  // }
};
Posts.getAllPost = function(result) {
  mysql.query("SELECT * FROM news.posts;", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("posts : ", res);
      result(null, res);
    }
  });
};
Posts.createPost = function(newPost, result) {
  mysql.query("INSERT INTO posts set ?;", newPost, function(err, res) {
    if (err) {
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
Posts.getPostById = function(idPost, result) {
  mysql.query("SELECT * FROM news.posts WHERE idPost = ? ;", [idPost], function(
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
Posts.updateById = function(id, post, result) {
  mysql.query(
    "UPDATE news.posts SET ? WHERE (idPost = ?);",
    [post, id],
    function(err, res) {
      console.log("IT1006", post);
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
Posts.remove = function(idPost, result) {
  mysql.query("DELETE FROM news.posts WHERE idPost = ?", [idPost], function(
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
module.exports = Posts;
