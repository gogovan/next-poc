/**
 * Demonstrate  Basic Server Side Rendering mechanism in Nextjs 
 * @param {props}
 * @returns 
 */
function NewsArticleList({ articles }) {
    return (
        <>
            <h1> List of News Articles </h1>
            {
                articles.map((article) => {
                    return (
                        <div key={article.id}>
                            <h2>
                                {article.id} {article.title} | {article.category}
                            </h2>
                        </div>
                    );
                })}
        </>
    );
}
export default NewsArticleList;

/**
 * getServerSideProps method used by NextJs to do server side rendering
 * @param {context} ctx  used to get any params for dynamic route
 * @returns 
 */
export const getServerSideProps = async (ctx) => {
    const response = await fetch("http://localhost:4000/news");
    const data = await response.json();

    return {
        props: {
            articles: data,
        },
    };
};
