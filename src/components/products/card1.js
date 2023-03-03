import "../../redux/cssfile/main.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product1";
import { productData, responsive } from "./data1";

export default function App() {
  const product = productData.map((item) => (
    <Product
      id={item.id}
      url={item.cover}
      name={item.name}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="App">
      <h2 class="title1">Big Discount</h2>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}
