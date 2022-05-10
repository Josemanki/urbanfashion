import { NextApiResponse } from 'next';
import verifyToken, { verifyTokenAndAuthorization } from '../../../utils/verifyToken';
import { ExtendedRequest } from '../../../types/types';
import User from '../../../models/User';
import CryptoJS from 'crypto-js';
import dbConnect from '../../../utils/dbConnect';

export const handler = async (req: ExtendedRequest, res: NextApiResponse) => {
  await dbConnect();
  switch (req.method) {
    case 'PUT':
      if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET).toString();
      }
      try {
        const updatedUser = await User.findByIdAndUpdate(
          req.query.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        const { password, ...rest } = updatedUser._doc;
        res.status(200).json(rest);
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    case 'DELETE':
      try {
        await User.findByIdAndDelete(req.query.id);
        res.status(200).json('User has been deleted');
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    default:
      res.status(405).send('This method is not allowed!');
  }
};

export default verifyToken(verifyTokenAndAuthorization(handler));
