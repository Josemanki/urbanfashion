import { NextApiResponse } from 'next';
import verifyToken, { verifyTokenAndAdmin } from '../../../utils/verifyToken';
import { ExtendedRequest } from '../../../types/types';
import User from '../../../models/User';

export const handler = async (req: ExtendedRequest, res: NextApiResponse) => {
  const query = req.query.new;
  switch (req.method) {
    case 'GET':
      const date = new Date();
      const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
      try {
        const data = await User.aggregate([
          { $match: { createdAt: { $gte: lastYear } } },
          {
            $project: {
              month: { $month: '$createdAt' },
            },
          },
          {
            $group: {
              _id: '$month',
              total: { $sum: 1 },
            },
          },
        ]);
        res.status(200).json(data);
        break;
      } catch (err) {
        res.status(500).json(err);
      }
    default:
      res.status(405).send('This method is not allowed!');
  }
};

export default verifyToken(verifyTokenAndAdmin(handler));
