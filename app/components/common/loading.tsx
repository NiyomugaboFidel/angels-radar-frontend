import Image from 'next/image'
import React from 'react'

const LoadingPage = () => {
  return (
    <div className='w-full h-full min-h-screen flex items-center justify-center flex-col gap-[6px]'>
        <div className='flex flex-col gap-4 justify-between items-center h-[200px]'>
        <div>
            <Image src="/logo.svg"  alt='angles-radar' width={43} height={43}/>
        </div>
        <div>
        <span className="absolute inset-0 flex items-center justify-center">
          <span className={`w-[53px] h-[53px] border-[4px]  border-t-[4px] rounded-t-full  " border-t-black/10 border-primaryColor  rounded-full animate-spin`}>
          </span>
        </span>
        </div>
        </div>
    </div>
  )
}

export default LoadingPage