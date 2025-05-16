import Link from "next/link";

const HeaderComponent = () => {
  return (
    <header>
      <p>Logo</p>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <Link href="/cocktails">Cocktails</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default HeaderComponent;
