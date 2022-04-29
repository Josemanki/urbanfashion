import React from 'react';

interface AnnouncementProps {}

export const Announcement: React.FC<AnnouncementProps> = ({}) => {
  return (
    <div className="h-8 bg-teal-500 text-white flex items-center justify-center">
      Super deal! Free Shipping on Orders over 50eur!
    </div>
  );
};
