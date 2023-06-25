const express = require("express");
const router = express.Router();
const { bookController } = require("../controllers");

router.get("/", bookController.findAllBooks);
router.get("/:id", bookController.findOneBook);
router.post("/create", bookController.createBook);
router.put("/update/:id", bookController.updateBook);
router.delete("/delete/:id", bookController.deleteBook);

module.exports = router;
