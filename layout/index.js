import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
export default function RootLayout({ children }) {
    return (
        <>
            <Header />
            <main className="drawer drawer-mobile">
                <input id="side-menu" type="checkbox" className="drawer-toggle" />
                {children}
                <section className="drawer-side">
                    <label htmlFor="side-menu" className="drawer-overlay"></label>
                    <nav className="menu p-4 w-80 bg-base-100">
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/equipamentos">Equipamentos</Link></li>
                        </ul>
                    </nav>
                </section>
            </main>
            <Footer />
        </>
    )
}