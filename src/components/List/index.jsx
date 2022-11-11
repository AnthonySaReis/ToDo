import React from 'react';
import ListItem from '../ListItem';

function List(props) {

  return (
    <div className='lista'>
      <ul>
        {props.list.map(item => (
          <ListItem 
          key={item.id}
          item={item} 
          onDone={props.onDone}
          onItemDeleted={props.onItemDeleted}
          />
        ))}
      </ul>
    </div>
  )
}

export default List
