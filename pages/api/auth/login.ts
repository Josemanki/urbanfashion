import { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../models/User';
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(401).json('Wrong credentials');

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET);
        const password = hashedPassword.toString(CryptoJS.enc.Utf8);
        password !== req.body.password && res.status(401).json('Wrong credentials');

        const accessToken = jwt.sign(
          {
            id: user.id,
            isAdmin: user.isAdmin,
          },
          process.env.JWT_SECRET,
          { expiresIn: '3d' }
        );

        const { password: passwordHash, ...rest } = user._doc;
        res.status(200).json({ ...rest, accessToken });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
      break;
    default:
      res.status(405).send('This method is not allowed!');
  }
};

export default handler;
