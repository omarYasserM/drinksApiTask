"use clinet";
import React from "react";
import { Carousel } from "@components/Carousel";

async function getDrinks() {
  const res = await fetch(
    "https://thecocktaildb.com/api/json/v1/1/search.php?f=m"
  );
  const drinks = await res.json();

  return drinks;
}

async function Homepage() {
  const items = await getDrinks();

  const drinks: Drink[] = items.drinks.map((drink: any) => ({
    name: drink.strDrink,
    id: drink.idDrink,
    category: drink.strCategory,
    alcoholic: drink.strAlcoholic,
    image: drink.strDrinkThumb,
  }));

  return (
    <div className="w-full flex flex-col gap-6">
      <h1 className="text-center font-semibold">
        List of drinks that starts with: M
      </h1>
      <Carousel drinks={drinks} />
    </div>
  );
}

export default Homepage;
