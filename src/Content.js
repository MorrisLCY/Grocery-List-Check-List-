import { useState } from 'react';
import ItemList from './ItemList';

const Content = ({items, handleCheck, handleDelete}) => {
    // const [name, setName] = useState('Morris');
    // const [count, setCount] = useState(0);
    // CH6 useState
    // const handleNameChange = () =>{
    //     const name = ['Morris', 'Paul', 'Teresa', 'Sylvia'];
    //     const int = Math.floor(Math.random()*4);
    //     setName(name[int]);
    // }

    // const handleClick1 = () =>{
    //     var number = count;
    //     setCount(number+=1)
    //     console.log(count)
    // }

    // const handleClick2 = () =>{
    //     console.log(count)
    // }

    // return(
    //     <main>
    //         <p>
    //         Hello {name}， {count} !!
    //         </p>
    //         <button onClick={handleNameChange}>Someone CLICKED</button>
    //         <button onClick={handleClick1}>Want to change Number</button>
    //         <button onClick={handleClick2}>but it's bad chose if change count directely</button>
    //     </main>

    // )

    return(
        <main>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p style={{ marginTop: '2rem' }}>Your List is empty</p>
            )}    
        </main>
    )
}

export default Content