'use client';

import { useParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  // Use useParams hook to access route parameters
  const params = useParams();

  // Optional: Log params for debugging
  useEffect(() => {
    console.log('Current Params:', params);
  }, [params]);

  return (
    <div>
      <h1>Dynamic Route Parameters</h1>
      
      {/* Display all params */}
      <pre>{JSON.stringify(params, null, 2)}</pre>
      
      {/* Extract specific param values */}
      {params.name && (
        <p>Company Name: {params.name}</p>
      )}
    </div>
  );
}