import { NextApiResponse } from 'next';
import { ExtendedRequest } from '../../../types/types';
import Cart from '../../../models/Cart';

export const handler = async (req: ExtendedRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      const newCart = new Cart(req.body);
      try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    default:
      res.status(405).send('This method is not allowed!');
  }
};

export default handler;
