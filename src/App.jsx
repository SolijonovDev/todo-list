import { Board } from './components/Board';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Sidebar />
        <Board />
      </div>
    </div>
  );
}

export default App;
