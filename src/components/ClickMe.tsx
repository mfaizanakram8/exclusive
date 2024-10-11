import React from 'react';
import Image from 'next/image';
import clImage from '@/components/images/Frame 600.png';

const ClickMe = () => {
  return (
    <div className='flex items-center justify-center mt-5 mb-10 w-full'>
      <Image 
        src={clImage} 
        alt="card" 
        layout="responsive" 
        width={1117} 
        height={600} 
        className="max-w-[80%] h-auto"
      />
    </div>
  );
};

export default ClickMe;
