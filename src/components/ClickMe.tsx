import React from 'react';
import Image from 'next/image';
import clImage from '@/components/images/Frame 600.png';

const ClickMe = () => {
  return (
    <div className='flex items-center justify-center mt-5 mb-10 w-full'>
      <Image 
        src={clImage} 
        alt="card" 
        layout="responsive" // Use responsive layout
        width={1117} // Original width
        height={600} // Original height
        className="max-w-[80%] h-auto" // Set maximum width to 70%
      />
    </div>
  );
};

export default ClickMe;
