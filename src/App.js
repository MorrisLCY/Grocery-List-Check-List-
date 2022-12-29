import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
      <p style={{fontsize: '10px'}}>JSX is a javascript in XML & React Template of html</p>
      <p>we can't do object in object </p>
    </div>
  );
}

export default App;
