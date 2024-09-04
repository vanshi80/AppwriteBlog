import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { login, logout } from './store/authSlice';


// Initial Load: The getCurrentUser function is essential for the initial authentication check when the app loads or a user returns to 
// the app.It determines the current authentication status and retrieves user data if the user is authenticated. Ongoing State 
// Management: The login and logout actions handle the state transitions in the Redux store.They ensure that any changes to the 
// authentication status are propagated throughout the application, allowing components to update accordingly.

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData)
          dispatch(login({ userData }))
        else
          dispatch(logout())
      })
      .finally(() => setLoading(false))
  }, [])

  return loading ? null : (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-100'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );

}

export default App