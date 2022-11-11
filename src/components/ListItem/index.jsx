import React from 'react';
import {MdDelete, MdCheckBoxOutlineBlank, MdCheckBox} from 'react-icons/md';

function ListItem(props) {


  function DoneImg(props) {

    if (props.done) {
      return (
        <MdCheckBoxOutlineBlank color='#000' size={20}/>
      );
    }
    else {
      return (
        <MdCheckBox color='#309305' size={20}/>
      );
    }

  }

  return (
    <div className='lista'>
         <li className={!props.item.done ? 'done item' : 'item'}>
            {props.item.text}

            <div className='btn'>
            <button onClick={() => { props.onDone(props.item.id) }}>
              <DoneImg done={props.item.done} />
            </button>

            <button onClick={() => { props.onItemDeleted(props.item.id) }}>
              <MdDelete color='#ff0000' size={20} />
            </button>
            </div>

          </li>

    </div>
  );
}

export default ListItem
