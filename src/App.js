import './App.css'; // CSS features are used in this app.
import { Outlet } from 'react-router-dom'; // We use the outlet property so we import them.
import { Footer } from './routes/Footer';
import { Header } from './routes/Header';

function App() {
  return (
    <>
    <Header/>

      {/* We render the nested component on the same page with "Outlet" */}

      <div className='container'>
        <Outlet />
      </div>
      
      <Footer/>
    </>
  );
}

export default App;