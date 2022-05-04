import { NextApiResponse } from 'next';
import verifyToken, { verifyTokenAndAuthorization } from '../../../utils/verifyToken';
import { ExtendedRequest } from '../../../types/types';
import Cart from '../../../models/Cart';

export const handler = async (req: ExtendedRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'PUT':
      try {
        const updatedCart = await Cart.findByIdAndUpdate(req.query.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedCart);
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    case 'DELETE':
      try {
        await Cart.findByIdAndDelete(req.query.id);
        res.status(200).json(`Cart with id ${req.query.id} was deleted!`);
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    default:
      res.status(405).send('This method is not allowed!');
  }
};

export default verifyToken(verifyTokenAndAuthorization(handler));
