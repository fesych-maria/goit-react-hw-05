import { getProducts } from "../../api";
import { ProductList } from "../../components/ProductList/ProductList";

export default function Products() {
  const products = getProducts();

  return (
    <main>
      <ProductList products={products} />
    </main>
  );
}
