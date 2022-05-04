import { NextApiRequest, NextApiResponse } from 'next';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    res.send('Live and breathing!');
  } else {
    res.send('You can only send GET requests here.');
  }
};

export default handler;
