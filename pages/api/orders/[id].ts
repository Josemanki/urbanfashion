import { NextApiResponse } from 'next';
import verifyToken, { verifyTokenAndAdmin, verifyTokenAndAuthorization } from '../../../utils/verifyToken';
import { ExtendedRequest } from '../../../types/types';
import Order from '../../../models/Order';
import dbConnect from '../../../utils/dbConnect';

export const handler = async (req: ExtendedRequest, res: NextApiResponse) => {
  await dbConnect();
  switch (req.method) {
    case 'PUT':
      try {
        const updatedOrder = await Order.findByIdAndUpdate(req.query.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedOrder);
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    case 'DELETE':
      try {
        await Order.findByIdAndDelete(req.query.id);
        res.status(200).json(`Order with id ${req.query.id} was deleted!`);
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    default:
      res.status(405).send('This method is not allowed!');
  }
};

export default verifyToken(verifyTokenAndAdmin(handler));
