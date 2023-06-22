const { libraryProvider } = require("../providers");

const findAllLibraries = async () => {
  try {
    const libraries = await libraryProvider.findAllLibraries();
    if (!libraries) throw `No libraries found`;
    return libraries;
  } catch (err) {
    throw err;
  }
};

const findOneLibrary = async (id) => {
  try {
    const library = await libraryProvider.findOneLibrary(id);
    if (!library) throw `Library with id ${id} does not exist`;
    return library;
  } catch (err) {
    throw err;
  }
};

const createLibrary = async (body) => {
  try {
    const libraryCreated = await libraryProvider.createLibrary(body);
    return libraryCreated;
  } catch (err) {
    throw err;
  }
};

const updateLibrary = async (id, body) => {
  const library = await libraryProvider.findOneLibrary(id);
  if (!library) throw `Library with id ${id} does not exist`;
  try {
    await libraryProvider.updateLibrary(library, body);
    return true;
  } catch (err) {
    throw err;
  }
};

const deleteLibrary = async (id) => {
  const library = await libraryProvider.findOneLibrary(id);
  if (!library) throw `Library with id ${id} does not exist`;
  try {
    await libraryProvider.deleteLibrary(library);
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
