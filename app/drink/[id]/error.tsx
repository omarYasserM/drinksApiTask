"use client";

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
    <div className="text-white bg-red-500 p-10 rounded-sm w-full h-32">
      <p>There was an error fetching the data</p>
      <button className="" onClick={() => reset()}>
        Reset error boundary
      </button>
    </div>
  );
}
