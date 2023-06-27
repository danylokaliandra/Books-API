const loggerMiddleware = (req, res, next) => {
  console.log(`Call made to resource ${req.url} with method ${req.method}`);
  if (req.headers.authorization) {
    console.log(`Authorization: ${req.headers.authorization}`);
  }
  console.log("Query:", req.query);
  console.log("Body:", req.body);
  console.log("Params:", req.params);

  next();
};

module.exports = loggerMiddleware;
