import Image from "next/image";

export default function NotFound() {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
          <div className="py-6">
            <Image src="/logo.svg"  alt='angles-radar' width={33} height={33}/>
        </div>
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="mt-4 text-gray-600">Sorry, the page you're looking for does not exist.</p>
        <a href="/" className="mt-6 px-4 py-2 bg-primaryColor text-white rounded">Go to Homepage</a>
      </div>
    );
  }
  