const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");

router.get("/", userController.findAllUsers);
router.get("/:id", userController.findOneUser);
router.post("/create", userController.createUser);
router.put("/update/:id", userController.updateUser);
router.delete("/delete/:id", userController.deleteUser);

module.exports = router;
