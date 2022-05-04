import { NextApiResponse } from 'next';
import { ExtendedRequest } from '../../../../types/types';
import Order from '../../../../models/Order';
import verifyToken, { verifyTokenAndAdmin, verifyTokenAndAuthorization } from '../../../../utils/verifyToken';

export const handler = async (req: ExtendedRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      try {
        const order = await Order.findOne({ userId: req.query.userId });
        res.status(200).json(order);
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    default:
      res.status(405).send('This method is not allowed!');
  }
};

export default verifyToken(verifyTokenAndAdmin(handler));
