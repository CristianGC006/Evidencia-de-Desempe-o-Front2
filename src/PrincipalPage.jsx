import ElementFour from "./ElementFour";
import ElementOne from "./ElementOne";
import ElementThree from "./ElementThree";
import ElementTwo from "./ElementTwo";
export default function PrincipalPage() {
  return (
    <div>
      <header className="header">
        <ElementOne />
      </header>
      <article className="main">
        <ElementTwo />
        <aside>
            <ElementThree />
            <ElementThree />
            <footer className="footer-article">
                <ElementFour />
                <ElementFour />
            </footer>
        </aside>
      </article>
    </div>
  );
}
