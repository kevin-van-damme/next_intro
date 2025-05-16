import Link from "next/link";
import { type Cocktails } from "../page";

// export const function generateMetaData
export const generateMetaData = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const resp = await fetch(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await resp.json();
  return {
    title: data.drinks[0].strDrink,
    openGraph: {
      title: data.drinks[0].strDrink,
      images: {
        url: data.drinks[0].strDrinkThumb,
        width: 800,
        height: 600,
      },
    },
  };
};

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const resp = await fetch(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data: { drinks: Cocktails[] } = await resp.json();
  return (
    <div>
      <Link href="/cocktails">Back</Link>
      <h1>{data.drinks[0].strDrink}</h1>
      <div>
        <img id="cocktail_img_detail" src={data.drinks[0].strDrinkThumb} alt={data.drinks[0].strDrink} />
      </div>
      <p>{data.drinks[0].idDrink}</p>
    </div>
  );
};

export async function generateStaticParams() {
  const resp = await fetch("http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=lemon");
  const data = await resp.json();
  return data.drinks.map((drink: Cocktails) => ({
    id: drink.idDrink,
  }));
}
export default page;
