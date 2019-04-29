"use strict";
var Posts = require("../model/PostsM.js");
var mysql = require("../dbconnection.js");

exports.list_all_posts = function (req, res) {
  Posts.getAllPost(function (err, posts) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", posts);
    res.send(posts);

  });
};
exports.get_Comment = function (req, res) {
  Posts.ComentPost(function (err, posts) {
    if (err) res.send(err);
    res.send(posts);
  })
}

exports.create_a_post = function (req, res) {
  var new_post = new Posts(req.body);
  console.log("newpost", new_post);
  Posts.createPost(new_post, function (err, post) {
    if (err) res.send(err);
    // console.log("RES",res);
    console.log("RES", res);
    res.json(post);
  })
}

exports.read_a_post = function (req, res) {
  console.log("IT1006-req", req.idPost);
  Posts.getPostById(req.query.idPost, function (err, post) {
    if (err) res.send(err);
    res.json(post);
    console.log("DAY LA REST")
    console.log(res);
    //res.send(posts);
  });
};

exports.update_a_post = function (req, res) {
  console.log("sas", req.body.post);
  console.log("sds", req.body.post.idPost);
  // Phải truyền vào như v kh thì dăn lỗi ...
  Posts.updateById(req.body.post.idPost, new Posts(req.body.post), function (err, post) {
    if (err) res.send(err);
    res.json(post);
  });
};

exports.delete_a_post = function (req, res) {
  mysql.query("DELETE FROM news.posts WHERE idPost = ?", req.body.idPost, function (
    err,
    result
  ) {
    if (err) {
      console.log("error: ", err);
      // result(err,null);
      res.send(err);
    } else {
      console.log("DELETE", result);
      //result(null, res);
      res.send(result);
    }
  });
  // Posts.remove(req.body.idPost, function(err, post) {
  //   if (err) res.send(err);
  //   //res.json(post);
  //   res.send(post.idPost);
  //  //res.json({ message: "DELETE successfully deleted" });
  // });
};


