import Sidebar from './components/Sidebar';
import AppRoutes from './routes';

const App = () => (
  <div className="app">
    <Sidebar />
    <div className="main-content">
      <AppRoutes />
    </div>
  </div>
);

export default App;
