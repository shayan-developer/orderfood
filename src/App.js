import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [modal, setModal] = useState(false)

  const showModal = () => {
    setModal(true)
  }
  const hideModal = () => {
    setModal(false)
  }
  return (
    <>
      {modal && <Cart onHideModal={hideModal}/>}
      <Header onShowModal={showModal}/>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
