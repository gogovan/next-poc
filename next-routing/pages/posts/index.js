import Link from 'next/link';
/* 
Demonstration of getStaticProps method 

*/
const PostList = ({ posts }) => {
    return (
        <>
            <h1>List of Posts</h1>
            {
                posts.map(post => {
                    return (
                        <div key={ post.id }>
                            <Link href={ `posts/${post.id}` } passHref>
                                <h2>{ post.id } { post.title }</h2>
                            </Link>
                            <hr />
                        </div>
                    );
                })
            }
        </>
    );
};
export const getStaticProps = async (ctx) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const postData = await response.json();
    return {
        props: {
            posts: postData
        }
    };
};


export default PostList;