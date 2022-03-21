import './App.css';
import Device from './components/device/Device';
import Watch from './components/watch/Watch';

function App() {
  return (
    <div className="App">
       <Device price='1,32,000' name='Iphone 13 pro'></Device>
       <Watch></Watch>
    </div>
  );
}

export default App;
