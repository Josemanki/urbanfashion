import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import Image from 'next/image';
import { sliderData } from '../data';
import React, { useState } from 'react';
import { Slide } from './Slide';

interface SliderProps {}

export const Slider: React.FC<SliderProps> = ({}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="hidden w-full h-screen relative overflow-hidden md:flex">
      <div
        onClick={() => handleClick('left')}
        className="w-12 h-12 z-10 rounded-full bg-neutral-200 cursor-pointer flex items-center justify-center absolute top-0 bottom-0 m-auto left-4 opacity-50"
      >
        <ArrowLeft />
      </div>
      <div
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
        className={`h-full flex transition-all duration-1000`}
      >
        {sliderData.map((slideProps) => (
          <Slide {...slideProps} key={slideProps.id} />
        ))}
      </div>
      <div
        onClick={() => handleClick('right')}
        className="w-12 h-12 z-10 rounded-full cursor-pointer bg-neutral-200 flex items-center justify-center absolute top-0 bottom-0 m-auto right-4 opacity-50"
      >
        <ArrowRight />
      </div>
    </div>
  );
};
