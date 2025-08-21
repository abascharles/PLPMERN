const authorize = roles => {
  return (req, res, next) => {
    if (!roles.includes(req.user.roles)) {
      return res.status(403).send('Acess Denied');
    }
    next();
  };
};
