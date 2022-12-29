const Content = () => {
    const handleNameChange = () =>{
        const name = ['Morris', 'Paul', 'Teresa', 'Sylvia'];
        const int = Math.floor(Math.random()*4);
        return name[int];
    }

    return(
        <main>
            <p>
                Hello {handleNameChange()} !!
            </p>
        </main>
    )
}

export default Content