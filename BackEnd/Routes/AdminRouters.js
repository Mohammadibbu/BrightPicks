import { Router } from "express";
const router = Router();

import AdminLogin from "../Controllers/AdminControllers/AdminLogin.js";
import {
  AddChannels,
  EditChannel,
  DeleteChannel,
} from "../Controllers/AdminControllers/AdminChannelControllers.js";

import {
  AddCategory,
  EditCategory,
  DeleteCategory,
} from "../Controllers/AdminControllers/AdminCatagoriesController.js";
// ----------------------------GET METHODS----------------------------

//-----------------------------POST METHODS----------------------------

// login to admin panel
router.post("/brightpicks/admin/login", AdminLogin);

// Add a new channel
router.post("/brightpicks/admin/channel/addchannel", AddChannels);
//Add a new category
router.post("/brightpicks/admin/category/addcategory", AddCategory);

//-----------------------------PUT METHODS----------------------------

//Edit a channel
router.put("/brightpicks/admin/channel/p/:channelId", EditChannel);

// Edit a category
router.put("/brightpicks/admin/category/p/:categoryId", EditCategory);

// ----------------------------DELETE METHODS-----------------------------

//delete a channel
router.delete("/brightpicks/admin/channel/d/:channelId", DeleteChannel);

// Delete a category
router.delete("/brightpicks/admin/category/d/:categoryId", DeleteCategory);

export default router;
