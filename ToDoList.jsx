import React, { useState } from 'react';
import ToDoListItem from './ToDoListItem';
const ToDoList = () =>
{
   const[Items,setItem] = useState();
   const[display,setdisplay] = useState([]);
   const addItem = (event) =>
   {
      setItem(event.target.value);
   }
   const displayItem = () =>
   {
      setdisplay((itemobj) =>
      {
          return [...itemobj,Items];
      });
      setItem("");
   }

   const deleteItem = (id) =>
   {
       setdisplay((itemobj) =>
       {
           return itemobj.filter((arrEle,index) =>
           {return index !== id}
           );
       });
   }
    return (
    <>
       <div className="main_div">
           <div className="center_div">
               <br />
               <h1>ToDO List</h1>
               <input type="text" placeholder="Add Items" onChange={addItem} value={Items}></input>
               <button onClick={displayItem}>+</button>
               <ul>
                   {
                   display.map(
                    (list,index) => {return <ToDoListItem key={index} id={index} text={list} onSelect={deleteItem} />
                    }
                    )
                   }
               </ul>
           </div>
       </div>
    </>
    );
}

export default ToDoList;