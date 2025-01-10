import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "Harry Potter e la pietra filosofale",
    description: "This is a first product - amazing!",
  },
  {
    id: "p2",
    price: 10,
    title: "Harry Potter e la camera dei segreti",
    description: "This is a first product - amazing!",
  },
  {
    id: "p3",
    price: 9,
    title: "Harry Potter e il prigioniero di Azkaban",
    description: "This is a first product - amazing!",
  },
  {
    id: "p4",
    price: 14,
    title: "Harry Potter e il calice di fuoco",
    description: "This is a first product - amazing!",
  },
  {
    id: "p5",
    price: 12,
    title: "Harry Potter e l'ordine della fenice",
    description: "This is a first product - amazing!",
  },
  {
    id: "p6",
    price: 9,
    title: "Harry Potter e il principe mezzosangue",
    description: "This is a first product - amazing!",
  },
  {
    id: "p7",
    price: 19,
    title: "Harry Potter e i doni della morte",
    description: "This is a first product - amazing!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
