import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../utils/dbConnect';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
};

export default handler;
