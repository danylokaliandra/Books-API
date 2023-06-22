const express = require("express");
const router = express.Router();
const { libraryController } = require("../controllers");

router.get("/", libraryController.findAllLibraries);
router.get("/:id", libraryController.findOneLibrary);
router.post("/create", libraryController.createLibrary);
router.put("/update/:id", libraryController.updateLibrary);
router.delete("/delete/:id", libraryController.deleteLibrary);

module.exports = router;
