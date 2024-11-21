export default function Dialog(props) {
    console.log(props.open);
    return(
        <>
        <dialog open>
            <h3>Dialog title</h3>
            <p>Dialog content</p>
            <button></button>    
        </dialog>    
        </>
    )
}