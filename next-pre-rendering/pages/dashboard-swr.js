import useSWR from 'swr';

/**
 * DemoStration of SWR feature provided by NexJs
 * data can be updated on the fly without reloading the page
 * @returns 
 */
function DashboardSWR() {
    const { data, error } = useSWR('dashboard', fetchData);
    if (error) {
        return 'An error has occured';
    }
    if (!data) {
        return 'Loading';
    }

    return (
        <>
            <h2>Dashboard</h2>
            <h2>Post- {data.posts}</h2>
            <h2>Lkes- {data.likes}</h2>
            <h2>Followers- {data.followers}</h2>
            <h2>Following- {data.following}</h2>
        </>
    );
}
export default DashboardSWR;

/**
 * Method to use fetch data from the api
 * @returns  data from the api 
 */
const fetchData = async () => {
    const response = await fetch('http://localhost:4000/dashboard');
    const data = await response.json();
    return data;
};