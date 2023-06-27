const express = require("express");
const router = express.Router();
const { bookController } = require("../controllers");
const { authMiddleware } = require("../middlewares/authMiddleware");

router.get("/", bookController.findAllBooks);
router.get("/:id", bookController.findOneBook);
router.post("/create", authMiddleware, bookController.createBook);
router.put("/update/:id", authMiddleware, bookController.updateBook);
router.delete("/delete/:id", authMiddleware, bookController.deleteBook);

module.exports = router;
