import EmailVerification from '@/app/components/forms/EmailVerifyForm'
export const dynamic = "force-dynamic";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      <EmailVerification />
    </Suspense>
    
    </div>
  )
}

export default page
