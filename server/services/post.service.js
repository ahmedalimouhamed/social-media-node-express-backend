import PostModel from '../models/post.model.js';
import UserModel from '../models/user.model.js';

export const createPost = async(body) => {
  try{
    console.log(body);
    const newPost = new PostModel(body);
    await newPost.save();
    return newPost;

  }catch(error){
    throw error;
  }
}

export const updatePost = async(params, body) => {
  try{
    
    const post = await PostModel.findById(params.id);

    if(post.userId === body.userId){
      await PostModel.updateOne(
        {
          $set: body
        }
      );
      return post;
    }else{
      throw new Error("you can update only your post")
    }


  }catch(error){
    throw error;
  }
}

export const deletePost = async(params, body) => {
  try{
    
    const deletedPost = await PostModel.findById(params.id);

    if(deletedPost.userId === body.userId){
      await PostModel.deleteOne(deletedPost);
      return deletedPost;
    }else{
      throw new Error("you can delete only your post")
    }


  }catch(error){
    throw error;
  }
}

export const likeAndDislikePost = async(params, body) => {
  try{
    
    const targetPost = await PostModel.findById(params.id);
    console.log("Target Post : ", targetPost);
    if(!targetPost.likes.includes(body.userId)){
      await targetPost.updateOne({
        $push: {
          likes: body.userId
        }
      });
    }else{
      await targetPost.updateOne({
        $pull: {
          likes: body.userId
        }
      })
    }

    return targetPost;

  }catch(error){
    throw error;
  }
}

export const getPostById = async(params) => {
  try{
    
    const targetPost = await PostModel.findById(params.id);
    return targetPost;

  }catch(error){
    throw error;
  }
}

export const getPosts = async() => {
  try{
    
    const posts = await PostModel.find();
    return posts;

  }catch(error){
    throw error;
  }
}

export const getTimelinePosts = async (body) => {
  try {
    const currentUser = await UserModel.findById(body.userId);
    const userPosts = await PostModel.find({ userId: currentUser._id });

    console.log(currentUser, userPosts);

    const timelinePosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return PostModel.find({ userId: friendId });
      })
    );

    // Concatenate userPosts and timelinePosts into a single array
    const allPosts = userPosts.concat(...timelinePosts);

    return allPosts;
  } catch (error) {
    throw error;
  }
};

