const express = require("express");
const router = express.Router();

const AdminLogin = require("../Controllers/AdminControllers/AdminLogin");
const {
  AddChannels,
  EditChannel,
  DeleteChannel,
} = require("../Controllers/AdminControllers/AdminChannelControllers");

const {
  AddCategory,
  EditCategory,
  DeleteCategory,
} = require("../Controllers/AdminControllers/AdminCatagoriesController");
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

module.exports = router;
