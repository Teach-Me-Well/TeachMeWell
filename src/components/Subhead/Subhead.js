import React from 'react'
import "mdb-ui-kit/js/mdb.min.js"
export default function Subhead() {
    return (
        <>
            <nav class="navbar navbar-expand-lg " style={{backgroundColor:"#7286d3"}}>
                <div class="container-fluid">

                    <button
                        class="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarCenteredExample"
                        aria-controls="navbarCenteredExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="fas fa-bars"></i>
                    </button>

                    <div class="collapse navbar-collapse justify-content-center" id="navbarCenteredExample"
                    >
                        <ul class="navbar-nav px-2 mb-2 mb-lg-0" style={{ gap: "20px" }}>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Categories
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li class="sub-menu-title">
                                        <a href="#" class="dropdown-item">Electronics</a>
                                    </li>

                                    <li class="sub-menu-title">
                                        <a href="#" class="dropdown-item">Smart Watch</a>
                                    </li>

                                    <li class="sub-menu-title">
                                        <a href="#" class="dropdown-item">Smart TV</a>
                                    </li>

                                    <li class="sub-menu-title">
                                        <a href="#" class="dropdown-item">Keyboard</a>
                                    </li>

                                    <li class="sub-menu-title">
                                        <a href="#" class="dropdown-item">Mouse</a>
                                    </li>

                                    <li class="sub-menu-title">
                                        <a href="#" class="dropdown-item">Microphone</a>
                                    </li>
                                    <li class="menu-title">
                                        <a href="#" class="dropdown-item">Men's</a>
                                    </li>

                                    <li class="sub-menu-title">
                                        <a href="#" class="dropdown-item">Formal</a>
                                    </li>

                                    <li class="sub-menu-title">
                                        <a href="#" class="dropdown-item">Casual</a>
                                    </li>

                                    <li class="sub-menu-title">
                                        <a href="#" class="dropdown-item">Sports</a>
                                    </li>

                                    <li class="sub-menu-title">
                                        <a href="#" class="dropdown-item">Jacket</a>
                                    </li>

                                    <li class="sub-menu-title">
                                        <a href="#" class="dropdown-item">Sunglasses</a>
                                    </li>
                                    <li class="menu-title">
                                        <a href="#" class="dropdown-item">Women's</a>
                                    </li>

                                    <li class="sub-menu-title">
                                        <a href="#" class="dropdown-item">Formal</a>
                                    </li>

                                    <li class="sub-menu-title">
                                        <a href="#" class="dropdown-item">Casual</a>
                                    </li>

                                    <li class="sub-menu-title">
                                        <a href="#" class="dropdown-item">Perfume</a>
                                    </li>

                                    <li class="sub-menu-title">
                                        <a href="#" class="dropdown-item">Cosmetics</a>
                                    </li>

                                    <li class="sub-menu-title">
                                        <a href="#" class="dropdown-item">Bags</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Men's
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li class="submenu-category">
                                        <a href="#" class="dropdown-item">Shirt</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" class="dropdown-item">Shorts & Jeans</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" class="dropdown-item">Safety Shoes</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" class="dropdown-item">Wallet</a>
                                    </li>

                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Women's
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li class="submenu-category">
                                        <a href="#" class="dropdown-item">Dress & Frock</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" class="dropdown-item">Earrings</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" class="dropdown-item">Necklace</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" class="dropdown-item">Makeup Kit</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Jewelry
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li class="submenu-category">
                                        <a href="#" class="dropdown-item">Earrings</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" class="dropdown-item">Couple Rings</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" class="dropdown-item">Necklace</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" class="dropdown-item">Bracelets</a>
                                    </li>



                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Perfume
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li class="submenu-category">
                                        <a href="#" class="dropdown-item">Clothes Perfume</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" class="dropdown-item">Deodorant</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" class="dropdown-item">Flower Fragrance</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" class="dropdown-item">Air Freshener</a>
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
