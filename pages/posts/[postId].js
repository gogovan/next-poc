/* 
Demonstration of getStaticPaths to fetch dynamic route from the api or databse
*/

export const Post = ({ post }) => {
    /* Required when fallback set to true */
   /*  const router = useRouter();
    if (router.isFallback) {
        return (<h1>Loading...</h1>);
    } */
    return (
        <>
            <h2>
                { post.id } { post.title }
            </h2>
            <p>{ post.body }</p>
        </>
    );


};
export const getStaticPaths = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();
    
    const paths = data.map(post => {
        return {
            params: {
                postId: `${post.id}`
            }
        };
    });
    return {
        paths,
        /* fallback can be false,true,'blocking'
         */
        fallback: false,
    };

};
export const getStaticProps = async (ctx) => {
    const params = ctx?.params?.postId;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params}`);
    const data = await response.json();
    /* 
    if path id not found it will go back to 404 page 
     */
    if (!data.id) {
        return {
            notFound: true
        };
    }
    
    console.log(`Generating page for /posts/${params}`);
    return {
        props: {
            post: data
        }
    };
};

export default Post;