import { useRouter } from "next/router";
/* For Demonstrate Nested Dynamic route like 
Example: http://localhost:3000/product/1/review/1 
*/
const Review = () => {
    const router = useRouter();
    const { productId, reviewId } = router.query;
    return (
        <h1>
            Review  { reviewId } for product { productId }
        </h1>
    );
};

export default Review;