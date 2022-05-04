import { NextApiResponse } from 'next';
import verifyToken, { verifyTokenAndAdmin } from '../../../utils/verifyToken';
import { ExtendedRequest } from '../../../types/types';
import Product from '../../../models/Product';

export const handler = async (req: ExtendedRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'PUT':
      try {
        const updatedProduct = await Product.findByIdAndUpdate(req.query.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedProduct);
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    case 'DELETE':
      try {
        await Product.findByIdAndDelete(req.query.id);
        res.status(200).json(`Product with id ${req.query.id} was deleted!`);
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    default:
      res.status(405).send('This method is not allowed!');
  }
};

export default verifyToken(verifyTokenAndAdmin(handler));
