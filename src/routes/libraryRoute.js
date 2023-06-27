const express = require("express");
const router = express.Router();
const { libraryController } = require("../controllers");
const { authMiddleware } = require("../middlewares/authMiddleware");

router.get("/", libraryController.findAllLibraries);
router.get("/:id", libraryController.findOneLibrary);
router.post("/create", authMiddleware, libraryController.createLibrary);
router.put("/update/:id", authMiddleware, libraryController.updateLibrary);
router.delete("/delete/:id", authMiddleware, libraryController.deleteLibrary);

module.exports = router;
