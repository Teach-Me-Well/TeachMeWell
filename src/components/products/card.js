import "../../redux/cssfile/main.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";

export default function App() {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.cover}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="App">
      <h2 class="title">Flash Deals</h2>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}
