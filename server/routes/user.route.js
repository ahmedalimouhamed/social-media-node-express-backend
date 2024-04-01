import express from "express";
import { 
  deleteUserController, 
  getUserByIdController, 
  updateUserController, 
  getAllUsersController,
  followUserController,
  unfollowUserController
} from "../controllers/user.controller.js";

const router = express.Router();

router.put("/:id", updateUserController);
router.delete("/:id", deleteUserController);
router.get("/:id", getUserByIdController);
router.get("/", getAllUsersController);
router.put("/follow/:id", followUserController);
router.put("/unfollow/:id", unfollowUserController);

export default router;
