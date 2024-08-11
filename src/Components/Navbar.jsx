import { menuList } from "../Scripts/index";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Nextvision</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            {
                                menuList.map(menu => (
                                    <li key={menu.name} className="nav-item">
                                    <a className={menu.class} aria-current="page" href={menu.link}>{menu.name}</a>
                                </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar