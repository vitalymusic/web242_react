export default function UserCard(props) {
    return (
        <div className="user">
            <h3>{props.name}</h3>
            <img src={props.image} alt="user1"></img>
            <p>{props.bio}</p>
            <p>Email: {props.email}</p>
            <p>Address: {props.data.address}</p>
            <p>Phone: {props.data.phone}</p>
        </div>
    )
}