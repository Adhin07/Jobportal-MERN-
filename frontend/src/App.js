
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className='min-h-[calc(100vh-120px)] pt-16'>
      <Outlet/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
