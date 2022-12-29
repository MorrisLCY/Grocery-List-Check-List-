import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: "one half pound bag of cocoa covered"
        },
        {
            id: 2,
            checked: false,
            item: "ITEM2"
        },
        {
            id: 3,
            checked: false,
            item: "Item3"
        }
    ]);

    //CH7 Lists&Keys&Maps
    const handleCheck = (id) => {
      // this id is onchange id
      const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked}: item);
      setItems(listItems);
      localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }

    const handleDelete = (id) => {
        // console.log(`this is what you delete ${id}`);
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }

  return (
    <div className="App">
      <Header title='Grocery List'/>
      <Content 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer 
        length={items.length}
      />
      <p style={{fontsize: '10px'}}>JSX is a javascript in XML & React Template of html</p>
      <p>we can't do object in object </p>
    </div>
  );
}

export default App;
