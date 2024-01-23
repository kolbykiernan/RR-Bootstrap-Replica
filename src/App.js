import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from './components/Background'
import NavBar from './components/NavBar'
import Listings from './components/Listings'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Background />
      <Listings />

    </div>
  );
}

export default App;
