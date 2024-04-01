import express from "express";

import { 
  createPostController,
  deletePostController,
  updatePostController,
  likeAndDislikePostController,
  getPostByIdController,
  getPostsController,
  getTimelinePostsController
} from "../controllers/post.controller.js";

const router = express.Router();

router.post('/', createPostController);
router.get('/', getPostsController);
router.get('/timeline', getTimelinePostsController);
router.get('/:id', getPostByIdController);
router.put('/:id', updatePostController);
router.delete('/:id', deletePostController);
router.delete('/:id', deletePostController);
router.put('/like/:id', likeAndDislikePostController);


export default router;