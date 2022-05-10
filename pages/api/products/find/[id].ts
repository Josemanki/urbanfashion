import { NextApiResponse } from 'next';
import { ExtendedRequest } from '../../../../types/types';
import Product from '../../../../models/Product';
import dbConnect from '../../../../utils/dbConnect';

export const handler = async (req: ExtendedRequest, res: NextApiResponse) => {
  await dbConnect();
  switch (req.method) {
    case 'GET':
      try {
        const product = await Product.findById(req.query.id);
        res.status(200).json(product);
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    default:
      res.status(405).send('This method is not allowed!');
  }
};

export default handler;
