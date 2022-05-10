import { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../models/User';
import CryptoJS from 'crypto-js';
import dbConnect from '../../../utils/dbConnect';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  switch (req.method) {
    case 'POST':
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        name: req.body.name,
        lastName: req.body.lastName,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET).toString(),
      });

      if (!newUser.username || !newUser.email || !newUser.password) {
        res.status(400).json('Some fields are missing, please check all mandatory fields are filled.');
      }

      try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    default:
      res.status(405).send('This method is not allowed!');
  }
};

export default handler;
