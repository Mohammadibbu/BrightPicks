// ClientRoutes.js
import { Router } from "express";
const router = Router();
import { clientEndPoints as clientRoutes } from "../utils/EndPoints.js"; // Import the client endpoints
import brightPicksCategories from "../Controllers/ClientControllers/BrightpicksCatagories.js";
import brightPicksChannels from "../Controllers/ClientControllers/BrightPicksChannels.js";

// ----------------------------GET METHODS----------------------------

// Categories
router.get(clientRoutes.brightPicksCategoriesEndpoint, brightPicksCategories);

// Channels
router.get(clientRoutes.brightPicksChannelsEndpoint, brightPicksChannels);

// Channels by Search
router.get(clientRoutes.brightPicksChannelsSearchEndpoint, brightPicksChannels);

// Channels by Language
router.get(
  clientRoutes.brightPicksChannelsLanguageEndpoint,
  brightPicksChannels
);

// Channels by Level
router.get(clientRoutes.brightPicksChannelsLevelEndpoint, brightPicksChannels);

// Channels by Category
router.get(
  clientRoutes.brightPicksChannelsCategoryEndpoint,
  brightPicksChannels
);

// Channels by Rating
router.get(clientRoutes.brightPicksChannelsRatingEndpoint, brightPicksChannels);

//-----------------------------POST METHODS----------------------------

//-----------------------------PUT METHODS----------------------------

// ----------------------------DELETE METHODS-----------------------------

export default router;
