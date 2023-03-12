import React from 'react'
import { Link } from 'react-router-dom'
import mens from "../../assets/images/mens.jpg"
import electronics from "../../assets/images/electronics.jpg"
import footwear from "../../assets/images/footwear.jpg"
export default function best() {
    return (
        <section style={{ backgroundColor: "#eee" }}>
            <div class="container py-5">
                <h2 class="title">Product listing</h2>

                <div class="row">
                    <div class="col-lg-4 col-md-12 mb-4">
                        <Link to = "/mens"><div class="bg-image  ">
                            <img src={mens}
                                class="w-100" />
                            <a href="#!">
                                <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.3" }}>
                                    <div class="d-flex justify-content-start align-items-start h-100">
                                        <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">Men's Clothes</span></h5>
                                    </div>
                                </div>
                                <div class="hover-overlay">
                                    <div class="mask" style={{ backgroundColor: " rgba(253, 253, 253, 0.15)" }}></div>
                                </div>
                            </a>
                        </div></Link>
                    </div>

                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="bg-image ">
                            <img src="https://10s.best/wp-content/uploads/2021/06/Ecommerce-Fashion-Clothing-Websites-to-Shop-the-Latest-Trends.jpg"
                                class="w-100 " />
                            <a href="#!">
                                <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.3" }}>
                                    <div class="d-flex justify-content-start align-items-start h-100">
                                        <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">Women's Clothes</span></h5>
                                    </div>
                                </div>
                                <div class="hover-overlay">
                                    <div class="mask" style={{ backgroundColor: " rgba(253, 253, 253, 0.15)" }}></div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="bg-image ">
                            <img src={footwear}
                                class="w-100" height="301px"/>
                            <a href="#!">
                                <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.3" }}>
                                    <div class="d-flex justify-content-start align-items-start h-100">
                                        <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">RedTape Sport's Shoes</span></h5>
                                    </div>
                                </div>
                                <div class="hover-overlay">
                                    <div class="mask" style={{ backgroundColor: " rgba(253, 253, 253, 0.15)" }}></div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-4 col-md-12 mb-4">
                    <Link to = "/electronic"><div class="bg-image ">
                            <img src={electronics}
                                class="w-100" />
                            <a href="/">
                                <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.3" }}>
                                    <div class="d-flex justify-content-start align-items-start h-100">
                                        <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">Electronic's</span></h5>
                                    </div>
                                </div>
                                <div class="hover-overlay">
                                    <div class="mask" style={{ backgroundColor: " rgba(253, 253, 253, 0.15)" }}></div>
                                </div>
                            </a>
                        </div></Link>
                    </div>

                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="bg-image ">
                            <img src="https://i5.walmartimages.com/asr/e3ced41b-70f0-4afa-813a-6aa923980501_2.0388a3cf5a00012a75f3d3898a4d1062.jpeg"
                                class="w-100" />
                            <a href="#!">
                                <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.3" }}>
                                    <div class="d-flex justify-content-start align-items-start h-100">
                                        <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">Laptop</span></h5>
                                    </div>
                                </div>
                                <div class="hover-overlay">
                                    <div class="mask" style={{ backgroundColor: " rgba(253, 253, 253, 0.15)" }}></div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="bg-image ">
                            <img src="https://www.appleworld.today/wp-content/uploads/2021/09/iPhone-13-mini.jpg"
                                class="w-100" style={{ height: "362px" }} />
                            <a href="#!">
                                <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.3" }}>
                                    <div class="d-flex justify-content-start align-items-start h-100">
                                        <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">Iphone</span></h5>
                                    </div>
                                </div>
                                <div class="hover-overlay">
                                    <div class="mask" style={{ backgroundColor: " rgba(253, 253, 253, 0.15)" }}></div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
