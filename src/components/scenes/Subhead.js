import React from 'react'
import "mdb-ui-kit/js/mdb.min.js"
export default function Subhead() {
    return (
        <>
            <nav className="navbar navbar-expand-lg " style={{backgroundColor:"#7286d3"}}>
                <div className="container-fluid">

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarCenteredExample"
                        aria-controls="navbarCenteredExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center" id="navbarCenteredExample"
                    >
                        <ul className="navbar-nav px-2 mb-2 mb-lg-0" style={{ gap: "20px" }}>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDarkDropdownMenuLink"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Categories
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark dropdown-menu dropdown-menu-dark-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                    <li className="sub-menu-title">
                                        <a href="#" className="dropdown-item">Electronics</a>
                                    </li>

                                    <li className="sub-menu-title">
                                        <a href="#" className="dropdown-item">Smart Watch</a>
                                    </li>

                                    <li className="sub-menu-title">
                                        <a href="#" className="dropdown-item">Smart TV</a>
                                    </li>

                                    <li className="sub-menu-title">
                                        <a href="#" className="dropdown-item">Keyboard</a>
                                    </li>

                                    <li className="sub-menu-title">
                                        <a href="#" className="dropdown-item">Mouse</a>
                                    </li>

                                    <li className="sub-menu-title">
                                        <a href="#" className="dropdown-item">Microphone</a>
                                    </li>
                                    <li className="menu-title">
                                        <a href="#" className="dropdown-item">Men's</a>
                                    </li>

                                    <li className="sub-menu-title">
                                        <a href="#" className="dropdown-item">Formal</a>
                                    </li>

                                    <li className="sub-menu-title">
                                        <a href="#" className="dropdown-item">Casual</a>
                                    </li>

                                    <li className="sub-menu-title">
                                        <a href="#" className="dropdown-item">Sports</a>
                                    </li>

                                    <li className="sub-menu-title">
                                        <a href="#" className="dropdown-item">Jacket</a>
                                    </li>

                                    <li className="sub-menu-title">
                                        <a href="#" className="dropdown-item">Sunglasses</a>
                                    </li>
                                    <li className="menu-title">
                                        <a href="#" className="dropdown-item">Women's</a>
                                    </li>

                                    <li className="sub-menu-title">
                                        <a href="#" className="dropdown-item">Formal</a>
                                    </li>

                                    <li className="sub-menu-title">
                                        <a href="#" className="dropdown-item">Casual</a>
                                    </li>

                                    <li className="sub-menu-title">
                                        <a href="#" className="dropdown-item">Perfume</a>
                                    </li>

                                    <li className="sub-menu-title">
                                        <a href="#" className="dropdown-item">Cosmetics</a>
                                    </li>

                                    <li className="sub-menu-title">
                                        <a href="#" className="dropdown-item">Bags</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDarkDropdownMenuLink"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Men's
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                    <li className="submenu-category">
                                        <a href="#" className="dropdown-item">Shirt</a>
                                    </li>

                                    <li className="submenu-category">
                                        <a href="#" className="dropdown-item">Shorts & Jeans</a>
                                    </li>

                                    <li className="submenu-category">
                                        <a href="#" className="dropdown-item">Safety Shoes</a>
                                    </li>

                                    <li className="submenu-category">
                                        <a href="#" className="dropdown-item">Wallet</a>
                                    </li>

                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDarkDropdownMenuLink"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Women's
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                    <li className="submenu-category">
                                        <a href="#" className="dropdown-item">Dress & Frock</a>
                                    </li>

                                    <li className="submenu-category">
                                        <a href="#" className="dropdown-item">Earrings</a>
                                    </li>

                                    <li className="submenu-category">
                                        <a href="#" className="dropdown-item">Necklace</a>
                                    </li>

                                    <li className="submenu-category">
                                        <a href="#" className="dropdown-item">Makeup Kit</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDarkDropdownMenuLink"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Jewelry
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                    <li className="submenu-category">
                                        <a href="#" className="dropdown-item">Earrings</a>
                                    </li>

                                    <li className="submenu-category">
                                        <a href="#" className="dropdown-item">Couple Rings</a>
                                    </li>

                                    <li className="submenu-category">
                                        <a href="#" className="dropdown-item">Necklace</a>
                                    </li>

                                    <li className="submenu-category">
                                        <a href="#" className="dropdown-item">Bracelets</a>
                                    </li>



                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDarkDropdownMenuLink"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Perfume
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                    <li className="submenu-category">
                                        <a href="#" className="dropdown-item">Clothes Perfume</a>
                                    </li>

                                    <li className="submenu-category">
                                        <a href="#" className="dropdown-item">Deodorant</a>
                                    </li>

                                    <li className="submenu-category">
                                        <a href="#" className="dropdown-item">Flower Fragrance</a>
                                    </li>

                                    <li className="submenu-category">
                                        <a href="#" className="dropdown-item">Air Freshener</a>
                                    </li>
                                </ul>
                            </li>
                        
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
