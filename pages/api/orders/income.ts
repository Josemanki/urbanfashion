import { NextApiResponse } from 'next';
import Order from '../../../models/Order';
import { ExtendedRequest } from '../../../types/types';
import dbConnect from '../../../utils/dbConnect';
import verifyToken, { verifyTokenAndAdmin } from '../../../utils/verifyToken';

export const handler = async (req: ExtendedRequest, res: NextApiResponse) => {
  await dbConnect();
  switch (req.method) {
    case 'GET':
      const date = new Date();
      const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
      const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
      try {
        const income = await Order.aggregate([
          { $match: { createdAt: { $gte: previousMonth } } },
          {
            $project: {
              month: { $month: '$createdAt' },
              sales: '$amount',
            },
          },
          {
            $group: {
              _id: '$month',
              total: { $sum: '$sales' },
            },
          },
        ]);
        res.status(200).json(income);
        // res.status(200).json();
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    default:
      res.status(405).send('This method is not allowed!');
  }
};

export default verifyToken(verifyTokenAndAdmin(handler));
