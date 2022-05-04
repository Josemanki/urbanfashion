import { verify, JwtPayload } from 'jsonwebtoken';
import { NextApiHandler, NextApiResponse } from 'next';
import { ExtendedRequest } from '../types/types';

const verifyToken = (handler: NextApiHandler) => {
  return async (req: ExtendedRequest, res: NextApiResponse) => {
    const authHeader = req.headers.token as string;
    if (authHeader) {
      const token = authHeader.split(' ')[1];
      verify(token, process.env.JWT_SECRET, async (err, user) => {
        console.log('token');
        if (err) res.status(403).json('Token is not valid!');
        req.user = user as JwtPayload;
        handler(req, res);
      });
    } else {
      return res.status(401).json('You are not authenticated!');
    }
  };
};

export const verifyTokenAndAuthorization = (handler: NextApiHandler) => {
  return (req: ExtendedRequest, res: NextApiResponse) => {
    if (req.user.id === req.query.id || req.user.isAdmin) {
      console.log('tokenauth');
      handler(req, res);
    } else {
      res.status(403).json('You are not allowed to do that!');
    }
  };
};

export const verifyTokenAndAdmin = (handler: NextApiHandler) => {
  return (req: ExtendedRequest, res: NextApiResponse) => {
    if (req.user.isAdmin) {
      handler(req, res);
    } else {
      res.status(403).json('You are not allowed to do that!');
    }
  };
};

export default verifyToken;
