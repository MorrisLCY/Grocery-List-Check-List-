const Content = () => {
    const handleNameChange = () =>{
        const name = ['Morris', 'Paul', 'Teresa', 'Sylvia'];
        const int = Math.floor(Math.random()*4);
        return name[int];
    }

    const handleClick = () =>{
        console.log("YOU CLICKED !")
    }

    const handleNameClick = (name) =>{
        console.log(`${name} was clicked`)
    }

    const handleEventClick = (e) =>{
        console.log(e.target.innerText)
    }

    return(
        <main>
            <p>
                Hello {handleNameChange()} !!
            </p>
            <button onClick={handleClick}>CLICKED</button>
            <button onClick={() => handleNameClick('Morris')}>NAME CLICKED</button>
            <button onClick={(e) => handleEventClick(e)}>Event</button>
        </main>
    )
}

export default Content