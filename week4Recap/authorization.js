const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; //Bearer <token>
  if (!token) return res.status(401).send('No valid token provided');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).send('Invalid Token');
  }
};

const authorize = roles => {
  return (req, res, next) => {
    if (!roles.includes(req.user.roles)) {
      return res.status(403).send('Acess Denied');
    }
    next();
  };
};
