import './UsersGrid.css';
import UserCard from './UserCard';

export default function UsersGrid() {
    return (
        <>
            <h1>Users List</h1>
            <div className="users_grid">
                   <UserCard></UserCard> 
                   <UserCard></UserCard> 
                   <UserCard></UserCard> 
                   <UserCard></UserCard> 
                   <UserCard></UserCard> 
                   <UserCard></UserCard> 
            </div>
        </>
    )
}