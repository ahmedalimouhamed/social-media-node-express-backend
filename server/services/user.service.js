import bcrypt from 'bcrypt';
import UserModel from '../models/user.model.js';

export const updateUser = async(userId, updateData) => {
  try {
    if (updateData.password) {
      updateData.password = bcrypt.hashSync(updateData.password, 10);
    }

    const user = await UserModel.findByIdAndUpdate(userId, updateData, {
      new: true, 
    });

    return user;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
}

export const deleteUser = async (userId) => {
  try{
    await UserModel.findByIdAndDelete(userId);
  }catch(error){
    throw error
  }
}

export const getUserById = async(userId) => {
  try {
    const user = await UserModel.findById(userId);

    return user;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
}

export const getUsers = async() => {
  try {
    const users = await UserModel.find();

    return users;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
}

export const followUser = async (userData, updateData) => {
  try {
    if (userData.userId === updateData.id) {
      throw new Error("You cannot follow yourself");
    } else {
      const user = await UserModel.findById(userData.userId);
      const currentUser = await UserModel.findById(updateData.id);

      if (!user.followers.includes(updateData.id)) {
        await user.updateOne({
          $push: { followings: updateData.id }
        });

        await currentUser.updateOne({
          $push: { followers: userData.userId }
        });

        return { user, currentUser };
      } else {
        throw new Error("You have already followed this user");
      }
    }
  } catch (error) {
    throw error;
  }
}

export const unfollowUser = async (userData, updateData) => {
  try {
    if (userData.userId === updateData.id) {
      throw new Error("You cannot unfollow yourself");
    } else {
      const user = await UserModel.findById(userData.userId);
      const currentUser = await UserModel.findById(updateData.id);

      if (user.followers.includes(updateData.id)) {
        await user.updateOne({
          $pull: { followings: updateData.id }
        });

        await currentUser.updateOne({
          $pull: { followers: userData.userId }
        });

        return { user, currentUser };
      } else {
        throw new Error("You do not follow this user");
      }
    }
  } catch (error) {
    throw error;
  }
}
