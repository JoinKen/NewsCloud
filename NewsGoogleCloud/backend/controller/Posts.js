"use strict";
var Posts = require("../model/PostsM.js");


exports.list_all_posts = function(req, res) {
  Posts.getAllPost(function(err, posts) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", posts);
    res.send(posts);
    
  });
};
exports.get_Comment = function(req,res){
  Posts.ComentPost(function (err,posts){
    if(err) res.send(err);
   res.send(posts);
  })
}
exports.create_a_post = function(req, res) {
  var new_post = new Posts(req.body);
  Posts.createPost(new_post, function(err, post) {
    if (err) res.send(err);
    res.json(post);
  // res.send(post);
  })
}

  //handles null error
  // if (!new_post.title || !new_post.describe) {
  //   res
  //     .status(400)
  //     .send({ error: true, message: "Please provide tag/title/describe" });
  // } else {
  //   Posts.createPost(new_post, function(err, post) {
  //     if (err) res.send(err);
  //  // res.json(post);
  //  res.send(post);
  //   });
  // }


exports.read_a_post = function(req, res) {
  console.log("IT1006-req", req.query.idPost);
  Posts.getPostById(req.query.idPost, function(err, post) {
    if (err) res.send(err);
    res.json(post);
    console.log(res);
  });
};

exports.update_a_post = function(req, res) {
  Posts.updateById(req.query.idPost, new Posts(req.body), function(err, post) {
    if (err) res.send(err);
    res.json(post);
  });
};

exports.delete_a_post = function(req, res) {
  Posts.remove(req.query.idPost, function(err, post) {
    if (err) res.send(err);
    res.json({ message: "DELETE successfully deleted" });
  });
};


