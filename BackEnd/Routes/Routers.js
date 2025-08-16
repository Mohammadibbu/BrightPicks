const express = require("express");
const router = express.Router();
const brightPicksCategories = require("../Controllers/BrightpicksCatagories");
const brightPicksChannels = require("../Controllers/BrightPicksChannels");

// ----------------------------GET METHODS----------------------------

// CATAGORIES

router.get("/brightpicks/catagories", brightPicksCategories);

// CHANNELS

router.get("/brightpicks/channels", brightPicksChannels);

// CHANNELS BY SEARCH
router.get("/brightpicks/channels/:search", brightPicksChannels);
// CHANNELS BY LANGUAGE
router.get("/brightpicks/channels/:language", brightPicksChannels);
// CHANNELS BY TYPE
router.get("/brightpicks/channels/:level", brightPicksChannels);
// CHANNELS BY RATING
router.get("/brightpicks/channels/:rating", brightPicksChannels);

//-----------------------------POST METHODS----------------------------

//-----------------------------PUT METHODS----------------------------

// ----------------------------DELETE METHODS-----------------------------

module.exports = router;
