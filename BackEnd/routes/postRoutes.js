const express = require("express");
const router = express.Router();
// Import the controller you created
const postController = require("../controllers/postController");

// --- Define API Endpoints ---

// 1. CREATE Post (Matches postController.createPost)
router.post("/", postController.createPost);

// 2. GET All Posts (Matches postController.getPosts)
router.get("/", postController.getPosts);

// 3. GET Single Post by ID (Matches postController.getPostById)
router.get("/:id", postController.getPostById);

// 4. UPDATE Post (Matches postController.updatePost)
router.put("/:id", postController.updatePost);

// 5. DELETE Post (Matches postController.deletePost)
router.delete("/:id", postController.deletePost);

module.exports = router;