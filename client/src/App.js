import './App.css';
import FollowUp from './components/FollowUp/FollowUp';
import ForToday from './components/ForToday/ForToday';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header md className="date-header">
        July 21, 2020
      </Header>
      <ForToday />
      <FollowUp />
    </div>
  );
}

export default App;
