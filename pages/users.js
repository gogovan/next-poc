import User from "../components/usercomponent";
/* Example of Static Generation with getStaticProps method with data fetch
 */

const UserList= ({ users }) => {
    return (
        <>
            <h1>List of users</h1>
            {
                users.map(user => {
                    return (
                        <div key={ user.id }>
                            <User { ...user }></User>
                            <hr />
                        </div>
                    );
                })
            }
        </>

    );
};

export const getStaticProps = async (ctx) => {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const userList = await response.json();
    return {
        props: {
            users: userList
        }
    };
};

export default UserList;

