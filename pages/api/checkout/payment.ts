import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../utils/dbConnect';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  switch (req.method) {
    case 'POST':
      stripe.charges.create(
        {
          source: req.body.tokenId,
          amount: req.body.amount,
          currency: 'eur',
        },
        (stripeErr, stripeRes) => {
          if (stripeErr) {
            res.status(500).json(stripeErr);
          } else {
            res.status(200).json(stripeRes);
          }
        }
      );

      break;
    default:
      res.status(405).send('This method is not allowed!');
  }
};

export default handler;
