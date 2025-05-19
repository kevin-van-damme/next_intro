import Link from "next/link";
import { type Cocktails } from "../../page";
import { slugit } from "@/helpers";
import { Metadata } from "next";

// is default = ongekende urls worden toch statisch opgebouwd on request
// export const dynamicParams = true;

interface PageParams {
  id: string;
  slug: string;
}
// export const function generateMetaData
export const generateMetadata = async ({ params }: { params: Promise<PageParams> }): Promise<Metadata> => {
  const { id } = await params;
  const resp = await fetch(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await resp.json();
  return {
    title: data.drinks[0].strDrink,
    description: data.drinks[0].strInstructions,
    alternates: { canonical: `/cocktails/${id}/${slugit(data.drinks[0].strDrink)}` },
    // hier ga je je officiele url instellen, als de url anders is dan zal deze geredirect worden naar de correcte url, belangrijk bij de detailpages
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

const page = async ({ params }: { params: Promise<PageParams> }) => {
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

export async function generateStaticParams(): Promise<PageParams[]> {
  const resp = await fetch("http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=lemon");
  const data = await resp.json();
  return data.drinks.map((drink: Cocktails) => ({
    id: drink.idDrink,
    slug: slugit(drink.strDrink),
  }));
}
export default page;
