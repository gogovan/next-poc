import { useRouter } from "next/router";


/* To Demonstrate catch all the url segment into a single file in Next Js
   Example: Like in sideNav we have so many features under that so many component deep nested
    based on param supplied to router

  http://localhost:3000/docs/feature1/example1

  if params not matched the conditions fallback will render

*/
const Docs = () => {
    const router = useRouter();
    const { params = [] } = router.query;
    console.log('print number of params', params);
    if (params.length === 1) {
        return (
            <h1>Viewing Docs for feature { params[ 0 ] }</h1>
        );
    }
    else if (params.length === 2) {
        return (
            <h1>Viewing Docs for feature { params[ 0 ] } and concept { params[ 1 ] }</h1>
        );
    }
    return (
        <h1>
            Docs Home Page
        </h1>
    );
};

export default Docs;