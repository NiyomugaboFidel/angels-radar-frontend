import React from 'react';

interface PageProps {
  params: {
    [key: string]: string | string[];
  };
}

const Page: React.FC<PageProps> = async ({ params }) => {
  return (
    <div>
      <h1>Dynamic Route Parameters</h1>
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </div>
  );
};

export default Page;