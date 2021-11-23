import { errorResponse, successResponse } from '../helpers';
import Users from '../models/Users';

const jwt = require('jsonwebtoken');

const apiAuth = async (req, res, next) => {
  if (!(req.headers && req.headers.authorization)) {
    return errorResponse(req, res, 'Token is not provided', 401);
  }
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded.user;
    const user = await Users.findOne({ email: req.user.email });
    if (!user) {
      return errorResponse(req, res, 'User is not found in system', 401);
    }
    const time1 = new Date(user.lastLogin).getTime();
    const time2 = new Date(decoded.user.createdAt).getTime();
    if (time1 !== time2) {
      return errorResponse(req, res, 'Incorrect token is provided, try re-login', 401);
    }
    const reqUser = { ...user.toObject() };
    reqUser.userId = user.id;
    // delete reqUser.id;
    req.user = reqUser;
    return next();
  } catch (error) {
    return errorResponse(
      req,
      res,
      'Incorrect token is provided, try re-login',
      401,
    );
  }
};

export default apiAuth;
