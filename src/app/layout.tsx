import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
import "../app/globals.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <HeaderComponent />
        <main>{children}</main>
        <FooterComponent />
      </body>
    </html>
  );
};
export default RootLayout;
