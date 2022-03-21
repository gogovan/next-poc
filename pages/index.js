import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

/* Link Based Navigation using Nextjs and Navigate programatically to any page*/
const Home = () => {
  const router = useRouter();
  const handleClick = () => {
    /* To navigate to product page programatically */
    router.push('/product');
    /* 
    To replace the history from the stack
        router.replace('/product');
    */
    console.log('Order Placed');
  };
  return (
    <>
      <h1>Home Page</h1>

      <Link href={ '/blog' }>
        <a>Blog</a>
      </Link>
      <Link href={ '/product' }>
        <a>Product</a>
      </Link>
      {/* 
    Link Prefetching Test for users page 
    Any <Link> component in the viewport(initially or through scrolll ) will be prefetched
     by default(including the corresponding data) for pages using static generation
    */}
      <Link href={ '/users' }>
        <a>Users</a>
      </Link>

      <Link href={ '/posts' }>
        <a>Posts</a>
      </Link>
      <button onClick={ handleClick }> Place Order</button>

    </>
  );
};

export default Home;
