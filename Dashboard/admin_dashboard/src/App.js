import { RouterProvider } from 'react-router-dom';
import Router from './routes/Router';
import './App.css';

function App() {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
