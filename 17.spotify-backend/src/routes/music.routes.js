const express = require("express");
const router = express.Router();
const multer = require("multer");
const authmiddleware = require("../middlewares/auth.middleware");
const upload = multer({
  storage : multer.memoryStorage()
});
const musicControllers = require("../controllers/music.controller");

router.post("/upload",authmiddleware.authArtist,upload.single("music"),musicControllers.createMusic);

router.post("/album",authmiddleware.authArtist,musicControllers.createAlbum);

router.get("/",authmiddleware.authUser,musicControllers.getAllMusic)

router.get("albums",authmiddleware.authUser,musicControllers.getAllAlbums)

router.get("/albums/:albumId",authmiddleware.authUser,musicControllers.getAlbumById)

module.exports = router;