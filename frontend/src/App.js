
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {



// useEffect(() => {
//   fetchUserDetails(); // This will fetch user details when the app loads
// }, [dispatch]); // Adding dispatch as a dependency ensures the effect is registered correctly


  return (
    <div className="App">
      <ToastContainer position='top-center'/>
      <Header/>
      <main className='min-h-[calc(100vh-120px)] pt-16'>
      <Outlet/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
