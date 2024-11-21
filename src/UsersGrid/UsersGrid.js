import './UsersGrid.css';
import UserCard from './UserCard';


let data = [
    {
        name:"Ivan",
        image:"https://cdn-icons-png.flaticon.com/512/149/149071.png",
        bio:"Ivans bio",
        email:"ivan@inbox.lv" ,
        data:{
            address:"Address1",
            phone:"Phone2"
        }
    },
    {
        name:"Andrey",
        image:"https://cdn-icons-png.flaticon.com/512/149/149071.png",
        bio:"Andrey bio",
        email:"Andrey@inbox.lv" ,
        data:{
            address:"Address2",
            phone:"Phone3"
        }
    },
    {
        name:"Alex",
        image:"https://cdn-icons-png.flaticon.com/512/149/149071.png",
        bio:"Alex bio",
        email:"Alex@inbox.lv" ,
        data:{
            address:"Address3",
            phone:"Phone4"
        }
    }
]

export default function UsersGrid() {
    return (
        <>
            <h1>Users List</h1>
            <div className="users_grid">
                     {
                        data.map((item,index)=>{
                            return(
                                <UserCard key={index}
                                name={item.name} 
                                image={item.image} 
                                bio={item.bio} 
                                email={item.email}
                                data = {item.data}
                                ></UserCard>
                            )
                        })
                     }   






                   {/* <UserCard 
                        name="Ivan" 
                        image="" 
                        bio="Ivans bio" 
                        email="ivan@inbox.lv" 
                    data={{
                    address:"Address1",
                    phone:"Phone2"
                   }}></UserCard> 

                   <UserCard name="Andrey" image="" bio="Andews bio" email="andrey@inbox.lv"></UserCard> 
                   <UserCard name="Alex" image="" bio="Alex bio" email="alex@inbox.lv"></UserCard>  */}
                   
            </div>
        </>
    )
}