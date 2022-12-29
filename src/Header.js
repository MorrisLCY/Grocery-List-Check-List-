const Header = ({title}) => {
    // also could use props and props.title
    // const headerStyle = {
    //     backgroundColor: 'royalblue',
    //     color: '#fff'
    // }
    return(
        <header>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps ={
    title: "if not passing props then Default Title"
}


export default Header