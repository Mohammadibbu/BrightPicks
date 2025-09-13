// Router.js
import { Router } from "express";
const router = Router();
import { adminEndPoints as adminRoutes } from "../utils/EndPoints.js"; // Import the endpoints from Endpoint.js
import {
  AdminLogin,
  Addadmin,
  DeleteAdmin,
  EditAdminRole,
} from "../Controllers/AdminControllers/AdminControllers.js";
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

import { AdminAuth, isSuperAdmin } from "../middlewares/AdminAuth.js";
// ----------------------------POST METHODS----------------------------

// login to admin panel
router.post(adminRoutes.adminLoginEndpoint, AdminLogin);

// Add a new channel
router.post(adminRoutes.addChannelEndpoint, AdminAuth, AddChannels);
AdminAuth,
  // Add a new category
  router.post(adminRoutes.addCategoryEndpoint, AdminAuth, AddCategory);

// Add admin
router.post(adminRoutes.AddadminEndPoint, AdminAuth, isSuperAdmin, Addadmin);
// -----------------------------PUT METHODS----------------------------

// Edit a channel
router.put(adminRoutes.editChannelEndpoint, AdminAuth, EditChannel);

// Edit a category
router.put(adminRoutes.editCategoryEndpoint, AdminAuth, EditCategory);
// Edit admin Role
router.put(adminRoutes.EditAdminRole, AdminAuth, isSuperAdmin, EditAdminRole);
// ----------------------------DELETE METHODS----------------------------

// delete a channel
router.delete(adminRoutes.deleteChannelEndpoint, AdminAuth, DeleteChannel);

// Delete a category
router.delete(adminRoutes.deleteCategoryEndpoint, AdminAuth, DeleteCategory);

//Delte a Admin
router.delete(
  adminRoutes.DeleteAdminEndPoint,
  AdminAuth,
  isSuperAdmin,
  DeleteAdmin
);

export default router;
