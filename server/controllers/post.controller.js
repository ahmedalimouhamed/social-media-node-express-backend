import {
  createPost, 
  deletePost, 
  updatePost, 
  likeAndDislikePost,
  getPostById,
  getPosts,
  getTimelinePosts
} from "../services/post.service.js";

export const createPostController = async(req, res) => {
  try{

    const newPost = await createPost(req.body);
    res.status(200).json({
      newPost,
      message: "post has been created successfully"
    })

  }catch(error){
    console.log(error);
    res.status(500).json({
      message: "Post creation failed",
      error: error.message
    });
  }
}

export const updatePostController = async(req, res) => {
  try{

    const updatedPost = await updatePost(req.params, req.body);
    res.status(200).json({
      updatedPost,
      message: "post has been updated successfully"
    })

  }catch(error){
    console.log(error);
    res.status(500).json({
      message: "Post update failed",
      error: error.message
    });
  }
}

export const deletePostController = async(req, res) => {
  try{

    const deleted = await deletePost(req.params, req.body);
    res.status(200).json({
      deleted,
      message: "post has been deleted successfully"
    })

  }catch(error){
    console.log(error);
    res.status(500).json({
      message: "Post deleting failed",
      error: error.message
    });
  }
}

export const likeAndDislikePostController = async(req, res) => {
  try{

    const post = await likeAndDislikePost(req.params, req.body);
    res.status(200).json({
      post,
      message: "post has been liked or unliked successfully"
    })

  }catch(error){
    console.log(error);
    res.status(500).json({
      message: "Post like failed",
      error: error.message
    });
  }
}

export const getPostByIdController = async (req, res) => {
  const post = await getPostById(req.params, req.body);
  res.status(200).json(post);
}

export const getPostsController = async (req, res) => {
  const posts = await getPosts(req.params, req.body);
  res.status(200).json(posts);
}

export const getTimelinePostsController = async (req, res) => {
  
  try{
    const timelinePosts = await getTimelinePosts(req.body);
    res.status(200).json({
      timelinePosts,
      message: "timeline post fetched successfully"
    });
  }catch(error){
    console.log(error);
    res.status(500).json({
      message: "Post fetch failed",
      error: error.message
    });
  }
  
}