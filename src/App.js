import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  const handleName = () =>{
    const names = ['Morris', 'Sylvia', 'Teresa'];
    const int = Math.floor(Math.random()*3);
    return names[int];
  }
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
      <p>JSX is a javascript & React Template of html</p>
      <p>we can't do object in object </p>
    </div>
  );
}

export default App;
