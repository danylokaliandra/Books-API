const { Library, Book } = require("../models");

const findAllLibraries = async () => {
  try {
    const libraries = await Library.findAll({
      where: { isDeleted: false },
      include: Book,
      attributes: {
        exclude: ["isDeleted", "createdAt", "updatedAt"],
      },
    });
    return libraries;
  } catch (err) {
    throw err;
  }
};

const findOneLibrary = async (id) => {
  try {
    const library = await Library.findOne({
      where: { id, isDeleted: false },
      include: Book,
      attributes: {
        exclude: ["isDeleted", "createdAt", "updatedAt"],
      },
    });
    return library;
  } catch (err) {
    throw err;
  }
};

const createLibrary = async (body) => {
  try {
    const libraryCreated = await Library.create(body);
    return libraryCreated;
  } catch (err) {
    throw err;
  }
};

const updateLibrary = async (library, body) => {
  try {
    await Library.update(body, { where: { id: library.id } });
    return true;
  } catch (err) {
    throw err;
  }
};

const deleteLibrary = async (library) => {
  try {
    await Library.update({ isDeleted: true }, { where: { id: library.id } });
    return true;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  findAllLibraries,
  findOneLibrary,
  createLibrary,
  updateLibrary,
  deleteLibrary,
};
