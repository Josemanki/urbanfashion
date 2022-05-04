import { NextApiResponse } from 'next';
import { ExtendedRequest } from '../../../../types/types';
import Cart from '../../../../models/Cart';
import verifyToken, { verifyTokenAndAuthorization } from '../../../../utils/verifyToken';

export const handler = async (req: ExtendedRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      try {
        const carts = await Cart.find();
        res.status(200).json(carts);
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    default:
      res.status(405).send('This method is not allowed!');
  }
};

export default verifyToken(verifyTokenAndAuthorization(handler));
