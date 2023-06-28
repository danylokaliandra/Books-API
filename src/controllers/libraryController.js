const { libraryService } = require("../services");

const findAllLibraries = async (req, res) => {
  try {
    const libraries = await libraryService.findAllLibraries();
    res.status(200).json({ message: "Libraries found", libraries: libraries });
  } catch (err) {
    res.status(500).json({ action: "findAllLibraries", error: err });
  }
};

const findOneLibrary = async (req, res) => {
  try {
    const library = await libraryService.findOneLibrary(req.params.id);
    res.status(200).json({ message: "Library found", library: library });
  } catch (err) {
    res.status(500).json({ action: "findOneLibrary", error: err });
  }
};

const createLibrary = async (req, res) => {
  try {
    const libraryCreated = await libraryService.createLibrary(req.body);
    res
      .status(201)
      .json({ message: "Library saved successfully", library: libraryCreated });
  } catch (err) {
    res.status(500).json({ action: "createLibrary", error: err });
  }
};

const updateLibrary = async (req, res) => {
  try {
    await libraryService.updateLibrary(req.params.id, req.body);
    res.status(200).json({ message: "Library updated successfully" });
  } catch (err) {
    res.status(500).json({ action: "updateLibrary", error: err });
  }
};

const deleteLibrary = async (req, res) => {
  try {
    await libraryService.deleteLibrary(req.params.id);
    res.status(200).json({ message: "Library removed successfully" });
  } catch (err) {
    res.status(500).json({ action: "deleteLibrary", error: err });
  }
};

module.exports = {
  findAllLibraries,
  findOneLibrary,
  createLibrary,
  updateLibrary,
  deleteLibrary,
};
