import { Router } from "express";
const router = Router();
import brightPicksCategories from "../Controllers/ClientControllers/BrightpicksCatagories.js";
import brightPicksChannels from "../Controllers/ClientControllers/BrightPicksChannels.js";

// ----------------------------GET METHODS----------------------------

// CATAGORIES

router.get("/brightpicks/categories", brightPicksCategories);

// CHANNELS

router.get("/brightpicks/channels", brightPicksChannels);

// CHANNELS BY SEARCH
router.get("/brightpicks/channels/:search", brightPicksChannels);
// CHANNELS BY LANGUAGE
router.get("/brightpicks/channels/:language", brightPicksChannels);
// CHANNELS BY TYPE
router.get("/brightpicks/channels/:level", brightPicksChannels);
// CHANNELS BY CATEGORY
router.get("/brightpicks/channels/:category", brightPicksChannels);
// CHANNELS BY RATING
router.get("/brightpicks/channels/:rating", brightPicksChannels);

//-----------------------------POST METHODS----------------------------

//-----------------------------PUT METHODS----------------------------

// ----------------------------DELETE METHODS-----------------------------

export default router;
