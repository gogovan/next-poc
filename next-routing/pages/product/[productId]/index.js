import { useRouter } from "next/router";
/* For Demonstrate Dynamic Routes using NextJs 
Example: Like Master-Detail pattern
http://localhost:3000/product/1
Detail of product will render
*/
const ProductDetail = () => {
    const router = useRouter();
    const productId = router.query.productId;
    return <h1>Details about Product { productId }</h1>;
};

export default ProductDetail;