import React, { useState, useEffect } from 'react';
import List from './components/List';
import Form from './components/Form';
import Item from './components/Item';
import './App.css'
import { MdAddCircle } from 'react-icons/md'
import Modal from './components/Modal';

const SAVED_ITEMS = 'savedItems';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
    if (savedItems) {
      setList(savedItems);
    }
  }, [])


  //atualizar a cada alteração
  useEffect(() => {

    localStorage.setItem(SAVED_ITEMS, JSON.stringify(list));

  }, [list])


  function onAddItem(text) {

    let it = new Item(text)
    setList([...list, it]);
    onHideModal();
  }

  function onItemDeleted(id) {
    let filteredList = list.filter(it => it.id !== id);
    setList(filteredList);
  }

  function onDone(id) {

    let updatedItems = list.map(it => {
      if (it.id === id) {
        it.done = !it.done;
      }
      return it;
    })

    setList(updatedItems);
  }


  function onHideModal(){
    setShowModal(false);
  }


  return (
    <div className='container'>
      <header className='header' >
        <h1>Tarefas do dia</h1>
        <button 
        onClick={()=>{setShowModal(true)}} 
        className='addButton'>
          <MdAddCircle color='#219ef2' size={45} />
        </button>
      
      </header>

      <List onDone={onDone} onItemDeleted={onItemDeleted} list={list} />

      <Modal onHideModal={onHideModal} show={showModal}>
        <Form onAdditem={onAddItem} />
      </Modal>
    </div>
  )
}

export default App
