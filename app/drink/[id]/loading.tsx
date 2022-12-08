import React from "react";

function Loading() {
  return (
    <div className="max-w-4xl mx-auto text-3xl border shadow-md h-96 flex rounded-md w-full">
      <div className="w-52 bg-gray-300 animate-pulse"></div>
      <div className="px-10 w-full space-y-8">
        <h1 className="w-24 h-14 block bg-gray-300 rounded-md "></h1>
        <span
          className={`bg-gray-300 font-semibold w-20 h-10 rounded-md block`}
        ></span>
        <div className="w-full">
          <div className="w-full h-4 bg-gray-300 rounded-md mb-2"></div>
          <div className="w-full h-4 bg-gray-300 rounded-md mb-2"></div>
          <div className="w-full h-4 bg-gray-300 rounded-md mb-2"></div>
          <div className="w-1/2 h-4 bg-gray-300 rounded-md mb-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
