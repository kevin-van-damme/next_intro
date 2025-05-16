import { type Metadata } from "next";
export const metadata: Metadata = {
  title: "About",
  description: "This is the about page",
  openGraph: {
    title: "About",
    description: "This is the about page",
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
      <h1>About</h1>
      <h2>{new Date().toLocaleString()}</h2>
      <p>This is the about page</p>
    </>
  );
};
export default page;
