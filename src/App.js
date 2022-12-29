import logo from './logo.svg';
import './App.css';

function App() {
  const handleName = () =>{
    const names = ['Morris', 'Sylvia', 'Teresa'];
    const int = Math.floor(Math.random()*3);
    return names[int];
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {handleName()} !
        </p>
        <p>JSX is a javascript & React Template of html</p>
        <p>we can't do object in object </p>
      </header>
    </div>
  );
}

export default App;
