"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="text-white bg-red-500 p-10 rounded-sm w-full h-32 flex flex-col justify-center items-center">
      <p>
        Couldn't find the drink, that may happen because of invalid ID or server
        issues. try to pick another drink or try again later.
      </p>
      <Link href="/" className="bg-green-500 block rounded-md px-2 py-1">
        Home
      </Link>
    </div>
  );
}
