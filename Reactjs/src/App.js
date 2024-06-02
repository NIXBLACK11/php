import logo from './logo.svg';
import './App.css';
import Product from './Product';
import Sdata from './Sdata';

function App() {
  return (
    <div className="App">
      <header>My Portal</header>
      <nav>
            <a href="https://fonts.google.com/selection/embed">Home</a>
            <a href="https://fonts.google.com/selection/embed">About</a>
            <a href="https://fonts.google.com/selection/embed">Products</a>
            <a href="https://fonts.google.com/selection/embed">Contact</a>
        </nav>
      <div class="product">
      {Sdata.map((val)=>{
        return(
          <Product imgsrc={val.psrc} title={val.pname}/>
            );
      })}
      </div>
      </div>
  );
}

export default App;
