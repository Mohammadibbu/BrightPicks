//=========================ADMIN ENDPOINTS====================================

const adminLoginEndpoint = "/brightpicks/admin/login";

// Channel Endpoints
const addChannelEndpoint = "/brightpicks/admin/channel/addchannel";
const editChannelEndpoint = "/brightpicks/admin/channel/p/:channelId";
const deleteChannelEndpoint = "/brightpicks/admin/channel/d/:channelId";

// Category Endpoints
const addCategoryEndpoint = "/brightpicks/admin/category/addcategory";
const editCategoryEndpoint = "/brightpicks/admin/category/p/:categoryId";
const deleteCategoryEndpoint = "/brightpicks/admin/category/d/:categoryId";

//Add admin
const AddadminEndPoint = "/brightpicks/admin/addAdmin";
//DeleteAdmin
const DeleteAdminEndPoint = "/brightpicks/admin/d/:AdminId";
//Edit Admin Role

const EditAdminRole = "/brightpicks/admin/p/:AdminId";

//=========================CLIENT ENDPOINTS====================================

// Categories
const brightPicksCategoriesEndpoint = "/brightpicks/categories";

// Channels
const brightPicksChannelsEndpoint = "/brightpicks/channels";
const brightPicksChannelsSearchEndpoint = "/brightpicks/channels/:search";
const brightPicksChannelsLanguageEndpoint = "/brightpicks/channels/:language";
const brightPicksChannelsLevelEndpoint = "/brightpicks/channels/:level";
const brightPicksChannelsCategoryEndpoint = "/brightpicks/channels/:category";
const brightPicksChannelsRatingEndpoint = "/brightpicks/channels/:rating";

//=========================ADMIN ENDPOINTS====================================
const adminEndPoints = {
  // AdminLogin EP
  adminLoginEndpoint,
  addChannelEndpoint,
  editChannelEndpoint,
  deleteChannelEndpoint,
  addCategoryEndpoint,
  editCategoryEndpoint,
  deleteCategoryEndpoint,
  //add admin EP
  AddadminEndPoint,
  DeleteAdminEndPoint,
  //edit admin Role
  EditAdminRole,
};

//=========================CLIENT ENDPOINTS====================================
const clientEndPoints = {
  brightPicksCategoriesEndpoint,
  brightPicksChannelsEndpoint,
  brightPicksChannelsSearchEndpoint,
  brightPicksChannelsLanguageEndpoint,
  brightPicksChannelsLevelEndpoint,
  brightPicksChannelsCategoryEndpoint,
  brightPicksChannelsRatingEndpoint,
};
export { adminEndPoints, clientEndPoints };
