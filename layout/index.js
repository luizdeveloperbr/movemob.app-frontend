import Header from '../components/Header'
import Footer from '../components/Footer'

export default function RootLayout({ children }) {
    return (
        <div className="drawer">
            <input id="side-menu" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
            <Header />
            {children}
            <Footer />
            </div>
            <div className="drawer-side">
                <label htmlFor="side-menu" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100">
                    {/* <!-- Sidebar content here --> */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>
    )
}