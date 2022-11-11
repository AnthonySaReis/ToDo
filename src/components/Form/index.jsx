import React, {useState} from 'react';
import {MdAdd} from 'react-icons/md'

function Form(props) {
    
    const [text, setText] = useState('');

    function additem(e) {
        e.preventDefault();
        if (text) {
          props.onAdditem(text);
          setText('');
        }}
    
    return (
        <form className='form'>
        <input 
        type='text' 
        placeholder='Digite sua tarefa:' 
        value={text}
        onChange={(e)=>setText(e.target.value)}
        />
        <button onClick={additem}><MdAdd size={34}/></button>
      </form>
    );
}

export default Form;
