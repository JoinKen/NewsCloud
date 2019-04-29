"user strict";
var mysql = require("../dbconnection.js");

//Task object constructor
var Posts = function (post) {
  this.tag = post.tag;
  this.title = post.title;
  this.describes = post.describes;
  this.dateAdded = post.dateAdded;
  this.numberOfRead = post.numberOfRead;
  this.topic = post.topic;
  this.img = post.img;

};
Posts.getAllPost = function (result) {
  mysql.query("SELECT * FROM news.posts;", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("posts : ", res);
      result(null, res);
    }
  });
};
// Posts.createPost = function (req, res, next) {
//   mysql.query("INSERT INTO posts(tag,title,describes,topic,img) values ('" + tag + "', '" + title + "','" + describes + "','" + topic + "','" + img + "') ", function (
//     err,
//     res
//   ) {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//     } else {
//       res.setHeader('Access-Control-Allow-Origin', '*')
//       res.status(200).send({
//         res: true, code: 'Them Thanh Cong', value: {
//           nameProduct: req.body.nameProduct,
//           priceEntered: req.body.priceEntered,
//           salePrice: req.body.salePrice,
//           amount: req.body.amount,
//           dateAdded: req.body.dateAdded,
//           describe: req.body.describe,
//           img: req.body.img
//         }
//       });
//     }
//   }
// }

Posts.createPost = function (newPost, result) {
  var tag = newPost.tag;
  var title = newPost.title;
  var describes = newPost.describes;
  var topic = newPost.topic;
  var img = newPost.img;
  mysql.query("INSERT INTO posts(tag,title,describes,topic,img) values ('" + tag + "', '" + title + "','" + describes + "','" + topic + "','" + img + "') ", function (
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } 
    else {
      console.log("Success");
      let idPost = res.insertId ;
      mysql.query("SELECT * FROM news.posts WHERE idPost = ? ;", [idPost], function (
        error,
        kq
      ) {
        if (error) {
          console.log("error: ", error);
          result(error, null);
        } else {
          console.log('aad');
          console.log(kq);
          result(null, kq);
    
        }
      });

    }
  });
};

Posts.getPostById = function (idPost, result) {
  mysql.query("SELECT * FROM news.posts WHERE idPost = ? ;", [idPost], function (
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res);
      result(null, res);

    }
  });
};
Posts.updateById = function (id, post, result) {
  mysql.query(
    "UPDATE news.posts SET ? WHERE (idPost = ?);",
    [post, id],
    function (err, res) {
     // console.log("IT1006", post);
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
Posts.remove = function (idPost, result) {
  mysql.query("DELETE FROM news.posts WHERE idPost = ?", [idPost], function (
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("DELETE",res);
      result(null, res);
    }
  });
};
Posts.ComentPost = function (result) {
  mysql.query("CALL countCommentPost()", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log("comment : ", res[0]);
      result(null, res[0]);
    }
  })

}
module.exports = Posts;    
