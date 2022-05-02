import React from 'react';

interface AnnouncementProps {}

export const Announcement: React.FC<AnnouncementProps> = ({}) => {
  return (
    <div className="min-h-8 text-center bg-teal-500 text-white flex items-center justify-center">
      Super deal! Free Shipping on Orders over 50eur!
    </div>
  );
};
