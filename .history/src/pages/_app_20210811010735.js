//ENTRY POINT TO THE APP
import { Provider } from 'react-redux';
import { store } from '../app/store';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';
import { ToastContainer, Zoom } from "react-toastify";
import { Provider as AuthProvider } from 'next-auth/client';

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer transition={Zoom} style={{ font-size: "2000px" }} />
      </Provider>
    </AuthProvider>
  );
};

export default MyApp;
