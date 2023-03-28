import { Board } from './components/Board';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { TodoProvider } from './context/TodoProvider';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Sidebar />
        <TodoProvider>
          <Board />
        </TodoProvider>
      </div>
    </div>
  );
}

export default App;
