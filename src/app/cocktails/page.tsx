// ignore ESLint Image
import Link from "next/link";
import { type Metadata } from "next";
import { slugit } from "@/helpers";
export const metadata: Metadata = {
  title: "Lemon Cocktails Overview",
  description: "There are all the lemon cocktails",
  openGraph: {
    title: "Lemon Cocktails Overview",
    description: "There are all the lemon cocktails",
    images: {
      url: "https://www.thecocktaildb.com/images/media/drink/rptuxy1472669372.jpg",
      width: 800,
      height: 600,
    },
  },
};
export interface Cocktails {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

// ISR - incremental static regeneration
export const revalidate = 86400; // once a day

const page = async () => {
  const resp = await fetch("http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Lemon");
  const data: { drinks: Cocktails[] } = await resp.json();
  return (
    <>
      <h1>Cocktails</h1>
      <ul id="cocktails">
        {data &&
          data.drinks.map((drink: Cocktails) => (
            <li key={drink.idDrink}>
              <Link href={`/cocktails/${drink.idDrink}/${slugit(drink.strDrink)}`}>
                <div>
                  {/* eslint-disable @next/next/no-img-element */}
                  <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                </div>
                <p>{drink.strDrink}</p>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};
export default page;
