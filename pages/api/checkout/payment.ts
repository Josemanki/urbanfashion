import { NextApiRequest, NextApiResponse } from 'next';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export const handler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      console.log(`Received payload of ${req.body.tokenId} and ${req.body.amount}`);
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
