import React from 'react';

const ToDoListItem = (props) =>
{
  return ( 
    <>
    <div className="todo_style">
    <i class="fa fa-times-circle" onClick={() => { return props.onSelect(props.id) }}  />
   <li>{props.text}</li>
   </div>
  </>
  );
}

export default ToDoListItem;