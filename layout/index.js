import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import BreadCrumps from "../components/layout/BreadCrumbs";
import Link from "next/link";
export default function RootLayout({ children, font }) {
    return (
        <>
            <Header />
            <main className={`drawer lg:drawer-open ${font}`}>
                <input id="side-menu" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <BreadCrumps />
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="side-menu" className="drawer-overlay"></label>
                    <ul className='menu p-4 w-80 min-h-full bg-base-100'>
                        <li>
                            <Link href="/equipamento">Equipamentos</Link>
                        </li>
                        <li>
                            <Link href="/movimentacao">Movimentações</Link>
                        </li>
                    </ul>
                </div>
            </main>
            <Footer />
        </>
    );
}