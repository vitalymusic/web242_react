import { useState } from 'react';
import './App.css';
import Dialog from './Dialog/Dialog';
// import Table from './Table';
import UsersGrid from './UsersGrid/UsersGrid';



export default function App() {
  const [dialogState, setDialogState] = useState(true);

  const clickHandler = ()=>{
    setDialogState(!dialogState)
  }

  return (
    <div className="App">
      <h1>Hello React!!!</h1>
      {/* <Table></Table> */}
      <UsersGrid />
      <h1>Dialog</h1>
      <button onClick={clickHandler}>Open dialog</button>
      <Dialog open={dialogState}></Dialog>

    </div>
  );
}
