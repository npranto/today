import './App.css';
import ForToday from './components/ForToday/ForToday';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header lg className="date-header">
        July 21, 2020
      </Header>
      <ForToday />
    </div>
  );
}

export default App;
