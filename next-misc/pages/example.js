import Head from "next/head";
import Footer from "../components/footer";
/**
 * Example of Per PageLayout
 * can be viewed http://localhost:3000/example
 * @returns 
 */
function Example() {
    return (
        <>
            
            <Head>
                <title>Code Example</title>
                <meta name="description" content="Free Tutorials on web development"></meta>
            </Head>

            <h1 className="content">Example without Header</h1>

        </>

    );
}
export default Example;
/**
 * Example with per page layout
 * @param {*} page 
 * @returns 
 */
Example.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
            <Footer />
        </>
    );
};