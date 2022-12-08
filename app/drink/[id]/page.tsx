import Image from "next/image";
import React from "react";

async function getDrink(drinkID: string) {
  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`,
    { next: { revalidate: 10 } }
  );
  const data = await res.json();
  return data.drinks[0];
}

async function page({ params }: { params: { id: string } }) {
  const res: any = await getDrink(params.id);
  const drink: Drink = {
    name: res.strDrink,
    id: res.idDrink,
    category: res.strCategory,
    alcoholic: res.strAlcoholic,
    image: res.strDrinkThumb,
    instructions: res.strInstructions,
  };
  console.log(drink);
  return (
    <div className="max-w-4xl mx-auto text-3xl border shadow-md h-96 flex flex-col sm:flex-row rounded-md w-full overflow-hidden">
      <Image
        src={drink.image}
        alt={drink.name}
        className="w-full h-24 md:h-full object-cover overflow-hidden"
        width={208}
        height={384}
      />
      <div className="px-10 w-full py-4 space-y-8 items-center text-center md:items-start md:text-start">
        <h1 className="text-4xl"> {drink.name}</h1>
        <span
          className={`${
            drink.alcoholic === "Alcoholic" ? "bg-red-500" : "bg-green-500"
          } text-white font-semibold px-2 py-1 rounded-md text-lg`}
        >
          {drink.alcoholic}
        </span>
        <div className="w-full text-base">
          <p>{drink.instructions}</p>
        </div>
      </div>
    </div>
  );
}

export default page;
