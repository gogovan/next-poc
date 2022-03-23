
/*  Demonstration of Incremental Static Generation 
    or SWR(Stale while revalidate ) Strategy
*/
const ProductList = ({ products }) => {
    return (
        <>
            <h1>List of Products</h1>
            {
                products.map(product => {
                    return (
                        <div key={ product.id }>
                            <h2>{ product.id } { product.title } { product.price }</h2>
                            <hr />
                        </div>
                    );
                })
            }
        </>
    );
};

export const getStaticProps = async (ctx) => {
    console.log('Genrating / Regenating Product list if values changed from api this method will called ')

    const response = await fetch(`http://localhost:4000/products/`);
    const data = await response.json();
    return {
        props: {
            products: data
        },
        /* To work ISR to revalidate page in every 10 sec. the value of revalidate is in sec */
        revalidate: 10,
    };
};

export default ProductList;