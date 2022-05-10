import { NextApiResponse } from 'next';
import verifyToken, { verifyTokenAndAdmin } from '../../../../utils/verifyToken';
import { ExtendedRequest } from '../../../../types/types';
import User from '../../../../models/User';
import dbConnect from '../../../../utils/dbConnect';

export const handler = async (req: ExtendedRequest, res: NextApiResponse) => {
  await dbConnect();
  switch (req.method) {
    case 'GET':
      try {
        const user = await User.findById(req.query.id);
        const { password, ...rest } = user._doc;
        res.status(200).json(rest);
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    default:
      res.status(405).send('This method is not allowed!');
  }
};

export default verifyToken(verifyTokenAndAdmin(handler));
