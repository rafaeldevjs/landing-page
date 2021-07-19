import Article from './components/Article';
import FormData from './components/FormData';
import Comments from './components/Comments';

import './assets/css/App.css';
import teck from './assets/img/teck.png';

function App() {
  return (
    <div className="App">
      <header>
        <img src={teck} alt="logo" />
      </header>
      <div className="content">
        <Article />
        <FormData />
      </div>
      <Comments />
      <footer>
        <p>&copy; 2021 TECKSTORE.COM</p>
      </footer>
    </div>
  );
}

export default App;
