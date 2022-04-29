import { Send } from '@material-ui/icons';
import React from 'react';

interface NewsletterProps {}

export const Newsletter: React.FC<NewsletterProps> = ({}) => {
  return (
    <div className="h-[60vh] bg-orange-50 flex flex-col items-center justify-center gap-4">
      <h2 className="text-7xl font-bold">Newsletter</h2>
      <p className="text-2xl">Get timely updates on your favorite products.</p>
      <div className="w-2/4 h-10 bg-white flex justify-between">
        <input className="border flex-[8_8_0%] pl-8" placeholder="Your email address" type="email" />
        <button className="flex-1 bg-teal-500 text-white border-0">
          <Send />
        </button>
      </div>
    </div>
  );
};
