import { NextApiResponse } from 'next';
import { ExtendedRequest, IProduct } from '../../../../types/types';
import Product from '../../../../models/Product';

export const handler = async (req: ExtendedRequest, res: NextApiResponse) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  switch (req.method) {
    case 'GET':
      try {
        let products: IProduct[];

        if (qNew) {
          products = await Product.find().sort({ createdAt: -1 }).limit(5);
        } else if (qCategory) {
          products = await Product.find({
            categories: {
              $in: [qCategory],
            },
          });
        } else {
          products = await Product.find();
        }

        res.status(200).json(products);
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    default:
      res.status(405).send('This method is not allowed!');
  }
};

export default handler;
