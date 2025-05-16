import { type Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact",
  description: "This is the contact page",
  openGraph: {
    title: "Contact",
    description: "This is the contact page",
    images: {
      url: "https://www.thecocktaildb.com/images/media/drink/rptuxy1472669372.jpg",
      width: 800,
      height: 600,
    },
  },
};

const page = () => {
  return (
    <>
      <h1>Contact</h1>
      <p>
        We Are contact. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum modi, vero aperiam ea molestiae odit doloribus excepturi
        officiis neque aut. Earum, voluptatem mollitia? Vitae, nostrum corrupti quasi rem repellendus eum!
      </p>
    </>
  );
};
export default page;
