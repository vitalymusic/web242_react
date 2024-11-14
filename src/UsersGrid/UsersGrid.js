import './UsersGrid.css';

export default function UsersGrid(){
    return(
        <div className="users_grid">
            <h1>Users List</h1>
            <div className="user">
                <h3>Ivan</h3>
                <img srv="#" alt="user1"></img>
                <p>bio</p>
                <p>Email</p>  
            </div>
            <div className="user">
                <h3>Andrey</h3>
                <img src="#" alt="user1"></img>
                <p>bio</p>
                <p>Email</p>  
            </div>
        </div>
    )
}