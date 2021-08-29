//ENTRY POINT TO THE APP
import { Provider } from 'react-redux';
import { store } from '../app/store';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';
import { ToastContainer, Slide } from 'react-toastify';
import { Provider as AuthProvider } from 'next-auth/client';


const progress = new ProgressBar({
  size: 4,
  color: '#3483FA',
});



const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer transition={Slide} className="text-sm" />
      </Provider>
    </AuthProvider>
  );
};

export default MyApp;
