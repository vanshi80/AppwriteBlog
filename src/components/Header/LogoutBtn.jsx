import { logout } from '../../store/authSlice';
import authService from '../../appwrite/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function LogoutBtn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        authService.logout()
            .then(() => {
                dispatch(logout());
                navigate('/'); // Redirect to home after logging out
            })
            .catch(error => {
                console.error("Logout failed: ", error); // Handle logout error if needed
            });
    }

    return (
        <button
            className='w-full text-left px-4 py-2 text-sm font-semibold rounded-lg text-white hover:bg-blue-800 transition-colors duration-200'
            onClick={logoutHandler}
        >
            Logout
        </button>
    );
}

export default LogoutBtn;
