import { NextApiResponse } from 'next';
import verifyToken, { verifyTokenAndAdmin } from '../../../utils/verifyToken';
import { ExtendedRequest } from '../../../types/types';
import User from '../../../models/User';

export const handler = async (req: ExtendedRequest, res: NextApiResponse) => {
  const query = req.query.new;
  switch (req.method) {
    case 'GET':
      try {
        const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find();
        res.status(200).json(users);
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    default:
      res.status(405).send('This method is not allowed!');
  }
};

export default verifyToken(verifyTokenAndAdmin(handler));
