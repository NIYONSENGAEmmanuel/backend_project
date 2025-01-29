const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
};

module.exports = authMiddleware;