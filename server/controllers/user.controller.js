import { 
  updateUser, 
  deleteUser, 
  getUserById, 
  getUsers,
  followUser,
  unfollowUser
} from "../services/user.service.js";

export const updateUserController = async (req, res) => {
  if(req.body.userId === req.params.id || req.body.isAdmin){
    try{
      const user = await updateUser(req.params.id, req.body);
  
      res.status(200).json({
        user,
        message: "Account has been updated successfully",
      })
    }catch(error){
      console.log(error);
      res.status(500).json(error);
    }
  }else{
    res.status(500).json({message: "you can only update your account"});
  }
};

export const deleteUserController = async (req, res) => {
  if(req.body.userId === req.params.id || req.body.isAdmin){
    try{
      await deleteUser(req.params.id);

      res.status(200).json({
        message: "Account has been deleted successfully",
      })
    }catch(error){
      console.log(error);
      res.status(500).json(error);
    }
  }else{
    res.status(500).json({message: "you can only update your account"});
  }
};

export const getUserByIdController = async (req, res) => {
  try{
    console.log(req.body);
    const user = await getUserById(req.params.id);

    res.status(200).json(user)
  }catch(error){
    console.log(error);
    res.status(500).json(error);
  }
};

export const getAllUsersController = async (req, res) => {
  try{
    console.log(req.body);
    const users = await getUsers();

    res.status(200).json(users)
  }catch(error){
    console.log(error);
    res.status(500).json(error);
  }
};


export const followUserController = async (req, res) => {
  try{
    const data = await followUser(req.body, req.params);

    res.status(200).json({
      data,
      message: 'followers has been fetched successfully'
    })
  }catch(error){
    console.log(error);
    res.status(500).json(error);
  }
};

export const unfollowUserController = async (req, res) => {
  try{
    const data = await unfollowUser(req.body, req.params);

    res.status(200).json({
      data,
      message: 'followers has been updated successfully'
    })
  }catch(error){
    console.log(error);
    res.status(500).json(error);
  }
};