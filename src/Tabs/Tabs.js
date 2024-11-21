import { useState } from "react"
import "./tabs.css"

export default function Tabs(){
    const [activeTab, setActiveTab] = useState(1);

    return(
        <>
           <div className="tabButtons">
               <button onClick={()=>{
                setActiveTab(1)
               }}>Tab1</button> 
               <button onClick={()=>{
                setActiveTab(2)
               }}>Tab2</button> 
               <button onClick={()=>{
                setActiveTab(3)
               }}>Tab3</button> 
           </div>
           <div className="tabContent">
            
            <div className={activeTab===1&&"active"} >
                tab1
            </div>
            <div className={activeTab===2&&"active"}>
                tab2
            </div>
            <div className={activeTab===3&&"active"}>
                tab3
            </div>

           </div>
        </>
    )
}