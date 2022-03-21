import { useRouter } from 'next/router';
/*  Demonstration of Incremental Static Generation */
const Products = ({ product }) => {
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading....</div>;
    }
    return (
        <>
            <h2>{ product.id } { product.title } { product.price }</h2>
            <p>{ product.description }</p>
        </>
    );
};

export const getStaticPaths = async () => {
    const response = await fetch(`http://localhost:4000/products`);
    const data = await response.json();

    const paths = data.map(product => {
        return {
            params: {
                productId: `${product.id}`
            }
        };
    });
    return {
        paths,
        fallback: true,
    };

};

export const getStaticProps = async (ctx) => {
    const productId = ctx?.params?.productId;
    const response = await fetch(`http://localhost:4000/products/${productId}`);
    const data = await response.json();
    return {
        props: {
            product: data
        }
    };
};

export default Products;