import { NextApiResponse } from 'next';
import verifyToken, { verifyTokenAndAdmin } from '../../../utils/verifyToken';
import { ExtendedRequest } from '../../../types/types';
import Product from '../../../models/Product';
import dbConnect from '../../../utils/dbConnect';

export const handler = async (req: ExtendedRequest, res: NextApiResponse) => {
  await dbConnect();
  switch (req.method) {
    case 'POST':
      const newProduct = new Product(req.body);
      console.log(newProduct);
      try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    default:
      res.status(405).send('This method is not allowed!');
  }
};

export default verifyToken(verifyTokenAndAdmin(handler));
