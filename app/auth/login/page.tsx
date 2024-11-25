import LoginForm from '@/app/components/forms/LoginForm'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-center justify-center  w-full h-full lg:h-screen overflow-hidden'>
  
      <div className='p-5'>
      <LoginForm />
      </div>
      
    </div>
  )
}

export default page