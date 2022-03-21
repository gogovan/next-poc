const UserComponent = (user) => {
    return (
        <>
            <p>{ user.username }</p>
            <p>{ user.website }</p>
        </>
    );
};
export default UserComponent;