import{useState,useEffect} from 'react'
/**
 * Client-side data fetching is same as React 
 */
function Dashboard() {
    const [isLoading, setIsLoading] = useState(true);
    const [dashboardData, setDashboardData] = useState(null);
    useEffect(() => {
        async function fetchDashboardData() {
            const response = await fetch('http://localhost:4000/dashboard');
            const data = await response.json();
            setDashboardData(data);
            setIsLoading(false);
        }
        fetchDashboardData()

    }, []);

    if (isLoading) {
        return (
            <h2>Loading...</h2>
        );
    }
    return (
        <>
            <h2>Dashboard</h2>
            <h2>Post- {dashboardData.posts}</h2>
            <h2>Lkes- {dashboardData.likes}</h2>
            <h2>Followers- {dashboardData.followers}</h2>
            <h2>Following- {dashboardData.following}</h2>
        </>
    );

}
export default Dashboard;