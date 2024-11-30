
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import setUserDetails from './store/userSlice'

import { useDispatch } from 'react-redux';
import SummaryApi from './common';


function App() {

  const dispatch = useDispatch()

 const fetchUserDetails = async () => {
    
  
    try {
        

        const dataResponse = await fetch(SummaryApi.current_user.url, {
            method: SummaryApi.current_user.method,
            credentials: "include", // Include cookies in the request
            headers: {
                'Content-Type': 'application/json',
                // Add other headers if necessary
            }
        });


        // Check if the response status is OK (status code 200-299)
        if (!dataResponse.ok) {
            throw new Error(`HTTP error! Status: ${dataResponse.status}`);
        }

        // Parse the response as JSON
        const dataApi = await dataResponse.json();
       
       
    

        // //Check if the API returned a success flag
        if (dataApi.success) {
            // Dispatch user details to the store
            dispatch(setUserDetails(dataApi?.data));
            // setCartProductCount(dataApi?.data?.count)
        } else {
            console.error("API response error:", dataApi.message);
        }
    } catch (error) {
        console.error("Fetch user details error:", error);
    }
}


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
