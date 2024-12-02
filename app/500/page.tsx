export default function ServerError() {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">500 - Internal Server Error</h1>
        <p className="mt-4 text-gray-600">Something went wrong. Please try again later.</p>
        <a href="/" className="mt-6 px-4 py-2 bg-red-500 text-white rounded">Go to Homepage</a>
      </div>
    );
  }
  