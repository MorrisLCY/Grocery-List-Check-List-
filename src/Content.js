import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
    const [name, setName] = useState('Morris');
    const [count, setCount] = useState(0);
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

    // CH6 useState
    const handleNameChange = () =>{
        const name = ['Morris', 'Paul', 'Teresa', 'Sylvia'];
        const int = Math.floor(Math.random()*4);
        setName(name[int]);
    }

    const handleClick1 = () =>{
        var number = count;
        setCount(number+=1)
        console.log(count)
    }

    const handleClick2 = () =>{
        console.log(count)
    }

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

    return(
        <main>
            <p>
                Hello {name}， {count} !!
            </p>
            <button onClick={handleNameChange}>Someone CLICKED</button>
            <button onClick={handleClick1}>Want to change Number</button>
            <button onClick={handleClick2}>but it's bad chose if change count directely</button>
            {items.length ? (
                <ul>
                    {items.map((item) =>(
                        <li className="item" key={item.id}>
                            <input
                                type="checkbox"
                                onChange={()=>handleCheck(item.id)}
                                checked={item.checked}
                            />
                            <label
                                style={(item.checked) ? {textDecoration: 'line-through'} : null}
                                onDoubleClick={()=>handleCheck(item.id)}
                            >{item.item}</label>
                            <FaTrashAlt
                                onClick={()=>handleDelete(item.id)}
                                role='button' 
                                tabIndex='0'
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ marginTop: '2rem' }}>Your List is empty</p>
            )}    
        </main>
    )
}

export default Content