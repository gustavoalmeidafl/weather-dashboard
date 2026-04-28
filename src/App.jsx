import './App.css';
import Dashboard from './pages/Dashboard';
import 'primeicons/primeicons.css';
import Sidebar from './components/Sidebar/sidebar';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Header />

        <div className="content">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;