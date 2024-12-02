export default function Forbidden() {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">403 - Forbidden</h1>
        <p className="mt-4 text-gray-600">You do not have permission to access this page.</p>
        <a href="/" className="mt-6 px-4 py-2 bg-yellow-500 text-white rounded">Go to Homepage</a>
      </div>
    );
  }
  