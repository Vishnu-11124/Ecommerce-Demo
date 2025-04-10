import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* Hero left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
         <div className='text-[#414141]'>
            <div className="items-center flex gap-2">
                <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                <p className='font-medium text-sm md:text-basse'>OUR BESTSELLER</p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Hero
