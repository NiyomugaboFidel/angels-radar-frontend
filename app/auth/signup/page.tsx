import SignUpForm from '@/app/components/forms/SignUpForm'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-center justify-center  w-ful h-full lg:h-[120vh] overflow-hidden'>
  
      <div className='p-5'>
      <SignUpForm />
      </div>
      
    </div>
  )
}

export default page