import React from "react";
import Image from "next/image";
function DrinkCard({ drink }: { drink: Drink }) {
  return (
    <div className="flex flex-col h-64 bg-white hover:bg-gray-50 border border-gray-500 border-opacity-40 rounded-md shadow-md w-96 relative overflow-hidden">
      <Image
        src={`${drink.image}/preview`}
        alt={drink.name}
        className="absolute object-cover z-0 rounded-md object-top"
        width={384}
        height={240}
      />
      <div className="z-10 bg-black bg-opacity-60 w-full h-full text-white flex flex-col items-center justify-center ">
        <h1 className="text-xl font-bold">{drink.name}</h1>
        <span
          className={`${
            drink.alcoholic === "Alcoholic" ? "bg-red-500" : "bg-green-500"
          } text-white font-semibold px-2 py-1 rounded-md`}
        >
          {drink.alcoholic}
        </span>
        <h2 className="mt-3">{drink.category}</h2>
      </div>
    </div>
  );
}

export default DrinkCard;
