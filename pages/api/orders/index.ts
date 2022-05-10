import { NextApiResponse } from 'next';
import { ExtendedRequest } from '../../../types/types';
import Order from '../../../models/Order';
import verifyToken from '../../../utils/verifyToken';
import dbConnect from '../../../utils/dbConnect';

export const handler = async (req: ExtendedRequest, res: NextApiResponse) => {
  await dbConnect();
  switch (req.method) {
    case 'POST':
      const newOrder = new Order(req.body);
      try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    default:
      res.status(405).send('This method is not allowed!');
  }
};

export default handler;
