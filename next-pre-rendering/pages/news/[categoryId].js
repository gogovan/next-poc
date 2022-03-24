/**
 * 
 * @param {props1,props2} props received from getServerSideProps to render ui component 
 * @returns 
 */
function ArticleByCategory({ articles, categoryId }) {
    return (
        <>
            <h1>Showing news for category {categoryId}</h1>
            {
                articles.map((article => {
                    return (
                        <div key={article.id}>
                            <h2>{article.id} {article.title}</h2>
                            <p>{article.description}</p>
                            <hr />
                        </div>
                    );
                }))
            }
        </>
    );
}
export default ArticleByCategory;


/**
 * called By NextJs everytime request send to fetch data or on page load
 * @param {context} to   to get any params for dynamic route
 */
export const getServerSideProps = async (ctx) => {
    const { req, res } = ctx;
    const { categoryId } = ctx?.params;
  
    const response = await fetch(`http://localhost:4000/news?category=${categoryId}`);
    const data = await response.json();
    console.log(req, res);
    return {
        props: {
            articles: data,
            categoryId,
        },
    };
};
