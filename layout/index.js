import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadCrumps from "../components/BreadCrumbs";
import Link from "next/link";
export default function RootLayout({ children, font }) {
  return (
    <>
      <Header />
      <main className={`drawer drawer-mobile ${font}`}>
        <input id="side-menu" type="checkbox" className="drawer-toggle" />
        <section className="drawer-content">
          <BreadCrumps />
          {children}
        </section>
        <section className="drawer-side">
          <label htmlFor="side-menu" className="drawer-overlay"></label>
          <nav className="menu p-4 w-80 bg-base-100">
            <ul>
              <li>
                <Link href="/equipamento">Equipamentos</Link>
              </li>
              <li>
                <Link href="/movimentacao">Movimentações</Link>
              </li>
            </ul>
          </nav>
        </section>
      </main>
      <Footer />
    </>
  );
}
