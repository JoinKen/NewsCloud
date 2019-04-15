const express = require("express");
const router = express.Router();

const post = require("../controller/Posts");
const user = require("../controller/Users");
const comment = require("../controller/Comments");
const contentPost = require("../controller/ContentsPost");
const image = require("../controller/Image");

router.get("/listPost", post.list_all_posts);
router.post("/createPost", post.create_a_post);
router.get("/readPost", post.read_a_post);
router.post("/updatePost", post.update_a_post);
router.delete("/deletePost", post.delete_a_post);
router.get("/getCommentPost",post.get_Comment);

router.get("/listUser", user.list_all_users);
router.post("/login",user.login);
router.post("/createUser", user.create_a_user);
router.get("/readUser", user.read_a_user);
router.post("/updateUser", user.update_a_user);
router.delete("/deleteUser", user.delete_a_user);

router.get("/listComment", comment.list_all_comment);
router.post("/createComment", comment.create_a_Comment);
router.get("/readComment", comment.read_a_comment);
router.post("/updateComment", comment.update_a_Comment);
router.delete("/deleteComment", comment.delete_a_comment);

router.get("/listContentPost", contentPost.list_all_contentsPost);
router.post("/createContentPost", contentPost.create_a_contentsPost);
router.get("/readContentPost", contentPost.read_a_contentsPost);
router.post("/updateContentPost", contentPost.update_a_contentsPost);
router.delete("/deleteContentPost", contentPost.delete_a_contentsPost);

router.get("/listImage", image.list_all_image);
router.post("/createImage", image.create_a_image);
router.get("/readImage", image.read_a_image);
router.post("/updateImage", image.update_a_image);
router.delete("/deleteImage", image.delete_a_image);

module.exports = router;
