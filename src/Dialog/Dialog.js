export default function Dialog(props) {
    return(
        <>
        {props.isOpen===true?(
            <dialog open>
                <h3>Dialog title</h3>
                <p>Dialog content</p>
                <button onClick={()=>{
                    props.setDialogState(false)
                }}>Close</button>    
            </dialog>) 
            :
            (<></>)}
        </>
    )
}