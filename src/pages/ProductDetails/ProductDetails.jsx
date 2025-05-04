import { useParams } from "react-router-dom";
import { getProductById } from "../../api";

const ProductDetails = () => {
  const { productId } = useParams();
  const productName = getProductById(productId);
  return (
    <div>
      Now showing {productName.name} with id - {productId}
    </div>
  );
};

export default ProductDetails;
