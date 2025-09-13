// Router.js
import { Router } from "express";
const router = Router();
import { adminEndPoints as adminRoutes } from "../utils/EndPoints.js"; // Import the endpoints from Endpoint.js
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

// ----------------------------POST METHODS----------------------------

// login to admin panel
router.post(adminRoutes.adminLoginEndpoint, AdminLogin);

// Add a new channel
router.post(adminRoutes.addChannelEndpoint, AddChannels);

// Add a new category
router.post(adminRoutes.addCategoryEndpoint, AddCategory);

// -----------------------------PUT METHODS----------------------------

// Edit a channel
router.put(adminRoutes.editChannelEndpoint, EditChannel);

// Edit a category
router.put(adminRoutes.editCategoryEndpoint, EditCategory);

// ----------------------------DELETE METHODS----------------------------

// delete a channel
router.delete(adminRoutes.deleteChannelEndpoint, DeleteChannel);

// Delete a category
router.delete(adminRoutes.deleteCategoryEndpoint, DeleteCategory);

export default router;
