import './App.css';
import Navigation from './component/Navigation';
import Portfolio from './component/Portfolio';
import Profile from './component/Profile';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Profile/>
      <Portfolio/>
    </div>
  );
}

export default App;
