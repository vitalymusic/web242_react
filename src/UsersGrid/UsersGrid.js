import './UsersGrid.css';
import UserCard from './UserCard';

export default function UsersGrid() {
    return (
        <>
            <h1>Users List</h1>
            <div className="users_grid">
                   <UserCard 
                        name="Ivan" 
                        image="" 
                        bio="Ivans bio" 
                        email="ivan@inbox.lv" 
                    data={{
                    address:"Address1",
                    phone:"Phone2"
                   }}></UserCard> 
                   <UserCard name="Andrey" image="" bio="Andews bio" email="andrey@inbox.lv"></UserCard> 
                   <UserCard name="Alex" image="" bio="Alex bio" email="alex@inbox.lv"></UserCard> 
                   
            </div>
        </>
    )
}