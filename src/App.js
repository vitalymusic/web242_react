import { useState } from 'react';
import './App.css';
import Dialog from './Dialog/Dialog';
// import Table from './Table';
import UsersGrid from './UsersGrid/UsersGrid';
import Tabs from './Tabs/Tabs';
import Carousel from './Carousel/Carousel';



export default function App() {
  const [dialogState, setDialogState] = useState(false);

  const clickHandler = ()=>{
    setDialogState(!dialogState)
  }
  
  return (
    <div className="App">
      <Carousel />
      <h1>Hello React!!!</h1>
      {/* <Table></Table> */}
      <UsersGrid />
      <h1>Dialog</h1>
      <button onClick={clickHandler}>Open dialog</button>
      <Dialog isOpen={dialogState} setDialogState={setDialogState}></Dialog>
      <Tabs>
        <h1>Test</h1>
      </Tabs>
      
    </div>
  );
}
