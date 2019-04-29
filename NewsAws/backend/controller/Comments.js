"use strict";
var Comments = require("../model/CommentsM.js");

exports.list_all_comment = function(req, res) {
  Comments.getAllComment(function(err, comment) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", comment);
    res.send(comment);
  });
};

exports.create_a_Comment = function(req, res) {
  var new_comment = new Comment(req.body);

  //handles null error
  if (!new_comment.link) {
    res.status(400).send({ error: true, message: "Please provide link file" });
  } else {
    Comments.createComment(new_comment, function(err, comment) {
      if (err) res.send(err);
      res.json(comment);
    });
  }
};

exports.read_a_comment = function(req, res) {
  Comments.getCommentById(req.query.idComment, function(err, comment) {
    if (err) res.send(err);
    res.json(comment);
  });
};

exports.update_a_Comment = function(req, res) {
  Comments.updateById(req.query.idComment, new Comment(req.body), function(
    err,
    comment
  ) {
    if (err) res.send(err);
    res.json(comment);
  });
};

exports.delete_a_comment = function(req, res) {
  Comments.remove(req.query.idComment, function(err, comment) {
    if (err) res.send(err);
    res.json({ message: "DELETE successfully deleted" });
  });
};
