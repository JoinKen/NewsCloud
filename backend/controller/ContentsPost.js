"use strict";
var ContentsPost = require("../model/ContentsPostM.js");

exports.list_all_contentsPost = function(req, res) {
  ContentsPost.getAllContentsPost(function(err, contentsPost) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", contentsPost);
    res.send(contentsPost);
  });
};

exports.create_a_contentsPost = function(req, res) {
  var new_contentsPost = new ContentsPost(req.body);

  //handles null error
  if (!new_contentsPost.contentPost) {
    res
      .status(400)
      .send({ error: true, message: "Please provide tag/title/describe" });
  } else {
    ContentsPost.createContentsPost(new_contentsPost, function(
      err,
      contentPost
    ) {
      if (err) res.send(err);
      res.json(contentPost);
    });
  }
};

exports.read_a_contentsPost = function(req, res) {
  console.log("IT1006-req", req.query.idContent);
  ContentsPost.getContentsPostById(req.query.idContent, function(
    err,
    contentPost
  ) {
    if (err) res.send(err);
    res.json(contentPost);
  });
};

exports.update_a_contentsPost = function(req, res) {
  ContentsPost.updateById(
    req.query.idContent,
    new ContentsPost(req.body),
    function(err, contentPost) {
      if (err) res.send(err);
      res.json(contentPost);
    }
  );
};

exports.delete_a_contentsPost = function(req, res) {
  ContentsPost.remove(req.query.idContent, function(err, contentPost) {
    if (err) res.send(err);
    res.json({ message: "DELETE successfully deleted" });
  });
};
